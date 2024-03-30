import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt1() {
    return (
        <div className='parrtt1'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                <span style={{color:"orangered"}}>Lose Weight</span><br/>
                    “How to lose weight” is probably one of the more common Google searches out there, and for many people, it’s an intractable mystery. Miracle weight loss programs are touted as one-size-fits-all remedies—but more often than not, they’re either riddled with side-effects, or don’t even work to begin with.
                    The truth is that healthy weight loss can look entirely different from one person to the next. And with that degree of specificity to the individual, it can be a real uphill battle trying to lose weight while following general advice, rather than with a detailed, highly personalized plan of action.
                </p>
                <ScrollButton/>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/WhatsApp Image 2024-03-27 at 22.57.48_04cf472b.jpg')} />
            </div>
        </div>
    )
}
