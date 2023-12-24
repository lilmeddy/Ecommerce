import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

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
          </aside>
          <section className="earnSec">
            <div className="dashEarn">
              <div className="dashCash">
                <img
                  src={require("../Images/Earn Cash with what you don’t use.png")}
                  alt=""
                />
              </div>
              <div className="dashStart">
                <h2>
                  <img src={require("../Images/Start Selling.png")} alt="" />
                </h2>
                <Link to="/first">
                  <img
                    src={require("../Images/flat-color-icons_plus.png")}
                    alt=""
                    className="linkImg"
                  />
                </Link>
                <h1>
                  <img src={require("../Images/Now.png")} alt="" />
                </h1>
              </div>
            </div>
            <div className="dasTop">
              <h1>
                <img src={require("../Images/Top Sales.png")} alt="" />
              </h1>
              <div className="topSec">
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>  
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>

               
              </div>
            </div>
            <div className="dasTop">
              <h1>
                <img src={require("../Images/Off the ship.png")} alt="" />
              </h1>
              <div className="topSec">
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>  
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>  
                <div className="secCont">
                  <div className="sechead">
                    <img
                      src={require("../Images/unsplash_YApiWyp0lqo.png")}
                      alt=""
                    />
                  </div>

                  <div className="secFoot">
                    <img src={require("../Images/Rectangle 368.png")} alt="" />
                    <div className="footAbs">
                      <div>
                        <img src={require("../Images/Gtr 580.png")} alt="" />
                      </div>
                      <div>
                        <img src={require("../Images/$350,000.png")} alt="" />
                      </div>
                      <div className="absFlex">
                        <img src={require("../Images/Group 551.png")} alt="" />
                        <img
                          src={require("../Images/Perfect Condition.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <button className="secAbs">
                    <img
                      src={require("../Images/material-symbols_bookmark-outline.png")}
                      alt=""
                    />
                  </button >
                </div>

               
              </div>
            </div>
          </section>
        </div>
        <footer>
          
        </footer>
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
