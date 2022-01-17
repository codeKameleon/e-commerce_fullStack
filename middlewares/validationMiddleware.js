const Joi = require('joi')

const registerValidation = data => {
    const schema =  Joi.object({
        username: Joi.string()
            .alphanum()
            .min(6)
            .required(),
        
        email: Joi.string()
            .min(6)
            .email()
            .required(),

        password: Joi.string()
            .min(6)
            .required()
    }).options({ allowUnknown: true })

    return schema.validate(data)
}

module.exports =  {
    registerValidation
}