import axios from 'axios'
import './index.scss'
import { useState } from 'react'


export default function AtheletsBooks() {
    const [bookingg, setbookingg] = useState([])
    axios.get("http://localhost:3000/athelets").then((ele) => {
        setbookingg(ele.data)
    })



    return (
        <div className='booking'>
            <h3> The Athelets Booking List </h3>
            <div className='books'>
                {
                    bookingg.map((ele) => {

                        let date = new Date();
                        let date2 = ele.date;
                        if (new Date(date).getTime() < new Date(date2).getTime()) {

                            return (
                                <div className='bbookk'>
                                    {/*                                     
                                     <div key={ele.id} className='bookingareeaa'>
                                        <h4>Name :{ele.name}</h4>
                                        <h4> Age : {ele.age}</h4>
                                        <h4> Height : {ele.height}</h4>
                                        <h4> Weight : {ele.weight}</h4>
                                        <h4> sports : {ele.sports}</h4>
                                        <h4> Days : {ele.exercise}</h4>
                                        <h4> Time : {ele.time}</h4>
                                        <h4 style={{ fontSize: "20px" }}> Date : {ele.date}</h4>
                                         <button className='btn btn-danger' type='button'> Close </button> 
                                    </div>
                                     */}

                                    <div className="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <p class="title"> Patient Name :{ele.name}</p>
                                                <p> Age : {ele.age} </p>
                                            </div>
                                            <div class="flip-card-back">
                                                <p class="title">Details</p>
                                                <p>Age : {ele.age}</p>
                                                <p>Height : {ele.height}</p>
                                                <p>Weight : {ele.weight}</p>
                                                <p>sports : {ele.sports}</p>
                                                <p>Days : {ele.exercise}</p>
                                                <p>Time : {ele.time}</p>
                                                <p>Date : {ele.date}</p>
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
