import { useState } from 'react'
import AddClass from './inputComponents/AddClass'
import ClassContainer from './DailyView/ClassConatiner'

function Day({firstDay,day,skippedDays,todayClasses}){
   
     const [showAdd,setShowAdd] = useState(false)
     const [showClasses,setShowClasses] = useState(false)
    
     return <>
     <div className = 'day' style = {{gridColumnStart : firstDay==='true' ? skippedDays : null}}>
       <h5>
           {day}
       </h5> 
       {todayClasses.length >0 ?  <button onClick = {()=>setShowClasses(true)}>{todayClasses.length } Class scheduled</button> : null }
       <i class="fas fa-plus-circle fa-2x addIcon" onClick = {() => setShowAdd(true)} ></i>
       
       {showAdd ? <AddClass  day = {day}  setShowAdd = {setShowAdd}/> : null}
       {showClasses && <ClassContainer day = {day} setShowClasses = {setShowClasses}/>}
     </div>
     </>
}

export default Day