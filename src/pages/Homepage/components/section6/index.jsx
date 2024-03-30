import "./index.scss"
export default function Section6() {
    return (
        <div className="section6">
           
            <span> What it takes to succeed </span>
        
            <div className="cards">
                <div className="card">
                    <img src={require('../../../../assets/cover-insights-Illustration-1@2x.png')} />
                    <h2> Find your Diet </h2>
                    <p> Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more. </p>
                </div>

                <div className="card">
                    <img src={require('../../../../assets/cover-insights-Illustration-2@2x.png')} />
                    <h2> Set Your Targets </h2>
                    <p> Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins. </p>
                </div>

                <div className="card">
                    <img src={require('../../../../assets/cover-insights-Illustration-3@2x.png')} />
                    <h2>Log Your Meals & Exercise </h2>
                    <p> Use the website to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling. </p>
                </div>

                <div className="card">
                    <img src={require('../../../../assets/cover-insights-Illustration-4@2x.png')} />
                    <h2> Reach Your Goals </h2>
                    <p> Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices. </p>
                </div>

            </div>
        </div>
    )
}
