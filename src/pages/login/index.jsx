import './index.scss'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import axios from 'axios'
import Loginshcema from '../../schemas/loginshema'
import Error from '../../components/validaterror'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { date } from 'yup'
import LogOut from '../../components/logout'
import { useRecoilState } from 'recoil'
import $isauth from '../../atoms/authatom'
import $isAdmin from '../../atoms/isAdmin'

export default function Login() {
  const navigate = useNavigate()
  const [isAdmin, setisAdmin] = useRecoilState($isAdmin)
  const [userauth, setuserauth] = useRecoilState($isauth)
  
  // function handelogin(values) {
  //   axios.get(`http://localhost:3000/Users?email=${values.email}&password=${values.password}`).then((data) => {
  //     if (data.data.length) {
  //       toast.success(`You Signed Successfully Welcome ${data.data[0].name} !`)
  //       setuserauth({
  //         isauth: true,
  //         user: data.data[0]
  //       })
  //       setisAdmin(data.data[0].role)
  //       localStorage.setItem("userslogined", JSON.stringify(data.data[0]))
  //       console.log(data.data[0])
  //       navigate('/')
  //     } else {
  //       toast.error("Wrong Email or Password")
  //     }
  //   })
  // }


  function handelogin(values){
    const user=JSON.parse(localStorage.getItem('users'))
    if(user.email===values.email&&user.password==values.password){
      setuserauth({
        isauth:true,
        user:user
      })
      navigate('/')
      axios.get(`http://localhost:3000/Users?email=${values.email}&password=${values.password}`).then((data)=>{
            if(data.data.length){
              toast.success(`You Signed Successfully Welcome ${data.data[0].name} !`)
              setuserauth({
                isauth:true,
                user:data.data[0]
              })
              setisAdmin(data.data[0].role)
              localStorage.setItem("userslogined",JSON.stringify(data.data))
              navigate('/')
            }
          })
        }else{
          toast.error("Wrong Email or Password")
        }    }


// function handelogin(values){
//     axios.get(`http://localhost:3000/Users?email=${values.email}&password=${values.password}`).then((data)=>{
//       if(data.data.length){
//         toast.success(`You Signed Successfully Welcome ${data.data[0].name} !`)
//         setuserauth({
//           isauth:true,
//           user:data.data[0]
//         })
//         setisAdmin(data.data[0].role)
//         localStorage.setItem("userslogined",JSON.stringify(data.data))
//         navigate('/')
//       }else{
//         toast.error("Wrong Email or Password")
//       }
//     })
// }

  // function handelogin(values) {
  //   axios.get(`http://localhost:3000/Users?email=${values.email}&password=${values.password}`).then((data) => {
  //     if (data.data.length) {
  //       toast.success(`You Signed Successfully Welcome ${data.data[0].name} !`)
  //       setuserauth({
  //         isauth: true,
  //         user: data.data[0]
  //       })
  //       setisAdmin(data.data[0].role)
  //       localStorage.setItem("userslogined", JSON.stringify(data.data))
  //       navigate('/')
  //       console.log(data.data[0])
  //     } else {
  //       toast.error("Wrong Email or Password")
  //     }
  //   })
  // }

  return (
    <div className='loginn'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handelogin}
        validationSchema={Loginshcema}
      >
        <Form>
          <div >
            <label >Email address</label>
            <Field type="email" className="form-control" placeholder="Enter email" name="email" />
            <Error>
              <ErrorMessage name='email' />
            </Error>
          </div>
          <div className="form-group">
            <label >Password</label>
            <Field type="password" className="form-control" placeholder="Password" name="password" onPaste={(e) => {
              e.preventDefault()
              return false; }} />
            <Error>
              <ErrorMessage name='password' />
            </Error>
          </div>
          <button type="submit" className="btn btn-light"> Login</button>

        </Form>
      </Formik>
    </div>
  )
}
