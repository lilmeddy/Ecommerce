// import React, { useEffect, useState } from 'react'
// import { setAuthToken } from "../services/http";
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { BiLogoFacebookCircle } from "react-icons/bi";
import {FcGoogle} from "react-icons/fc"
import {GrApple} from "react-icons/gr"
// import "./App.css"
import "./Login.css"
import { Link } from 'react-router-dom'
// import { UserRequest } from '../services/http'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
   
    const url = "http://localhost:15000/auth/login"
    // const [allUser, setallUser] = useState([])
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
            axios
              .post(url, values)
              .then((res) => {
                console.log(res);
                
                alert("Registration Successfull");
                navigate("/dashboard");
           
                }).catch((err)=>{
                    console.log(err);
                    console.log(err.response.data.message)
                   
                })
            // }
          //  else {
       
      // }

        }
    })

  return (
    <>
    <main className='logMain'>
        <form onSubmit={formik.handleSubmit} >
        <h2>Log-In</h2>
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
            <div className="LogFlex">
            <div className="inpLog">
                <input
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  type="checkbox"
                  className="check"
                  required
                />
                <label className="logRem">
                  <em>
                 Remember Me
                  </em>
                   
                 
                </label>
              </div>
            <div>
                <Link to="/">Forgot password?</Link>
            </div>
            </div>
            <div className="logButt">
              <button
                type="submit"
                className="text-blue bg-white-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Login
              </button>
              </div>
              <div className="appAcc">
              <p>Don't have an account yet? <strong><Link to ="/sign">Log In</Link> </strong> </p>
            </div>
            <div className="hrOrr"><hr /> OR <hr /></div>
            <div className="icons">
             <p><BiLogoFacebookCircle color="blue" /></p>
             <p><FcGoogle/></p>
             <p><GrApple color="white"/></p>
            </div>
            </form>
    </main>
    {/* <div className='logDiv'>
      <div className='logImg'>
      <img src={require("../Images/Ace1.jpeg")} alt="" /> 
      </div> */}
    
    {/* </div> */}
    </>
  )
}

export default Login