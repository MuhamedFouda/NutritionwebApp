import "./index.scss";

import { useState } from "react";

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
import nutritionshema from "../../../../schemas/nutritionshema";
import { useNavigate } from "react-router-dom";
import ScrollButtonToUp from "../../../../components/ButtonScrollToUp";

export default function Forrm() {

    const [date, setDate] = useState(new Date());
    const weekend = (date) => new Date() < date;
    const navigate = useNavigate()
    function sprotdata(values) {

        const newdata = { ...values, date }
        axios.post('http://localhost:3000/books', newdata)
        toast.success("you pocket succesfully")
        navigate('/')
    }

    return (
        <div className="forrm">
            <ScrollButtonToUp />

            <Formik
                initialValues={{
                    name: '',
                    age: '',
                    marital_Status: '',
                    job: '',
                    height: '',
                    weight: '',
                    sports: '',
                }}
                onSubmit={sprotdata}
                validationSchema={nutritionshema}


            >
                <Form className="form">
                    <div >
                        <label > Enter Patient Name</label>
                        <Field type="text" className="form-control" placeholder="Enter Name" name="name" />
                        <Error>
                            <ErrorMessage name='name' />
                        </Error>
                    </div>
                    <div >
                        <label > Enter Patient Age</label>
                        <Field type="text" className="form-control" placeholder="Enter Age" name="age" />
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
                        <label > Playing Sports </label>
                        <Field type="text" className="form-control" placeholder="Yes or No" name="sports" />
                        <Error>
                            <ErrorMessage name='sports' />
                        </Error>
                    </div>
                    <div>
                        <label for="floatingTextarea">Choose your Pocket date </label><br />
                        <DatePicker
                            showTimeSelect
                            minTime={new Date(0, 0, 0, 15, 30)}
                            maxTime={new Date(0, 0, 0, 19, 0)}
                            selected={date}
                            filterDate={weekend}
                            onChange={(date) => setDate(date)}
                            dateFormat="MMMM d, yyyy h:mmaa"
                        />
                    </div><br />
                    <button type="submit" className="btn btn-primary"> Submit</button>

                </Form>
            </Formik>
            <div>
            </div>
        </div>


    )
}
