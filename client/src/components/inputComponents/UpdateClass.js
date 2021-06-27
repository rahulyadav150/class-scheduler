
import { useState } from 'react'

import {  toDateString,dateStringtoDay } from '../../utils/functions'
import {useDispatch,useSelector} from 'react-redux'
import { updateClass } from '../../redux/actions/classAction'

function UpdateClass({ classInfo,setShowUpdate }) {
    const dispatch = useDispatch()
    const {teachers} = useSelector(state => state)
    
    classInfo.preDay = dateStringtoDay(classInfo.date)
    const [inputData, setInputData] = useState(classInfo)
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputData({...inputData,[name] :value})
    }
   
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowUpdate(false)
        dispatch(updateClass({inputData}))
    }




    return <>
        <div className='addClass'>
            <form onSubmit={handleSubmit} >
                <label htmlFor='topic'>Topic</label>
                <input id='topic' 
                  name='topic' 
                  value={inputData.topic} 
                  onChange={handleChange}  
                  required />
                <br />

                <label htmlFor='teacher'>Teacher's name</label>
                <select name='teacherId' 
                  value={inputData.teacherId} 
                  id='teacher' 
                  onChange={handleChange} >
                    
                    {teachers.map((teacher) => (
                        <option value={teacher.teacherId} index = {teacher.teacherId}>{teacher.teacherName} </option>
                    ))}
                </select>
                <br />

                <label htmlFor='date'>Date</label>
                <input type='text' 
                  
                  name='date' 
                  style = {{marginBottom:'0'}} 
                  value={inputData.date} 
                  onChange={handleChange} 
                  placeholder = '23/06/21' required/>
                <span style = {{fontSize:'.7rem',
                    color:'red',
                    display:'block',
                    marginBottom:'15px',
                    marginTop:'2px'}}>
                  DD/MM/YYYY 
                </span>
                <label htmlFor='starts_at'>Starts at <small>(HH:MM:SS)</small></label>
                <input type='text' 
                  id='starts_at' 
                  name='starts_at' 
                  value={inputData.starts_at} 
                  onChange={handleChange} 
                  placeholder = '08:30:00' required />
                
                <label htmlFor='ends_at'>Ends at <small>(HH:MM:SS)</small></label>
                <input type='text' 
                  id='ends_at' 
                  name='ends_at' 
                  value={inputData.ends_at} 
                  onChange={handleChange} 
                  placeholder='13:30:00' required/>
                <br />

                <div style = {{display:'flex',
                               justifyContent:'center'}}>
                    <button className = 'canclebtn' 
                         onClick = {()=>setShowUpdate(false)}  >Cancel
                    </button>
                    <button type='submit' 
                        className ='addbtn'>Update
                    </button>
                </div>

            </form>
        </div>

    </>

}

export default UpdateClass