function mapDateToTime(date) {
    if (date instanceof Date) return date.getTime()
    else if (typeof date === "string") return new Date(date).getTime()
}

function dateChecker(date, dateArray) {
    let toSeconds = dateArray.map(k => mapDateToTime(k))
    return toSeconds.includes(date.getTime())
}

module.exports = dateChecker