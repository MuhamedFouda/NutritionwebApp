import { useRecoilState } from "recoil"
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import "./index.scss"
import Footer from "../../components/Footer"
import Cover from "./components/Cover/inded"
import Part1 from "./components/Part1/index"
import Formm from "./components/Form/index"
import Part2 from "./components/Part2"

export default function Athelets() {
const[loader,setloader]=useRecoilState($loader)
  return (
    <div className="healthCoach">
      {
        loader==1?<Looader/>:<>
      <Cover/>
      <Part1/>
      <Part2/>
      <Formm/>
      <Footer/>
        </>
      }
      
    </div>
  )
}
