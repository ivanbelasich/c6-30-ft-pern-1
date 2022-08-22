function findModelEntries(model) {
    return async function (query) {
        try {
            let response = await model.findAll(query)
            return response
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = findModelEntries