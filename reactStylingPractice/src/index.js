//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let currentTime = new Date(2019, 1, 1, 12);
let time = currentTime.getHours();
let timeWord = "Morning";

let myStyle = {
  color: "red"
};

if (time < 12) {
  timeWord = "Morning";
  myStyle.color = "red";
} else if (time >= 12 && time < 17) {
  timeWord = "Day";
  myStyle.color = "green";
} else if (time >= 17) {
  timeWord = "Evening";
  myStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 style={myStyle}>Good {timeWord} </h1>
  </div>,
  document.getElementById("root")
);