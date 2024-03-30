import { useRecoilState } from "recoil"
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import "./index.scss"
import Footer from "../../components/Footer"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section5 from "./components/section5"
import Section4 from "./components/section4"
import Section6 from "./components/section6"
import Section7 from "./components/section7"

export default function HealthCoach() {
const[loader,setloader]=useRecoilState($loader)
  return (
    <div className="healthCoach">
      {
        loader==1?<Looader/>:<>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Footer/>      
        </>
      }
    </div>
  )
}
