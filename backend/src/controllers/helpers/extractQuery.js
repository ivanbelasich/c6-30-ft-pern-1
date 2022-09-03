function extractQuery(req) {
    let params = new URLSearchParams(req.url.split('?')[1])
    return Array
        .from(params.entries())
        .reduce((a, b) => {
            a[b[0]] = b[1]
            return a
        }, {})
}
module.exports = extractQuery