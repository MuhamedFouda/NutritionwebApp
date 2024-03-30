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
                        return (
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

                        )
                    })
                }
            </div>

            
        </div>

    )
}
