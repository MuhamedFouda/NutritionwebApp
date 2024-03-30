import "./index.scss"
import 'animate.css';
import $isAdmin from "../../atoms/isAdmin";
import $isauth from "../../atoms/authatom";
import { useRecoilState } from "recoil";
import Footer from "../../components/Footer";
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";



export default function HomePage() {

  const [isAdmin] = useRecoilState($isAdmin)
  const [userauth] = useRecoilState($isauth)
  
  return (
    <div className="home" style={{}}>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Footer/>
  {/* <Section6/> */}
         {/* <div>
        <div className="img1">
          <img src={require("../../assets/bg-start-right@1x.png")} />
        </div>
        <div className="img2">
          <img src={require("../../assets/iwatch@1x.png")} />
        </div>

        <div className="text">
          <h2 class="animate__animated animate__backInDown" style={{ animationDuration: "5s" }}>
            {
              (isAdmin && userauth.isauth) ? <p>Welcome <span style={{ color: "red" }}> Dr/Aliaa Salah </span> at Your Website</p> : null
            }
            {
              (!isAdmin && userauth.isauth) ? <p>Welcome <span style={{ color: "black" }}>{userauth.user.name}</span> at <span style={{ color: "red" }}> Dr/Aliaa Salah </span> Website</p> : null
            }
            {
              (!isAdmin && !userauth.isauth) ? <p> Welcome at <span style={{ color: "red" }}> Dr/Aliaa Salah </span> Website </p> : null
            }
          </h2>
          <h1 className="animate__animated animate__swing" style={{ animationDuration: "5s" }}>Be Healthy for Life! </h1>
          <p>
            Your weight loss, diet, and nutrition assistant.<br />
            I help You find peace in their relationships with food and learn to love their bodies.
          </p>
        </div>
      </div>
      <div className='part1'>
      </div>
      <div className='part1'>
      </div>
      <div className='part1'>
      </div>
      <div className='part1'>
      </div>

      <Part0 />
      <Part0_1 />
      <Part1 />
      <Part2 /> */}
    
    </div>
  )
}
