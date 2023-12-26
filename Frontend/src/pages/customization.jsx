import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faPaintRoller, faSignOutAlt, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/customization.css";


const Customization = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#ab20fd"); // Example initial color

  const handleCustomizationUpdate = async () => {
    try {
      const response = await fetch(`/api/customization/${YOUR_CUSTOMIZATION_ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers as needed (e.g., authorization token)
        },
        body: JSON.stringify({
          PrimaryColor: primaryColor,
          // Add other fields if needed
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Customization update failed:", errorData.msg);
        // Handle error state or display a message to the user
      } else {
        console.log("Customization updated successfully");
        // Optionally, you can fetch the updated customization data and update your UI
      }
    } catch (error) {
      console.error("An error occurred during customization update:", error.message);
      // Handle error state or display a message to the user
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div className="sidebar" style={{ width: openSidebar ? "80px" : "0", backgroundColor: "#ab20fd" }}>
        <span className="close-btn" onClick={() => setOpenSidebar(false)}>
          &times;
        </span>
        {/* Use Font Awesome icon for the "Home" link */}
        <Link to="/admin" onClick={() => setOpenSidebar(true)}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </Link>
        {/* Use Font Awesome icon for the "Sign Out" link (for one user) */}
        <Link to="/register" onClick={() => { handleSignOut(); setOpenSidebar(true); }}>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </Link>
        {/* Use Font Awesome icon for the "Users" link (for all users) */}
        <Link to="/users" onClick={() => setOpenSidebar(true)}>
          <FontAwesomeIcon icon={faUsers} size="lg" />
        </Link>
        {/* Use Font Awesome icon for the "Customize Appearance" link */}
        <Link to="/customization" onClick={() => setOpenSidebar(true)}>
          <FontAwesomeIcon icon={faPaintRoller} size="lg" />
        </Link>
        {/* Use Font Awesome icon for the "Sign Out" link (for all users) */}
        <Link to="/" onClick={() => setOpenSidebar(true)}>
          <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
        </Link>
      </div>

      {/* Content for Customization page */}
      <div className="main-content" style={{ marginLeft: openSidebar ? "80px" : "0" }}>
        <h1>Welcome to the Customization Page</h1>
        {/* Input field to update PrimaryColor */}
        <input
          type="color"
          value={primaryColor}
          onChange={(e) => setPrimaryColor(e.target.value)}
        />
        {/* Button to trigger customization update */}
        <button onClick={handleCustomizationUpdate}>Update Customization</button>
        {/* Add any other content specific to the Customization page */}
      </div>
    </div>
  );
};

export default Customization;
