import { BrowserRouter as Router, Route, Switch ,useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeachers } from './redux/actions/teacherAction';
import Monthly from './components/Monthly'
import Notify from './components/notify/Notify'
import Home from './components/Home'

function App() {
  
   
     const dispatch = useDispatch()
      useEffect(()=>{
    dispatch(getTeachers())
    

  },[dispatch])
  return <>
    <Router>
    <Notify />
      <div className = 'container'>
      <Switch>
      
        <Route exact path='/:month' component={Monthly} />
        <Route exact path = '/' component={Home} />
      </Switch>
      </div>
    </Router>
          
  </>
}

export default App;
