
import { useRecoilState } from "recoil"
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import Forrm from "./components/form"
import "./index.scss"
import Footer from "../../components/Footer"
import Coverr from "./components/Cover/inded"
import Partt1 from "./components/Part1"
import Partt2 from "./components/Part2"
import Partt3 from "./components/Part3"
import Partt4 from "./components/Part4"
import Partt5 from "./components/Part5"
import ScrollButtonToUp from "../../components/ButtonScrollToUp/index"

export default function NutritionPage() {
  const [loader] = useRecoilState($loader)
  return (
    <div className="nutition">
      {
        loader==1?<Looader/>:<>
      <Coverr/>
      <Partt1/>
      <Partt2/>
      <Partt3/>
      <Partt4/>
      <Partt5/>
      <Forrm />
      <Footer />
        </>
      }
    </div>


  )
}
