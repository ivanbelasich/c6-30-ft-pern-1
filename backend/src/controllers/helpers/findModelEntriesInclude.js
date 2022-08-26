function findModelEntriesInclude(model, modelInclude) {
    return async function (query) {
        try {
            let response = await model.findAll({ ...query, include: modelInclude })
            return response
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = findModelEntriesInclude