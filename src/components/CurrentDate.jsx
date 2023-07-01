
const CurrentDate = () => {

    let todayDate = new Date(),
    month = "" + (todayDate.getMonth()+1),
    day = "" + todayDate.getDate(),
    year = todayDate.getFullYear();

    if(day.length<2){
        day="0"+day
    }
    if(month.length<2){
        month="0"+month
    }
    
    const date = `${year}-${month}-${day}` 

    return date

}

export default CurrentDate