import React from "react";

function About(props) {

  const condtionalBio = props.bio;
  let displayBio = "";
  if (condtionalBio) {
    displayBio = <p id="bio">{condtionalBio}</p>;
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* bio */}
      {displayBio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}


export default About;
