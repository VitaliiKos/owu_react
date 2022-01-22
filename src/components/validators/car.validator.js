// import Joi from "joi";
//
// export const CarValidator = Joi.object({
//     model: Joi.string().regex(new RegExp('^[a-zA-ZА-яёЁіІїЇґҐ]{1,20}$')).required().messages({
//         'string.empty':'"model": can\'t be empty',
//         'string.pattern.base':'"model": Only letters. min.1 letter max.20 letters',
//     }),
//     price: Joi.number().min(1).max(1000000).required().messages({
//         'number.base':'min.price - 1 max.price - 1000000',
//         'number.min':'price must be more than 0',
//         'number.max':'price must be less than 1000000',
//     }),
//     year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
//         'number.base':'min.year - 1990 max.year - now'
//     }),
// })