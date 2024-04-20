import { useRecoilState } from "recoil"
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import "./index.scss"
import Footer from "../../components/Footer"
import Coverrr from "./components/Cover/inded"
import PPartt1 from "./components/Part1"
import PPartt2 from "./components/Part2"

export default function HealthCoach() {
const[loader,setloader]=useRecoilState($loader)
  return (
    <div className="healthCoach">
      {
        loader==1?<Looader/>:<>
        <Coverrr/>
        <PPartt1/>
        <PPartt2/>
        {/* <Footer/>       */}
        </>
      }
    </div>
  )
}
