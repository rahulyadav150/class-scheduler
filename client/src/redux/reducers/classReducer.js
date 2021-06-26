
import {classTypes} from '../actions/classAction'

const initialState = []
const classReducer = (state=initialState, action)=>{
    switch(action.type){
        case classTypes.initialize:
            return [...action.payload]
        case classTypes.getClasses:
            action.payload.map(item => {
                 return state[item.day-1].push(item)
            })
            return [...state]

        case classTypes.createClass:
            state[action.payload.day-1].push(action.payload)
            return [...state]

        case classTypes.deleteClass:
              var arr = state.splice(action.payload.day-1,1)
              var filtered = arr.filter(item => item.classId!==action.payloadId)
              state.splice(action.payload.day-1,0,filtered)
              return [...state]

        case classTypes.updateClass:
            var arr = state.splice(action.payload.preDay-1,1)
            var classes = arr[0]
            classes.map((item,index)=>{
                if(item.classId===action.payload.classId)
                classes[index]=action.payload
            })
             state.splice(action.payload.day-1,0,classes)
            
            return [...state]
                
        
        default: 
        return state
    }
}

export default  classReducer
