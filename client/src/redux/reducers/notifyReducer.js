
const initialState = {}
function notifyReducer(state = initialState, action) {
    switch (action.type) {
        case 'ALERT':
            return action.payload
        default:
            return state;
    }
}
export default notifyReducer;