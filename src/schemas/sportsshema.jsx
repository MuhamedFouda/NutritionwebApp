import * as yup from 'yup'

const sportsshema=yup.object().shape({
    name:yup.string('should be string').required('* Name is required'),
    age:yup.number('should be a number').required('* Age is required').min(2).integer().positive(),
    marital_Status:yup.string().required('* Marital Status is required').min(2,'* min character is 2'),
    job:yup.string('should be string').required('* Job is required'),
    sports:yup.string('should be string').required('* Sports is required'),
    exercise:yup.number('should be a number').required('required').positive().max(7,'max num is 7'),
    time:yup.number('should be a number').required('required').positive().max(24,'max num is 24'),

})

export default sportsshema;