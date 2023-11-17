import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import "./App.css"
// import { UserRequest } from '../services/http'
// import { useNavigate } from 'react-router-dom'

const Login = () => {
    // const navigate = useNavigate()
    const url = "http://localhost:15000/users/login"
    const [allUser, setallUser] = useState([])
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, 
        validationSchema: yup.object({
            email: yup.string().required("Email is required").email("Must be a valid email"),
            password: yup.string().required("Password field cannot be empty").min(6, "Password must be at least 6 characters").max(8, "Password must not be more than 8 characters"),
        })
        ,onSubmit(values){
            console.log(values);
            let found = allUser.find((el)=> el.email === values.email && el.password === values.password)
            console.log(found);
            if(found === "undefined"){
                alert("User not found")
            }else{
                axios.post(url, values).then((res)=>{
                    console.log(res);
                    alert(res.data.message)
                    // localStorage.setItem("AppToken", res.data.token)
                    alert("Registration Successfull")
                    // navigate("/dashboard")
                }).catch((err)=>{
                    console.log(err);
                    alert(err.res.data.message)
                })
            }
            // UserRequest.post("/endpoint", data).then(())
        }
    })
    useEffect(() => {
        axios.get(url).then((res)=>{
            console.log(res.data);
            setallUser(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
  return (
    <>
    <main>
        <form onSubmit={formik.handleSubmit} >
        <h2>Sign In</h2>
                <div>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="email"
                name="email"
                id="floating_email"
                placeholder=" Email address "
              />

              {formik.errors.email ? (
                <small>{formik.errors.email}</small>
              ) : null}
            </div>
            <div>
              <input
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                id="floating_password"
                placeholder="Password "
                required
              />

              {formik.errors.password ? (
                <small>{formik.errors.password}</small>
              ) : null}
            </div>
            <div className="aceBut">
              <button
                type="submit"
                className="text-blue bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Sign In
              </button>
              </div>
            </form>
    </main>
    </>
  )
}

export default Login