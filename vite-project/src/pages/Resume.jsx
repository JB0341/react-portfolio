import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume() {
  return (
    <div className="p-3 mb-2 text-info-emphasis min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container text-center">
        <h1 className="mb-4">Resume Under Revision!</h1>
        <p className="lead">
          Go to the contact page to request a copy to be sent once it is
          finished!
        </p>

        <h2 className="mt-5">Front End Proficiencies</h2>
        <ul className="list-unstyled">
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>JavaScript</li>
        </ul>

        <h2 className="mt-5">Back End Proficiencies</h2>
        <ul className="list-unstyled">
          <li>JavaScript</li>
          <li>Express.js</li>
          <li>SQL</li>
          <li>NoSQL</li>
        </ul>
      </div>
    </div>
  );
}
