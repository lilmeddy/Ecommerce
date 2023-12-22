import React, { useEffect, useState } from "react";
import "./Dashboard.css";
// import { UserRequest } from './services/http'

const Dashboard = () => {
  // const [userData, setUserData] = useState(null);
  // useEffect(() => {

  //   const fetchUserData = async () => {
  //     try {

  //       const response = await UserRequest.get("/create");
  //       const user = response.data[0]
  //       setUserData(user);
  //     } catch (error) {
  //       // Handle error
  //       console.error("Error fetching user data", error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);
  return (
    <>
      <section className="mainSec">
        <header className="dashHead">
          <img src={require("../Images/ACE (1).png")} alt="" />
        </header>
        <header className="dashHeads">
          <nav className="dashLeft">
            <div>
              <img src={require("../Images/carbon_location.png")} alt="" />
            </div>
            <p>No 22, orogun Ibadan</p>
          </nav>
          <nav className="dashLef">
            <div>
              <img src={require("../Images/solar_cart-2-linear.png")} alt="" />
            </div>
            <div>
              <img
                src={require("../Images/material-symbols_bookmark-outline.png")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("../Images/ic_outline-notifications.png")}
                alt=""
              />
            </div>
            <div>
              <img
                src={require("../Images/iconamoon_profile-fill.png")}
                alt=""
              />
            </div>
          </nav>
        </header>
        <div className="dashLook">
          <h1>I am looking for</h1>
          <div>
            <img src={require("../Images/ic_sharp-search.png")} alt="" />
            <input type="text" />
          </div>
        </div>
        <div className="dashMain">
          <aside className="dashAside">
            <h1>Categories</h1>
            <div className="asideDiv">
              <div className="dashVec">
                <div>
                  <img
                    src={require("../Images/Rectangle 371 (1).png")}
                    alt=""
                  />
                </div>
                <div>
                  <h4>Vehicle</h4> <p>123,450 ads</p>
                </div>
              </div>
              <div>
                <img src={require("../Images/formkit_right.png")} alt="" />
              </div>
            </div>
            <div className="asideDiv">
              <div className="dashVec">
                <div>
                  <img src={require("../Images/Rectangle 371.png")} alt="" />
                </div>
                <div>
                  <h4>Property</h4> <p>123,450 ads</p>
                </div>
              </div>
              <div>
                <img src={require("../Images/formkit_right.png")} alt="" />
              </div>
            </div>
            <div className="asideDiv">
              <div className="dashVec">
                <div>
                  <img src={require("../Images/Rectangle 371.png")} alt="" />
                </div>
                <div>
                  <h4>Property</h4> <p>123,450 ads</p>
                </div>
              </div>
              <div>
                <img src={require("../Images/formkit_right.png")} alt="" />
              </div>
            </div>
          </aside>
          <section></section>
        </div>
      </section>
      {/*     
 <h1>Welcome to the Dashboard!</h1>
      {userData ? (
        <div>
          <p>Hello, {userData.firstName}!</p>
         
        </div>
      ) : (
        <p>Loading user data...</p>
      )} */}
    </>
  );
};

export default Dashboard;
