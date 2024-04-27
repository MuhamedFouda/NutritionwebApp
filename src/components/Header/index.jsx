import { Link, useNavigate } from "react-router-dom"
import "./index.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LogOut from "../logout";
import { useRecoilState } from "recoil";
import $isauth from "../../atoms/authatom";
import { Fragment, useEffect, useState } from "react";
import $isAdmin from "../../atoms/isAdmin";
import $loader from "../../atoms/loader";

export default function Header() {
  const[isAdmin]=useRecoilState($isAdmin)
  const [userauth] = useRecoilState($isauth)
  const navigate=useNavigate()
  const[loader,setloader]=useRecoilState($loader)
  function Setloader(){
   setloader(1)
   setTimeout(()=>{
    setloader(2)
   },3000)
  }
function photoHome(){
  navigate('/')
}
  


const [sticky, setsticky] = useState(false)

useEffect(() => {
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? setsticky(true) : setsticky(false)
  })
}, [])



const[mobileveiw,setmobileveiw]=useState(false)
  const toggleMenu=()=>{
    mobileveiw ? setmobileveiw(false) : setmobileveiw(true);

  }


  return (
    <div className={`header ${sticky ? 'dark-header' : ''}`}>
      <div className="logo">
        <img src={require('../../assets/Capture5.JPG')} style={{height:"3rem",width:"10rem"}} onClick={photoHome}/>
      </div>
      <div className={`links ${mobileveiw? '':'hide-mobile-menu'}`}>
        {userauth.isauth?(<Link className="link" to={"/"} onClick={Setloader} > Home </Link>):""}
        {userauth.isauth ?(<Link className="link" to={"/Athelets"} onClick={Setloader} > Athelets </Link>):""}
        {userauth.isauth ?(<Link className="link" to={"/NutritionPage"} onClick={Setloader} > Nutrition </Link>):""}
        {userauth.isauth ?(<Link className="link" to={"/HealthCoach"} onClick={Setloader} > H-Coach </Link>):""}
        {isAdmin && userauth.isauth?(<Link className="link" to={"/Doctors"} onClick={Setloader}> Booking </Link>):""}
        
      </div>
      {
        (userauth.isauth) ? (<Fragment>
          {
            // isAdmin?<span>Welcome Dr in Your Website</span>:null
          }
          {/* <span> Welcome: {userauth.user.name}</span> */}
          <LogOut mobileveiw={mobileveiw} setmobileveiw={setmobileveiw}/>
        </Fragment>) : (<Fragment>
          <div className="login">
            <button className="btn btn-light" style={{backgroundColor:"#E3867B"}}>
              <Link to={"/Login"} style={{ color: "white", textDecoration: "none" }}> Login </Link>
            </button>
            <button className="btn btn-light" style={{backgroundColor:"#E3867B"}}>
              <Link to={"/Register"} style={{ color: "White", textDecoration: "none" }}> Register </Link>
            </button>
          </div>
        </Fragment>)
      }

        {userauth.isauth?(<img src={require('../../Assetss/menu-icon.png')} className='menu-icon' onClick={toggleMenu}/>):""}
      
    </div>
  )
}
