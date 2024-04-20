import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/validaterror'
import Registershema from '../../schemas/registershema'
import './index.scss'

export default function Register() {



  const navigate = useNavigate()
  function handelregister(values) {
    const newvalues = { ...values }
    delete newvalues.confirm_password
    axios.post('http://localhost:3000/Users', newvalues)
    navigate('/Login')
    localStorage.setItem('users', JSON.stringify(newvalues));
  }



  return (
    <div className='register'>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={handelregister}
        validationSchema={Registershema}
      >
        <Form>

          <div>
            <label>User Name</label>
            <Field type="text" className="form-control" placeholder="Enter email" name='name' />
            <Error>
              <ErrorMessage name='name' />
            </Error>
          </div>
          <div className="form-group">
            <label >Email address</label>
            <Field type="email" className="form-control" placeholder="Enter email" name='email' />
            <Error>
              <ErrorMessage name='email' />
            </Error>
          </div>
          <div className="form-group">
            <label >Password</label>
            <Field type="text" className="form-control" placeholder="Password" name='password' onPaste={(e) => {
              e.preventDefault()
              return false;
            }} />
            <Error>
              <ErrorMessage name='password' />
            </Error>
          </div>
          <div className="form-group">
            <label >Confirm Password</label>
            <Field type="text" className="form-control" placeholder="Password" name="confirm_password" onPaste={(e) => {
              e.preventDefault()
              return false;
            }} />
            <Error>
              <ErrorMessage name='confirm_password' />
            </Error>
          </div>

          <button type="submit" className="btn btn-light" style={{ backgroundColor: "#E3867B" }}> Register </button>


        </Form>
      </Formik>
    </div>
  )
}
