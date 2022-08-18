function findModelEntry(model) {
    return async function (query) {
        try {
            let response = await model.findOne(query)
            return response
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = findModelEntry