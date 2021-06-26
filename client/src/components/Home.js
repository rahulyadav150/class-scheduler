import {getMonthName} from '../utils/functions'

function Home(){
    
    const date = new Date()
    const monthNumber = date.getMonth()
    const month = getMonthName(monthNumber)
    window.location.href = `/${month}`
    return <>
       <div>
         
       </div>
     </>
}

export default Home