import * as yup from 'yup'

const Registershema=yup.object().shape({
    name:yup.string().required('* Name is required'),
    email:yup.string().required('* Email is required').email(),
    password:yup.string().required('* Password is required').min(2,'* min character is 2'),
    confirm_password:yup.string().required('* Password is required').oneOf([yup.ref('password')],"* Your password Don't match"),
})

export default Registershema;