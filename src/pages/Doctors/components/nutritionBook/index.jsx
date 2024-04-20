import axios from 'axios'
import './index.scss'
import { useState } from 'react'


export default function Nutritio4Books() {
    const [booking, setbooking] = useState([])

    axios.get("http://localhost:3000/books").then((ele) => {
        setbooking(ele.data)
    })


    return (
        <div className='booking'>
            <h3> The Nutrition Booking List </h3>
            <div className='books'>
                {
                    booking.map((ele) => {

                        let date = new Date();
                        let date2 = ele.date;
                        if (new Date(date).getTime() < new Date(date2).getTime()) {

                            return (

                                <div className='bbookk'>

                                    {/* <div key={ele.id} className='bookingareaa'>
                                        <h4>Name :{ele.name}</h4>
                                        <h4> Age : {ele.age}</h4>
                                        <h4> Height : {ele.height}</h4>
                                        <h4> Weight : {ele.weight}</h4>
                                        <h4 style={{ fontSize: "20px" }}>Date : {ele.date}</h4>
                                        <div>
                                        </div>
                                    </div> */}

                                        <div class="card-container">
                                            <div class="card">
                                                <div class="front-content">
                                                    <p>{ele.name}</p>
                                                </div>
                                                <div class="content">
                                                    <p class="heading">{ele.name}</p>
                                                    <p>Age : {ele.age}
                                                    <br/> Height : {ele.height}<br/>Weight : {ele.weight}<br/>Date : {ele.date}             
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                </div>
                            )
                        }
                    })

                }

            </div>
        </div>

    )
}
