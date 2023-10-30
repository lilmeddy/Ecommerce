import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import "./App.css"

const App = () => {
  const navigate = useNavigate();
  const url = "http://localhost:15000/users/signup";
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      c_password: "",
      firstName: "",
      lastName: "",
      phone: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is required")
        .email("Must be a valid email"),
      password: yup
        .string()
        .required("Password field cannot be empty")
        .min(6, "Password must be at least 6 characters")
        .max(8, "Password must not be more than 8 characters"),
      c_password: yup
        .string()
        .required("Confirm password field cannot be empty")
        .oneOf([yup.ref("password"), null], "Your password does not match"),
      firstName: yup
        .string("First name must be a string")
        .min(2, "First name is too short")
        .max(20, "First name is too long")
        .required("Firstname is required")
        .matches(/^[a-zA-Z]+$/, "First name must only contain letters"),
      lastName: yup
        .string("Last name must be a string")
        .min(2, "Last name is too short")
        .max(20, "Last name is too long")
        .required("Lastname is required")
        .matches(/^[a-zA-Z]+$/, "Last name must only contain letters"),
    }),
    onSubmit(values) {
      console.log(values);
      axios
        .post(url, values)
        .then((res) => {
          console.log(res);
          alert("Registration Successfull");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <>
      <main>
      <form
          onSubmit={formik.handleSubmit}
        >
          <h2>Sign Up</h2>
          <div className="nameFlex">
            <div >
              <input
                onChange={formik.handleChange}
                value={formik.values.firstName}
                type="text"
                name="firstName"
                id="firstName"

                placeholder="First name"
                required
              />
              {formik.errors.firstName ? (
              <small >
                {formik.errors.firstName}
              </small>
            ) : null}
            </div>
            <div >
              <input
                onChange={formik.handleChange}
                value={formik.values.lastName}
                type="text"
                name="lastName"
                id="floating_lastName"
                placeholder=" Last name "
                required
                
              />
            {formik.errors.lastName ? (
              <small >
                {formik.errors.lastName}
              </small>
            ) : null}
            </div>
          </div>
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
              <small >
                {formik.errors.email}
              </small>
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
              <small >
                {formik.errors.password}
              </small>
            ) : null}
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={formik.handleChange}
              value={formik.values.c_password}
              type="password"
              name="c_password"
              id="floating_repeat_password"
            
              placeholder="Confirm password "
              required
            />
            {formik.errors.c_password ? (
              <small >
                {formik.errors.c_password}
              </small>
            ) : null}
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={formik.handleChange}
                value={formik.values.phone}
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="floating_phone"
                placeholder="Phone number (123-456-7890) "
                required
              />
            </div>
        
          </div>
          
          <div className="">
            <div className="inp-flex">
              <input
                onChange={formik.handleChange}
                value={formik.values.phone}
                type="checkbox"
                className="check"
                required
              />
              <label for="" >
              By clicking this you agree to the <span className="terms">Terms and conditions</span>  of
            <br />  Aceplex.
              
              </label> 
              
            </div>
        
          </div>
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>
       
      </>
    </>
  );
};

export default App;
