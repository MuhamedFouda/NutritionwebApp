import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt2() {
    return (
        <div className='parrtt2'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                <span style={{color:"orangered"}}> Gain Weight </span><br/>
                We can provide you with an individualized eating plan high in protein and calories to help you gain weight in a safe and healthy way. Your dietitian can also explore the underlying cause of your weight loss and give you tips for moving any past barriers to weight gain, like nausea or low appetite.<br/>
                    If you’re struggling to gain weight, you aren’t alone. While it may seem easy to some, those who are going through it know that healthy weight gain is not always a walk in the park. If this sounds like you, it may be time to consider working with us
                </p>
                <ScrollButton/>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/2.jpg')} />
                <img src={require('../../../../Assetss/3.jpg')} />
            </div>
        </div>
    )
}
