function extractQuery(url) {
    let params = new URLSearchParams(url.split('?')[1])
    return Array
        .from(params.entries())
        .reduce((a, b) => {
            a[b[0]] = b[1]
            return a
        }, {})
}
module.exports = extractQuery