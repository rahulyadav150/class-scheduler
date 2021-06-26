const initialState = {selectedTeacher:'All',view:''}
function filterReducer(state = initialState, action) {
    switch (action.type) {
        case 'changeTeacher':
            return {...state,selectedTeacher:action.payload}
        default:
            return state;
    }
}
export default filterReducer;