import React, { useState } from "react";
import "./Cards.css";

function Cards() {
  const [organizationName, setOrganizationName] = useState("");

  const handleInputChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Organization Name:", organizationName);
  };

  return (
    <>
      <div className="create-organization">
        <h3>Create Organization</h3>
        <form onSubmit={handleSubmit}>
          <h3 id="organizationName1">Enter Your Organization Name *</h3>
          <input
            type="text"
            id="organizationName"
            value={organizationName}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="btn">
            Create Organization
          </button>
        </form>
      </div>

      <div className="Main">

        <div className="mainCards">
          <div className="CARDS">
            <div className="card" id="c1">
              <h3>Explore Report Generation Tool 🧑</h3>
              <p>Checkout to our report generation tool ...</p>
              <button className="btn">📊 Report Generation</button>
            </div>
            <div className="card" id="c2">
              <h3>Explore Manage Campaign Feature 🙂</h3>
              <p>Checkout to our manage campaign feature ...</p>
              <button className="btn">📋 Manage Campaign</button>
            </div>
            <div className="card" id="c3">
              <h3>Post a Community Campaign 😉</h3>
              <p>Checkout to our post campaign feature ...</p>
              <button className="btn">🚀 Hire Influencer</button>
            </div>
            <div className="card" id="c4">
              <h3>Explore Influencer Base Feature ✌️</h3>
              <p>Checkout to our myinfluencer feature ...</p>
              <button className="btn">📚 Influencers Base</button>
            </div>

            <div className="card" id="c5">
              <h3>Explore SaveList Feature 🙃</h3>
              <p>Checkout to our save list feature ...</p>
              <button className="btn">📁 Save List</button>
            </div>
          </div>
          <div className="end">
            <h4 id="e1">© 2024, Made with❤️ </h4>
            <h4 id="e2">Socialveins</h4>
            <h4 id="e3">Support</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
