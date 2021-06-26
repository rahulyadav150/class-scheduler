import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeachers } from './redux/actions/teacherAction';
import Monthly from './components/Monthly'
import Notify from './components/notify/Notify'

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
      </Switch>
      </div>
    </Router>
          
  </>
}

export default App;
