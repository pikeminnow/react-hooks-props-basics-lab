import React from "react";
import Links from "./links";

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
      <Links
        github={props.links.github}
        linkedin={props.links.linkedin} />
    </div>
  );
}


export default About;
