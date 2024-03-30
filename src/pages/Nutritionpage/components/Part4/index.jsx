import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt4() {
    return (
        <div className='parrtt4'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                    <span style={{color:"orangered"}}>Pregnancy</span><br/>
                We give diet and lifestyle advice to help improve chances of conception or healthier pregnancy. We form plans for eating habits, food, activity levels and general health.and We will take into account your preferences and cultural needs.
                <br/><ScrollButton/>
                </p>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/6.jpg')} />
            </div>
        </div>
    )
}
