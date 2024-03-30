import "./index.scss"



import Cry from "./components/Cry"
import { useRecoilState } from "recoil"
import $loader from "../../atoms/loader"
import Looader from "../../components/Loader"
import Footer from "../../components/Footer"
import NutritionBooks from "./components/nutritionBook"
import AtheletsBooks from "./components/AtheletsBook"



export default function Doctor() {
const[loader]=useRecoilState($loader)

  return (
    <div className="doctor">
      {
        loader==1?<Looader/>:<>
        <div className="booksareaa">
        <AtheletsBooks/>
        <NutritionBooks/>
        </div>
        <Footer/>
        {/* <Cry/> */}
      
        </>
      }
    </div>
  )
}
