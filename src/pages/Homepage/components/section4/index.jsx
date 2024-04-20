import './index.scss'
import 'animate.css';

export default function Section4() {
    return (
        <div className='section4'>
            <div className='part  animate__animated animate__bounceInLeft' style={{animationDelay:"7s", animationDuration:"4s"}}>
            <div className='imge'>
                <img src={require('../../../../assets/aliaa.jpg')}/>
            </div>
            <div className='content'>
                    <h1>“ Dr.. Aliaa Salah ”</h1>
                <ul style={{listStyleType:"square"}}>
                    <li> deitition at the Saudi German Hospital in Alexandria. </li>
                    <li> Clinical deitition at Canadian Specialized Clinics.</li>
                    <li> Health Coach certified by the International Coaching Federation (ICF). </li>
                    <li> A certified obesity specialist from the International world obesity Federation  (SCOPE).</li>
                    <li> Member of the Arab Society for Pediatric Clinical Nutrition.</li>
                    <li> A therapeutic specialist in obesity and thinness, sports nutrition,<br/> chronic disease nutrition, and experience in helping people reach their goals through.</li>
                </ul>
            </div>
            </div>
        </div>
    )
}
