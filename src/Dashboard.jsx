import React, { useEffect, useState } from 'react'
import { UserRequest } from './services/http'


const Dashboard = () => {
  const [userData, setUserData] = useState(null);  
  useEffect(() => {
   
    const fetchUserData = async () => {
      try {
        
        const response = await UserRequest.get("/create");  
        const user = response.data[0]
        setUserData(user);
      } catch (error) {
        // Handle error
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <>
    
 <h1>Welcome to the Dashboard!</h1>
      {userData ? (
        <div>
          <p>Hello, {userData.firstName}!</p>
         
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </>
  )
}

export default Dashboard