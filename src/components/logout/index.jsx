import { useRecoilState } from 'recoil'
import $isauth from '../../atoms/authatom'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function LogOut() {
    const navigate = useNavigate()
    const [userauth, setuserauth] = useRecoilState($isauth)
    function logout() {
        setuserauth({
            isauth: false,
            user: null
        })
        localStorage.removeItem('userslogined')
        navigate('/')
        toast(`You Loged Out Successfully`)
    }
    return (
        <button className='logout btn btn-light ' onClick={logout} style={{color:"orangered"}} > Log out</button>
    )
}
