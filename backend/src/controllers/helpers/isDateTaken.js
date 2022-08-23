function mapDateToTime(date) {
    if (date instanceof Date) return date.getTime()
    else return new Date(date).getTime()
}

function isDateTaken(date, dateArray) {
    let toSeconds = dateArray.map(k => mapDateToTime(k))
    return toSeconds.includes(new Date(date).getTime())
}

module.exports = isDateTaken