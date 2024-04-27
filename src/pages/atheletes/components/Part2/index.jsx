import './index.scss'
export default function Part2() {
    return (
        <div className='partt2'>
            <div className='text animate__animated animate__backInLeft'style={{ animationDuration: "6s"}}>
            <p>
            How Can a Deitition Help an Athlete Train?
            </p>
            <ul>
            Most people think of Deitition as the people who help you lose weight in a healthy way, but they’re far more than that. Nutritionists study how the body works, how exercise affects it, and how food can improve your bodily functions and help you become stronger, leaner, and build endurance.

            <li>  Better Overall Health </li>
            <li> Enhanced Physical Condition </li>
            <li>  Improvements in Mood </li>
            <li>  Better Training Outcomes</li>
            <li> Boosted Athletic Performance </li>
            </ul>
            </div>
            <div className='photo animate__animated animate__backInRight'style={{ animationDuration: "6s"}}>
                <img src={require('../../../../Assetss/WhatsApp Image 2024-03-20 at 23.35.59_077c3689.jpg')}/>
                <img src={require('../../../../Assetss/WhatsApp Image 2024-03-20 at 23.35.59_234ca75c.jpg')}/>
            </div>
        </div>
    )
}
