

import { useSelector, useDispatch } from 'react-redux'
import Toast from './Toast';
function Notify() {
   const { Alert } = useSelector(state => state);
   const dispatch = useDispatch();
   function handleShow() {
      return dispatch({ type:'ALERT', payload: {} })

   }

   return (<>
     {Alert.err && <Toast msg='Error!' 
         info={Alert.err} 
         handleShow={handleShow}
      />}
     
   </>
   )
}
export default Notify;