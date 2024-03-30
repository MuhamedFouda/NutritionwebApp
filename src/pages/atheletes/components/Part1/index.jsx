import './index.scss'
export default function Part1() {
    return (
        <div className='partt1'>
            <div className='text animate__animated animate__backInLeft'style={{ animationDuration: "6s"}}>
            <p>
            As an athlete, your physical health is key to an active lifestyle. You depend on strength, skill, and endurance, whether you’re going for the ball or making that final push across the finish line. Being your best takes time, training, and patience, but that’s not all. Like a car, your body won’t run without the right fuel. You must take special care to get enough of the calories, vitamins, and other nutrients that provide energy.
            </p>
            <ul>
            An athlete’s diet is not much different than that of any person striving to be healthy. You need to include choices from each of the healthy food groups. However, athletes may need to eat more or less of certain foods, depending upon:
            <li> The type of sport </li>
            <li> The amount of training you do </li>
            <li> The amount of time you spend in training </li>
            </ul>
            </div>
            <div className='photo animate__animated animate__backInRight'style={{ animationDuration: "6s"}}>
                <img src={require('../../../../assets/010.jpg')}/>
                <img src={require('../../../../assets/011.jpg')}/>
                <img src={require('../../../../assets/012.jpg')}/>
                <img src={require('../../../../assets/013.jpg')}/>
            </div>
        </div>
    )
}
