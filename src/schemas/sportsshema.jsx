import * as yup from 'yup'

const sportsshema=yup.object().shape({
    name:yup.string('* should be string').required('* Name is required'),
    age:yup.number('* should be a number').required('* Age is required').min(2).integer('* should be a number').positive('* Should be aPositive number'),
    marital_Status:yup.string('* should be string').required('* Marital Status is required').min(2,'* min character is 2'),
    job:yup.string('* should be string').required('* Job is required'),
    height:yup.number('* should be a number').required('required').positive('* Should be aPositive number'),
    weight:yup.number('* should be a number').required('required').positive('* Should be aPositive number'),
    sports:yup.string('* should be string').required('* Sports is required'),
    exercise:yup.number('* should be a number').required('required').positive('* Should be aPositive number').max(7,'max num is 7'),
    time:yup.number('* should be a number').required('required').positive('* Should be aPositive number').max(24,'max num is 24'),

})

export default sportsshema;