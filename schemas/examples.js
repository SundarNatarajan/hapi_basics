//module functions
const {number} = global.config.utilities.Joi

module.exports = {
    replyParam: {
        params: {
            number: number().required().description('the number for the todo item')
        }
    }
}