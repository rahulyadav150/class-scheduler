import { capitalize } from '../utils/functions'
import { useSelector,useDispatch } from 'react-redux'
import {  useState} from 'react'
import AddClass from './inputComponents/AddClass'


function Header({ name, handleNext, handleBack }) {
  name = capitalize(name)
  
  const { teachers,filter } = useSelector(state => state)
  const [showAdd, setShowAdd] = useState(false)
  const dispatch = useDispatch()
 
const handleChange =(e) =>{
     
  dispatch({type:'changeTeacher',payload:e.target.value})
}
   
  

  return <>
    <div className='header'>
      <div className=' heading headerItems'>
        <i onClick={handleBack} class="fas fa-arrow-left fa-2x " ></i>
        <h3 style={{ fontSize: '2.3rem', fontWeight: 300 }}>
          {name}, 2021
        </h3>
        <i onClick={handleNext} 
           class="fas fa-arrow-right fa-2x">
        </i>
      </div>
      <div className='headerItems'>
        <div style={{ marginLeft: '5px' }}>
          <select name='teacherName' 
                  value = {filter.selectedTeacher} 
                  onChange= {handleChange} 
                  className='filter' >
              <option value= 'All'  >
                All
              </option>
              {teachers.map(teacher => (
                <option value={teacher.teacherName} 
                        key={teacher.teacherId}>
                        {teacher.teacherName}
                </option>
            ))
            }
          </select>
        </div>
        <div>
          <select name='teacherName' className='view'>
            <option value='A'>
              Month 
            </option>
            <option value='B' >
              Week 
            </option> 
          </select>
        </div>
        <i class="fas fa-plus-circle fa-3x" 
            onClick={() => setShowAdd(true)} 
            style = {{margin:'0 10px'}} >

        </i>
      </div>
      {showAdd ? <AddClass  setShowAdd={setShowAdd} /> : null}
    </div>

  </>
}

export default Header;