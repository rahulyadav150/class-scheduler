import { BrowserRouter as Router, Route, Switch ,useHistory} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTeachers } from './redux/actions/teacherAction';
import Monthly from './components/Monthly'
import Notify from './components/notify/Notify'
import {getMonthName}

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTeachers())
    const date = new Date()
    const monthNumber = date.getMonth()
    const month = getMonthName(monthNumber)
    history.push(`/month`)

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
