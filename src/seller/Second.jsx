import React from "react";
import "./First.css";
import "./Second.css"
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Second = () => {
  return (
    <>
      <main className="firstMain">
        <form action="" className="formFirst">
          <h1 className="firsth1">BECOME A SELLER</h1>
          <p className="firstp">You're almost there. Just fill this form</p>
          <div className="firstNum">
            <p className="actNum">1</p>
            <hr />
            <p className="actNum">2</p>
            <hr />
            <p>3</p>
          </div>
          <div className="secEnt">
            <h1>1. Please enter a valid account number</h1>
            <input type="text" name="" id="" placeholder="Account Number" />
          </div>
          <div className="secEnt">
            <h1>2. Bank Name</h1>
            <input type="text" name="" id="" placeholder="Bank name" />
          </div>
   <div className="secWhy">
    <p>Why do we need your bank account?</p>
    <hr />
    <p>FAQ?</p>
   </div>
          <div className="secButt">
            <div>
              <button type="submit" className="secPre">Previous</button>
            </div>
            <div>
              <button type="submit" className="secNext">Next</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default Second;
