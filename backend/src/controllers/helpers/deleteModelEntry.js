function deleteModelEntry(model) {
    return async function (props) {
        try {
            let rowsDestroyed = await model.destroy({ where: props })
            return rowsDestroyed > 0
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = deleteModelEntry