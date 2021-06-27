import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {  toDateString,dateStringtoDay } from '../../utils/functions'
import {useDispatch,useSelector} from 'react-redux'
import { createClass } from '../../redux/actions/classAction'

function AddClass({ day,setShowAdd }) {
    const dispatch = useDispatch()
    const {teachers} = useSelector(state => state)
    const { month } = useParams()
   
    
    let date;
    if (day) date = toDateString({ month, day })
    const obj = {topic:'',teacherId:'',date:date,starts_at:'',ends_at:''}
    const [inputData, setInputData] = useState(obj)
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputData({...inputData,[name] :value})
    }
   
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowAdd(false)
        dispatch(createClass({inputData}))
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
                  
                  id='teacher' 
                  onChange={handleChange} >
                    <option value ='none' selected hidden disabled >
                    Select an Option
                    </option>
                    {teachers.map((teacher) => (
                        <option value={teacher.teacherId} 
                            index = {teacher.teacherId}> 
                            {teacher.teacherName} 
                        </option>
                    ))}
                </select>
                <br />

                <label htmlFor='date'>Date</label>
                <input type='text' 
                  id='date' 
                  name='date' 
                  style = {{marginBottom:'0'}} 
                  value={inputData.date} 
                  onChange={handleChange} 
                  placeholder = '23/06/2021' required />
                <span style = {{fontSize:'.7rem',
                                color:'red',
                                display:'block',
                                marginBottom:'15px',
                                marginTop:'2px'}} >
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
                  placeholder='13:30:00' required />
                <br />

                <div style = {{display:'flex',
                               justifyContent:'center'}} >
                <button className = 'canclebtn' 
                        onClick = {()=>setShowAdd(false)} > Cancel 
                </button>
                
                
                <button type='submit' 
                        className ='addbtn'>ADD
                </button>
                </div>

            </form>
        </div>

    </>

}

export default AddClass