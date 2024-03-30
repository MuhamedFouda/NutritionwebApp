import { useRecoilState } from "recoil"
import "./index.scss"
import $hisweigth from "../../atoms/weight"
import { useEffect, useState } from "react"

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NutritionPage() {
  const [weight, setweight] = useRecoilState($hisweigth)
  const[final,setfinal]=useState()

  useEffect(()=>{
    setfinal(weight*5)
  })
  function finall(x){
    return final;
  }

  const [date, setDate] = useState(new Date());


  const [value, onChange] = useState(new Date());
  const [valuee, onChangee] = useState(new Date());


  return (
    <div className="nutition">

<form>
  <fieldset >
    <legend>Disabled fieldset example</legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div>
    <div class="mb-3">
      <div class="form-floating">
      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>




      <input type="text" name="lostweight" onKeyUp={(e) => {
        setweight(e.target.value)
      }} />
      <button type="submit" onClick={finall}> ok </button>
      <h1 style={{fontSize:"20px"}}>{final}</h1>


        <div>

        <Calendar onChange={onChange} value={value}  defaultActiveStartDate={new Date()} activeStartDate={new Date(2024,3,0)} hover={new Date(2024,3,0)}>

        </Calendar>
        {/* onClickDay={(value, event) => alert('Clicked day: ', value , event)} */}
        {/* activeStartDate={new Date()} */}
        {/* Date= {new Date(2024,4,1)}  */}
        </div>

      <div style={{color:"red"}}>
      {`${value.getDate()}`}<br/>
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

// {/* <div className="nutition">
// {
//   loader==1?<Looader/>:<>
//   <Forrm/>
//   <Footer/>
  
  
  
//   </>
// }








// {/* 
// <form className="form">
// <fieldset >
// <legend>Gain And Loss Weight</legend>
// <div class="mb-3">
// <label for="disabledTextInput" class="form-label">Your Name</label>
// <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input"/>
// </div>
// <div class="mb-3">
// <label for="disabledSelect" class="form-label">Disabled select menu</label>
// <select id="disabledSelect" class="form-select">
//   <option>Disabled select</option>
// </select>
// </div>
// <div class="mb-3">
// <div class="form-floating">
// <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
// <label for="floatingTextarea">Comments</label>
// </div>
// </div>
// <div>
// <label for="floatingTextarea">Choose your Pocket date </label><br/>
// <DatePicker
//   showTimeSelect
//   minTime={new Date(0, 0, 0, 12, 30)}
//   maxTime={new Date(0, 0, 0, 19, 0)}
//   selected={date}
//   filterDate={weekend}
//   onChange={(date) => setDate(date)}
//   dateFormat="MMMM d, yyyy h:mmaa"
// />
// </div>
// <br/>
// <button type="submit" class="btn btn-primary">Submit</button>
// </fieldset>

// </form>

// <h1>{`${date}`}</h1> */}

// </div> */}

  )
}
