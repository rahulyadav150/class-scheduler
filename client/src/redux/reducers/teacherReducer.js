import {teacherTypes} from '../actions/teacherAction'

const initialState = []
const teacherReducer = (state=initialState, action)=>{
    switch(action.type){
        case teacherTypes.getTeachers:
            return [...action.payload]
        case teacherTypes.addTeacher:
                return [...state,action.payload]
        default: 
        return state
    }
}

export default  teacherReducer