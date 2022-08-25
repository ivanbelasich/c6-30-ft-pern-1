function updateModelEntry(model) {
    return async function (user, props) {
        try {
            let rowsDestroyed = await model.update({ ...props }, { where: { user } })
            return rowsDestroyed > 0
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = updateModelEntry