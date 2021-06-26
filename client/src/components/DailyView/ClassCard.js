import {useState} from 'react'
import UpdateClass from '../inputComponents/UpdateClass'
import { deleteClass } from '../../redux/actions/classAction'
import {useDispatch} from 'react-redux'

function  ClassCard({classInfo}){
    const [showUpdate,setShowUpdate] = useState(false)
    const dispatch = useDispatch()

   const handleDelete = () => {
     console.log(classInfo)
       dispatch(deleteClass({day:classInfo.day,id:classInfo.classId}))
   }
    return <>
      <div className = 'classCard'>
          <div className = 'info'>
            <h5 style = {{margin:'0'}}>{classInfo.topic} </h5>
            <span style = {{fontSize:'.7rem',display:'block'}}> by {classInfo.teacherName}</span>
            <small style={{fontSize:'1.2rem',fontWeight:'300'}}>{classInfo.starts_at} : {classInfo.ends_at} </small>
          </div>
          <div className = 'Editingitems' style = {{marginTop:'10px'}}>
             <i class="far fa-edit " style = {{marginRight:'5px'}} onClick = {()=>setShowUpdate(true)}></i>
             <i class="fas fa-trash" onClick = {handleDelete}></i>
          </div>
      </div>
     { showUpdate && <UpdateClass classInfo = {classInfo} setShowUpdate = {setShowUpdate}/>}   
    </>
}

export default ClassCard