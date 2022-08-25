let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
function mapDate(date) {
    if (date instanceof Date) return date
    else return new Date(date)
}
function twoDigits(string) {
    if (string.length < 2) return "0" + string
    else return string
}

function isDateAvailable(date, availableDates) {
    let mappedDate = mapDate(date)
    let day = days[mappedDate.getDay()]
    let hour = twoDigits(String(mappedDate.getHours()))
    let minutes = twoDigits(String(mappedDate.getMinutes()))
    
    if (!availableDates[day] || !availableDates[day] instanceof Array) return false
    else return availableDates[day].includes(`${hour}:${minutes}`)
}

module.exports = isDateAvailable

