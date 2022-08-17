function deleteModelEntry(model) {
    return async function (props) {
        try {
            let rowsDestroyed = await model.destroy({ where: props })
            console.log(rowsDestroyed)
            return rowsDestroyed > 0
        }
        catch (error) {
            throw error
        }
    }
}

module.exports = deleteModelEntry