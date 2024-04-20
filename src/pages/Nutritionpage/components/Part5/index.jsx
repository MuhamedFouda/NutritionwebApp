import ScrollButton from '../ButtonScroll'
import './index.scss'
export default function Partt5() {
    return (
        <div className='parrtt5'>
            <div className='text animate__animated animate__backInLeft' style={{ animationDuration: "6s" }}>
                <p>
                    <span style={{ color: "orangered" }}>Hypertension</span><br />
                    Dietary changes may help with the management of high blood pressure. If you are interested in making dietary changes, it may be time for you to speak with us.<br />
                    We can help you identify foods that are high in sodium and provide tips on how to reduce your intake. Increasing your potassium intake: Potassium can help counteract the effects of sodium and lower blood pressure.
                    <br />
                    <ScrollButton />
                </p>
            </div>
            <div className='photo animate__animated animate__backInRight' style={{ animationDuration: "6s" }}>
                <img src={require('../../../../Assetss/7.jpg')} />
            </div>
            <div>
                <div class="custom-shape-divider-bottom-1713267609">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
