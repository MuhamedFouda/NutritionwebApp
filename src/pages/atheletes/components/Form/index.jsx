import { useState } from "react";
import './index.scss'

import 'react-calendar/dist/Calendar.css';


import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import 'react-datetime-picker/dist/DateTimePicker.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import Error from "../../../../components/validaterror";
import sportsshema from "../../../../schemas/sportsshema";
import { useNavigate } from "react-router-dom";

export default function Formm() {
    const [date, setDate] = useState(new Date());
    const weekend = (date) => new Date() < date;
    const navigate = useNavigate();

    function sprotdata(values) {
        const newdate= date;
        const newdata = { ...values, date}
        axios.post('http://localhost:3000/athelets', newdata)
        toast.success("you pocket succesfully");
        navigate('/')
    };

    return (
        <div className="forrmm">

            <p>One diet may slow an athlete down or deprive their body of nutrients needed to recover quickly. Another could give them long-lasting energy and improve their endurance. Some of the most important aspects of an athlete’s health that may be affected by diet include:
            </p>
            <div className="list">
            <ul>
                <li>Muscle mass</li>
                <li>Weight</li>
                <li>Endurance</li>
                <li>Exercise recovery time</li>
            </ul>
            <ul>
                <li>Energy levels</li>
                <li>Focus</li>
                <li>Injury recovery time</li>
            </ul>
            </div>
            <h3> So, please fill out the form </h3>
            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    marital_Status: '',
                    job: '',
                    height: '',
                    weight: '',
                    sports: '',
                    exercise: '',
                    time: '',
                }}
                onSubmit={sprotdata}
                validationSchema={sportsshema}


            >
                <Form className="forrm">
                    <div>
                        <label > Enter Patient Name</label>
                        <Field type="text" className="form-control" placeholder="Enter Name" name="name" />
                        <Error>
                            <ErrorMessage name='name' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Age</label>
                        <Field type="text" className="form-control " placeholder="Enter Age" name="age" />
                        <Error>
                            <ErrorMessage name='age' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Marital Status</label>
                        <Field type="text" className="form-control" placeholder="Enter Marital Status" name="marital_Status" />
                        <Error>
                            <ErrorMessage name='marital_Status' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Job</label>
                        <Field type="text" className="form-control" placeholder="Enter Job" name="job" />
                        <Error>
                            <ErrorMessage name='job' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Height</label>
                        <Field type="text" className="form-control" placeholder="Enter Height" name="height" />
                        <Error>
                            <ErrorMessage name='height' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Weight</label>
                        <Field type="text" className="form-control" placeholder="Enter Weight" name="weight" />
                        <Error>
                            <ErrorMessage name='weight' />
                        </Error>
                    </div>
                    <div >
                        <label > What sport does he play? </label>
                        <Field type="text" className="form-control" placeholder="like 'football'  'tennis'" name="sports" />
                        <Error>
                            <ErrorMessage name='sports' />
                        </Error>
                    </div>
                    <div >
                        <label > How many days a week do you exercise? </label>
                        <Field type="text" className="form-control" placeholder="Please , enter the number of days" name="exercise" />
                        <Error>
                            <ErrorMessage name='exercise' />
                        </Error>
                    </div>
                    <div >
                        <label > How long time is the exercise? </label>
                        <Field type="text" className="form-control" placeholder="please , enter the number of hours" name="time" />
                        <Error>
                            <ErrorMessage name='time' />
                        </Error>
                    </div>
                    <div>
                        <label for="floatingTextarea"> Choose your Pocket date </label><br />
                        <DatePicker
                            showTimeSelect
                            minTime={new Date(0, 0, 0, 12, 0)}
                            maxTime={new Date(0, 0, 0, 15, 0)}
                            selected={date}
                            filterDate={weekend}
                            onChange={(date) => setDate(date)}
                            dateFormat="MMMM d, yyyy"
                        />
                    </div><br />
                    <button type="submit" className="btn btn-primary"> Submit</button>

                </Form>
            </Formik>

        </div>


    )
}
