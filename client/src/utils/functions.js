export const  getMonthNumber = (month) =>{
    const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"]
    return monthNames.indexOf(month)
}

export const getMonthName = (n) => {
    const monthNames = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"]
    return monthNames[n];
}

export const toDateString = ({month,day}) => {
    const numericMonth = getMonthNumber(month)
    const date = new Date(2021,numericMonth,day)
    const  dateString = date.toLocaleDateString('en-GB')
    return dateString
}

export const dateStringtoDay = (dateString) => {    // DD/MM/YYYY -> DD 
   
    const parts= dateString.split('/')
    const n = parseInt(parts[0],10)
    return n;
}
export const capitalize = (word) => {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }