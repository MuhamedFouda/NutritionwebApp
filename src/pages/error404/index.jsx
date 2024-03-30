import { Link } from 'react-router-dom'
import "./index.scss"
import vedio from '../../assets/404Error.mp4'
export default function ErrorPage() {

    return (
        <div className="errorpage">
            <video autoPlay muted loop style={{height:"170%"}}>
                <source src={vedio} type="video/mp4" />
            </video>
            {/* <img src={require("../../assets/404.7.jpg")}/> */}
            <Link to={'/'}>
                <button className="btn btn-dark"> Back To Home My Friend </button>
            </Link>
        </div>
    )
}
