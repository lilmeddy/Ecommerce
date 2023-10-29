import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Load.css";

const Load = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigate("/app");
    }, 3000);
  }, [navigate]);

  return (
    <>
      <div className="loader">
        {loading ? (
            <main className="shit">
                <div className="img">
                    {/* <img src={require("./Images/Ace2.jpeg")} alt="" /> */}
                </div>
            <h1>ACE</h1>
          <div className="bar">
            <span className="load"></span>
          </div>
            </main>
           
        ) : null}
      </div>
    </>
  );
};

export default Load;
