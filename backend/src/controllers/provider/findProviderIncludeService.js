function findProviderIncludeService(model, include) {
    return async function (query) {
        try {
            let response = await model.findOne({...query, include })
            return response
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = findProviderIncludeService