import { combineReducers } from "redux"
import classReducer  from "./classReducer"
import teacherReducer from "./teacherReducer"
import notifyReducer from "./notifyReducer"

export default combineReducers({
   daysArr : classReducer,
   teachers : teacherReducer,
   Alert : notifyReducer

})