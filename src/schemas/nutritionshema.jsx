import * as yup from 'yup'

const nutritionshema =yup.object().shape({
    name:yup.string().required('* Name is required'),
    age:yup.number().required('* Age is required').min(2).integer().positive(),
    marital_Status:yup.string().required('* Marital Status is required').min(2,'* min character is 2'),
    job:yup.string().required('* Job is required'),
    height:yup.number().required('* Height is required'),
    weight:yup.number().required('* weight is required'),
    sports:yup.string().required('* Sports is required').oneOf(['yes','no']),


})

export default nutritionshema;