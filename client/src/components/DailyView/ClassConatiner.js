
import {getMonthNumber} from '../../utils/functions'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import ClassCard from './ClassCard'

function ClassContainer({day,setShowClasses}){
    const {daysArr} = useSelector(state=>state)
    const {month} = useParams()
    const numericMonth = getMonthNumber(month)
    const date = new Date(2021,numericMonth,day)
    const dateString = date.toLocaleDateString(date,{weekday:'long',day:'numeric',month:'long'})
    const todaysClasses = daysArr[day-1]
    
    return <>
         <div className = 'classContainer'>
          <div className = 'card'>
              <div className = 'classHeader'>
              <button onClick={() => setShowClasses(false)} id = 'close'>&times;</button>
                  {dateString}
              </div>
              <div style = {{display : 'flex',flexDirection :'column'}} >
                  {todaysClasses.map( (classInfo,index) => (
                    <ClassCard classInfo = {classInfo}  key = {index} />
                  ))}
                 
              </div>
          </div>
         </div> 
    </>
}
export default ClassContainer