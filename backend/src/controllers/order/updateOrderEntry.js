let Order = require('../../sequelize/models/Order')
async function updateOrderEntry(id, props) {
    try {
        let rowsUpdated = await Order.update(props, { where: { id } })
        return rowsUpdated > 0
    }
    catch (error) {
        throw error
    }
}

module.exports = updateOrderEntry