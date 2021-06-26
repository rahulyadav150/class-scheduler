import { getDataAPI } from "../../utils/fetchdata"

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

export const AddTeacher  = () => dispatch => {
   
}