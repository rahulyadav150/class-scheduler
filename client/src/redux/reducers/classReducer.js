
import { dateStringtoDay } from '../../utils/functions'
import {classTypes} from '../actions/classAction'

const initialState = []
const classReducer = (state=initialState, action)=>{
    switch(action.type){
        case classTypes.initialize:
            return [...action.payload]
        case classTypes.getClasses:
            action.payload.map(item => {
                 state[dateStringtoDay(item.date)-1].push(item)
            })
           
            return [...state]

        case classTypes.createClass:
            state[dateStringtoDay(action.payload.date)-1].push(action.payload)
            return [...state]

        case classTypes.deleteClass:
              var arr = state.splice(action.payload.day-1,1)
              var  classes = arr[0]
              var filtered = classes.filter(item => item.classId!==action.payload.id)
              state.splice(action.payload.day-1,0,filtered)
              return [...state]

        case classTypes.updateClass:
             var arr = state.splice(action.payload.preDay-1,1)
             var classes = arr[0]
             var remainClasses = classes.filter((item)=> item.classId!==action.payload.classId)
             state.splice(action.payload.preDay-1,0,remainClasses)
             state[dateStringtoDay(action.payload.date)-1].push(action.payload)
            
            return [...state]
                
        
        default: 
        return state
    }
}

export default  classReducer
