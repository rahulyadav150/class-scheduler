

const isValidTime = (timeString) =>{
    var pattern = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/
    if (!timeString.match(pattern))
        return false;
    else
        return true
}

const isOverlap =  (arr, interval) => {
    for (let i = 0; i < arr.length; i++) {
        if ((interval.starts_at >= arr[i].starts_at && interval.starts_at < arr[i].ends_at) || (interval.ends_at < arr[i].starts_at && interval.ends_at >= arr[i].ends_at))
            return true
    }
    return false
}
const validation = (newClass) => {
    

    if (!newClass.teacherId)
        return "Please select teacher's name"

    if (newClass.starts_at > newClass.ends_at)
        return "Invalid time"

    if (!isValidTime(newClass.starts_at))
        return "Please use time format HH:MM:SS (24 hour) "

    if (!isValidTime(newClass.ends_at))
        return "Please use time format HH:MM:SS (24 hour) "

    return ''
}

module.exports = {
    isValidTime:isValidTime,
    isOverlap:isOverlap,
    validation:validation
};