
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from "../../utils/fetchdata"



export const classTypes = {

    createClass: 'CREATE_CLASS',
    updateClass: 'UPDATE_CLASS',
    getClasses: 'GET_CLASSES',
    deleteClass: 'DELETE_CLASS',
    initialize: 'INITIAZE',
    getClassesByTeacher: 'GET_CLASSES_BY_TEACHER'
}


export const getClasses = (month, daysArr) => async dispatch => {
    try {
        const res = await getDataAPI(`classes/${month}`)

        dispatch({ type: classTypes.getClasses, payload: res.data.classes })
    } catch (err) {

        dispatch({ type: 'ALERT', payload: { err: err.response.data.msg } })

    }
}

export const createClass = ({ inputData }) => async dispatch => {
    try {
        const res = await postDataAPI(`classes/${inputData.month}`, inputData)
        dispatch({ type: classTypes.createClass, payload: res.data.class })
    } catch (err) {

        dispatch({ type: 'ALERT', payload: { err: err.response.data.msg } })
    }
}

export const getClassesByTeacher = (month, teacherId, daysInMonth) => async dispatch => {
    try {
        let Arr = []
        for (let i = 0; i < daysInMonth; i++)
            Arr.push([])
        dispatch({ type: classTypes.initialize, payload: Arr })
        const res = await getDataAPI(`classes/${month}/${teacherId}`)
        dispatch({ type: classTypes.getClasses, payload: res.data.classes })
    } catch (err) {

        dispatch({ type: 'ALERT', payload: { err: err.response.data.msg } })
    }
}

export const updateClass = ({ inputData }) => async dispatch => {
    try {
        const res = patchDataAPI(`classes/${inputData.classId}`, inputData)
        window.location.href = `/${inputData.Month}`
    } catch (err) {

        dispatch({ type: 'ALERT', payload: { err: err.response.data.msg } })

    }
}

export const deleteClass = ({ day, id }) => async dispatch => {
    try {
        const res = deleteDataAPI(`classes/${id}`)

        dispatch({ type: classTypes.deleteClass, payload: { day: day, id: id } })
    } catch (err) {

        dispatch({ type: 'ALERT', payload: { err: err.response.data.msg } })

    }
}