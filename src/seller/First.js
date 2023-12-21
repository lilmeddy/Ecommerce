import React from 'react'
import './First.css'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const First = () => {
    
  return (
  
    <>
    <main className='firstMain'>
   <form action="" className='formFirst'>
    <h1 className='firsth1'>BECOME A SELLER</h1>
    <p className='firstp'>You're almost there. Just fill this form</p>
    <div className="firstNum">
     <p className='actNum'>1</p>
     <hr />
     <p>2</p>
     <hr />
     <p>3</p>
    </div>
    <input type="text" name="" id=""  placeholder='Business Name'/>
    <div className="fistBuss">
        <div className="firstLogo">
            <h1>Add your business Logo</h1>
            <div className="dash">
                <div>
                <img
                src={require("../Images/Group.png")}
                
                alt=""
                id="profileImage"
             
              />
            {/* <input
                type="file"
                id="fileInput"
                accept="image/*"
                /> */}
                </div>
                <div className="barFirst">
                <span className="loadFirst"></span>
                </div>
                <div><button>x</button></div>
            </div>
            </div>
            <div className="firstRule">
                <div className='vec'>
                    <img src={require("../Images/Vector.png")} alt="" />
                </div>
                <div>
                    <ol >
                        <li>1. Make sure your logo is visible</li>
                        <li>2. Not too much flashy colors</li>
                        <li>3. A PNG, JPEG is advisible</li>
                        <li>4. This is for your brand</li>
                    </ol>
                </div>
            </div>
        </div>
    
    <div className='firstArea'>
 <p>Business Desciption</p>
 <textarea name="" id="" cols="30" rows="10" placeholder='(At least 459 words)'></textarea>

    </div>
    <div className='firstButt'>
 <button type='submit'>Next</button>
    </div>
   </form>
    </main>
    </>
  )
}

export default First