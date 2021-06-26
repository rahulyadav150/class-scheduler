


function Toast(props) {

    return <>
        
        <div className='alert'>
            <strong>{props.msg} </strong>{props.info}
            <button onClick={props.handleShow} type="button">&times;</button>
        </div>
    </>
}
export default Toast;