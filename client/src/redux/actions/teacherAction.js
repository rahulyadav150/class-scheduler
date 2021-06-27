import { getDataAPI,postDataAPI } from "../../utils/fetchdata"

export const teacherTypes = {
    getTeachers : 'GET_TEACHERS',
    addTeacher : 'ADD_TEACHER'
}

export const getTeachers = () => async  dispatch => {
    try {
       const res = await getDataAPI('teachers')
         dispatch({type:teacherTypes.getTeachers,payload : res.data.teachers})
    } catch (error) {
        
    }
} 

export const addTeacher  =  (teacherName) =>  async dispatch => {
    try {
        const newteacher = {teacherName:teacherName}
        const res = await postDataAPI('teachers',newteacher)
        console.log(res.data)
          dispatch({type:teacherTypes.addTeacher,payload : res.data.newteacher})
     } catch (error) {
         
     }
}