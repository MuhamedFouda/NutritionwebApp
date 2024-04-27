import * as yup from 'yup'

const nutritionshema =yup.object().shape({
    name:yup.string('* Should be a String').required('* Name is required'),
    age:yup.number('* Should be a Number').required('* Age is required').min(2).integer('* Should be number').positive('* Should be aPositive number'),
    marital_Status:yup.string('* Should be a String').required('* Marital Status is required').min(2,'* min character is 2'),
    job:yup.string('* Should be a String').required('* Job is required'),
    height:yup.number('* Should be a Number').required('* Height is required'),
    weight:yup.number('* Should be a Number').required('* weight is required'),
    sports:yup.string('* Should be a String').required('* Sports is required').oneOf(['yes','no']),


})

export default nutritionshema;