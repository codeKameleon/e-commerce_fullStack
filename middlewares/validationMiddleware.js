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
            .pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{6,}$'))
            .required() 
    })

    return schema.validate(data)
}

module.exports =  {
    registerValidation
}