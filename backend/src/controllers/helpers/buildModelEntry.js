function buildModelEntry(model) {
    return async function (props) {
        try {
            let response = await model.create(props)
            return response
        }
        catch (error) {
            throw error
        }
    }
}
module.exports = buildModelEntry