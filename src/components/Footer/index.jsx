import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon">     
        <a href="https://www.bing.com/maps?osid=c446d0b6-2429-4c0b-8200-cd9915120585&cp=30.822671~30.719724&lvl=11.78&pi=0&v=2&sV=2&form=S00027" target="_blank">
        <FontAwesomeIcon icon={faLocationDot} />        
        </a>
        <a href="tel:01552065122" target="_blank">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="https://wa.link/t8f533" target="_blank">
          <FontAwesomeIcon icon={faWhatsappSquare} />
        </a>
      </div>
      <div className="font">
      <FontAwesomeIcon icon={faCopyright} style={{color:"white",backgroundColor:"black",marginRight:"2px"}}/>      
      2024 Copyright <a href="https://www.facebook.com/memo.fouda59" target="_blank"> @MuhamedFouda</a>
      </div>
    </div>
  )
}
