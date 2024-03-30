import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt5() {
    return (
        <div className='parrtt5'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                <span style={{color:"orangered"}}>Hypertension</span><br/>
                Dietary changes may help with the management of high blood pressure. If you are interested in making dietary changes, it may be time for you to speak with us.<br/>
                We can help you identify foods that are high in sodium and provide tips on how to reduce your intake. Increasing your potassium intake: Potassium can help counteract the effects of sodium and lower blood pressure.                
                <br/>
                <ScrollButton/>
                </p>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/7.jpg')} />
            </div>
        </div>
    )
}
