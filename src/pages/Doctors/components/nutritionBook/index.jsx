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
            <h3> The nutrition Booking List </h3>
            <div className='books'>
                {
                    booking.map((ele) => {
                        
                            return (
                                <div key={ele.id} className='bookingareaa'>
                                    <h4>Name :{ele.name}</h4>
                                    <h4> Age : {ele.age}</h4>
                                    <h4> Height : {ele.height}</h4>
                                    <h4> Weight : {ele.weight}</h4>
                                    <h4 style={{ fontSize: "20px" }}>Date : {ele.date}</h4>
                                    <button className='btn btn-danger' type='button'> Close </button>
                                </div>
    
                            )
        
                    })
                }

            </div>    
        </div>

    )
}
