// User.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSignOutAlt, faBook, faShoePrints, faUser, faMessage } from "@fortawesome/free-solid-svg-icons"; 
import "../stylesheets/user.css";

const UserNavbar = () => {
  return (
    <div>
      {/* No sidebar icon */}
    </div>
  );
};

const User = () => {
  return (
    <div>
      {/* Use the new UserNavbar component */}
      <UserNavbar />

      {/* Icon container */}
      <div className="button-container">
        <div className="button">
          <Link to="/knowledge">
            <FontAwesomeIcon icon={faBook} size="lg" />
          </Link>
        </div>
        <div className="button">
          <Link to="/livechat">
            <FontAwesomeIcon icon={faMessage} size="lg" />
          </Link>
        </div>
        <div className="button">
          <Link to="/automatedWorkflow">
            <FontAwesomeIcon icon={faPlus} size="lg" />
          </Link>
        </div>
        <div className="button">
          <Link to="/updateprofile">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
        </div>
        <div className="button">
          <Link to="/workflow">
            <FontAwesomeIcon icon={faShoePrints} size="lg" />
          </Link>
        </div>
        <div className="button">
          <Link to="/">
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          </Link>
        </div>
      </div>

      {/* Content for User page */}
      <div className="main-content">
        <h1>Welcome to the User Page</h1>
        {/* Add any other content specific to the User page */}
      </div>

      {/* Add the chat button */}
      <button className="chatBtn">
        <div className="tooltip">Chat</div>
      </button>
    </div>
  );
};

export default User;
