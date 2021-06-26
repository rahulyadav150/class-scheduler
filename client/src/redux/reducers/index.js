import { combineReducers } from "redux"
import classReducer  from "./classReducer"
import teacherReducer from "./teacherReducer"
import notifyReducer from "./notifyReducer"
import filterReducer from "./filterReducer"

export default combineReducers({
   daysArr : classReducer,
   teachers : teacherReducer,
   Alert : notifyReducer,
   filter:filterReducer

})