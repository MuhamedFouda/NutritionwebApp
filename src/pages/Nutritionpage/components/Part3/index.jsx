import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt3() {
    return (
        <div className='parrtt3 '>
                <img src={require('../../../../Assetss/4.jpg')} className='animate__animated animate__backInLeft'  style={{ animationDuration: "6s" }}/>
                <p>
                    <span style={{color:"orangered"}}>Diabetes</span><br/>
                "We provide counseling to patients and families on how dietary and lifestyle choices impact blood sugar control."                
                <br/><ScrollButton/>
                </p>
                <img src={require('../../../../Assetss/5.jpg')}  className='animate__animated animate__backInRight'  style={{ animationDuration: "6s" }} />
            </div>
           
    )
}
