function jwtError(message){
    return {
        success:false,
        message
    }
}
module.exports = jwtError