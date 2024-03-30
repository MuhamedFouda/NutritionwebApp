

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import $hisweigth from '../../../../atoms/weight';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';


export default function Cry() {
  const [weight, setweight] = useRecoilState($hisweigth)
  const [final, setfinal] = useState()

  useEffect(() => {
    setfinal(weight * 5)
  })
  function finall(x) {
    return final;
  }


  const [date, setDate] = useState(new Date());



  const [value, onChange] = useState(new Date());
  const [valuee, onChangee] = useState(new Date());

  return (
    <div className='cry'>

      <div>
        <input type="text" name="lostweight" onKeyUp={(e) => {
          setweight(e.target.value)
        }} />
        <h1 style={{ fontSize: "20px" }}>{final}</h1>


        <div>

          <Calendar onChange={onChange} value={value} defaultActiveStartDate={new Date()} activeStartDate={new Date(2024, 3, 0)} hover={new Date(2024, 3, 0)}>

          </Calendar>
          {/* onClickDay={(value, event) => alert('Clicked day: ', value , event)} */}
          {/* activeStartDate={new Date()} */}
          {/* Date= {new Date(2024,4,1)}  */}
        </div>

        <div style={{ color: "red" }}>
          {`${value.getDate()}`}<br />
          {`${value}`}

        </div>

        <div>
          {/* <DateTimePicker value={valuee} onChange={onChangee} /> */}
          <DatePicker
            showTimeSelect
            minTime={new Date(0, 0, 0, 12, 30)}
            maxTime={new Date(0, 0, 0, 19, 0)}
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MMMM d, yyyy h:mmaa"
          />
        </div>
        <h1>{`${date}`}</h1>
      </div>
    </div>
  )
}
