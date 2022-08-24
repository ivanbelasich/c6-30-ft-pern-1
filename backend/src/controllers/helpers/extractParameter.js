function extractParameter(attributeName) {
    return function (req) {
        if (!req.params || !req.params[attributeName]) return {}
        else return { [attributeName]: req.params[attributeName] }
    }
}
 
module.exports = extractParameter