import {useParams,useHistory} from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import Header from './Header'
import Day from './Day'
import { classTypes, getClasses ,getClassesByTeacher} from '../redux/actions/classAction'
import {getMonthNumber,getMonthName} from '../utils/functions'


function Monthly(){
    const {daysArr,filter,teachers} = useSelector(state => state)
    const dispatch = useDispatch()
    const location = useHistory()
   
  
    const {month} = useParams()
    const date = new Date()
    const year = date.getFullYear();
    const numericMonth =  getMonthNumber(month)
    const daysInMonth = new Date(year,numericMonth+1,0).getDate()
    const skippedDays= new Date(year,numericMonth,1).getDay();
   
    
   
  

    const handleBack = () =>{
        const n =(12+numericMonth-1)%12
        const nextMonth = getMonthName(n)
        location.push(`/${nextMonth}`)
    }
    
    const handleNext = () => {
        
        const n = (numericMonth+1)%12
        const nextMonth = getMonthName(n)
        location.push(`/${nextMonth}`)
    }

    
    

    useEffect(()=>{
        let Arr = []
        for(let i=0;i<daysInMonth;i++)
        Arr.push([])
        dispatch({type:classTypes.initialize,payload : Arr})
        
    },[month,dispatch,daysInMonth])

   
    useEffect(()=>{
        if(filter.selectedTeacher!=='All')
        { const temp  = teachers.filter( item => item.teacherName === filter.selectedTeacher)
          dispatch(getClassesByTeacher(month,temp[0].teacherId,daysInMonth))
        }
        else
        dispatch(getClasses(month))
      },[filter,month,dispatch])



return <>
     <div className = 'calender_container'>
     <Header name = {month} daysInMonth = {daysInMonth} handleNext = {handleNext} handleBack = {handleBack}/>
     <div className = 'calendar'>
     <div className = 'weekDays'>
         <div>Sunday</div>
         <div>Monday</div>
         <div>Tuesday</div>
         <div>Wedenesday</div>
         <div>Thursday</div>
         <div>Friday</div>
         <div>Saturday</div>
     </div>
     <div className = 'days'>
        {daysArr.map((d,index)=>(
              index===0 ? <Day firstDay = 'true'  
                                key = {index} 
                                day = {index+1} 
                                skippedDays={skippedDays}  
                                todayClasses = {d}
                                
                            /> 
                        : <Day  key = {index} 
                                day = {index+1} 
                                todayClasses = {d}

                            />
        ))}
     </div>
     </div>
     </div>
    </>
}
export default Monthly