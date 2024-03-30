import 'animate.css';
import { useRecoilState } from 'recoil'
import $isauth from '../../../../atoms/authatom'
import $isAdmin from '../../../../atoms/isAdmin'
import './index.scss'
export default function Section1() {
  const [isAdmin] = useRecoilState($isAdmin)
  const [userauth] = useRecoilState($isauth)


  return (
    <div className='section1'>
      <div className='left'>
      <h2 class="animate__animated animate__backInDown" style={{ animationDuration: "5s" }}>
            {
              (isAdmin && userauth.isauth) ? <p>Welcome <span style={{ color: "hsl(19.05deg 86.3% 57.06%)" }}> Dr/Aliaa Salah </span> at Your Website</p> : null
            }
            {
              (!isAdmin && userauth.isauth) ? <p>Welcome <span style={{ color: "hsl(19.05deg 86.3% 57.06%)" }}>{userauth.user.name}</span> at <span style={{ color: "hsl(19.05deg 86.3% 57.06%)" }}> Dr/Aliaa Salah </span> Website</p> : null
            }
            {
              (!isAdmin && !userauth.isauth) ? <p> Welcome at <span style={{ color: "hsl(19.05deg 86.3% 57.06%)" }}> Dr/Aliaa Salah </span> Website </p> : null
            }
          </h2>
        <h1> YOUR VIRTUAL DIETITIAN </h1>
        <p>
          Stop obsessing about food, feel good in your body & start living the life you want. Nutrition coaching for real women ready to see real changes.
        </p>
      </div>
      <div className='right'>
      </div>
      <img src={require('../../../../assets/aliaa.jpg')} className='img1 animate__animated animate__bounceInRight' style={{ animationDuration: "5s" }}/>
    </div>
  )
}
