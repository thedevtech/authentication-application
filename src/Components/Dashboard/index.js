import React, { useState, useEffect } from "react";

function DashboardData() {
  const [loggedIn, setLoggedIn] = useState(null);
  const token = document.cookie.split("=")[1];

  useEffect(() => {
    fetch("http://localhost:8000/api/user/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoggedIn(data);
      })
      .then(console.log(loggedIn));
  }, []);
  return (
    <div className="dashboardContainer">
      {loggedIn ? <h1>Dashboard</h1> : <h1>404! Access denied</h1>}
    </div>
  );
}

export default DashboardData;
