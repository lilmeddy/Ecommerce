import React, { useEffect, useState } from 'react'
import './Dashboard.css'
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
    <section>
      <header className='dashHead'>
        <img src={require("../Images/ACE (1).png")} alt="" />
      </header>
      <header className='dashHeads'>
         <nav className="left">
          <div><img src={require("../Images/carbon_location.png")} alt="" /></div>
          <p>No 22, orogun Ibadan</p>
         </nav>
      </header>
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
  )
}

export default Dashboard