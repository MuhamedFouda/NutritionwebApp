import * as yup from 'yup'

const Registershema=yup.object().shape({
    name:yup.string().required('* Name is required'),
    email:yup.string().required('* Email is required').email('* Should be aValid email'),
    password:yup.string().required('* Password is required').min(8,'* min character is 8').matches('^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$','You Should create Strong Password'),
    confirm_password:yup.string().required('* Password is required').oneOf([yup.ref('password')],"* Your password Don't match"),
})

export default Registershema;