import * as yup from 'yup'

const Loginshcema=yup.object().shape({
    email:yup.string().required('* Email is required').email(),
    password:yup.string().required('* Password is required').min(2,'* min character is 2'),
})

export default Loginshcema;