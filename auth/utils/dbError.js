function dbError(sequelizeError){
    return {success: false, message: sequelizeError.name || "There was a problem connecting to the database"}
}

module.exports = dbError