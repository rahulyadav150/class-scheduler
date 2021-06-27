import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTeacher} from '../../redux/actions/teacherAction'
function AddTeacher({setShowAddTeacher}){
    const [teacherName,setTeacherName] = useState('')
    const dispatch  = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setShowAddTeacher(false)
        dispatch(addTeacher(teacherName))

    }
    return <>
      <div className = 'addTeacher'>
       <form onSubmit = {handleSubmit}>
           <input onChange = {(e) => setTeacherName(e.target.value)} 
                 value = {teacherName} 
                 placeholder = 'teacher name' 
                    
                 />
            <button className = 'teacherBtn' type = 'submit' style = {{width:'50px'}}>Add
            </button>         
       </form>
      </div>
    </>
}

export default AddTeacher