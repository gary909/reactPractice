//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let currentTime = new Date(2019, 1, 1, 18);
let time = currentTime.getHours();
let timeWord = "Morning";

if (time < 12) {
  timeWord = "Morning";
} else if (time > 12 && time < 17) {
  timeWord = "Day";
} else if (time > 17) {
  timeWord = "Evening";
}

ReactDOM.render(
  <div>
    <h1>Good {timeWord} </h1>
    <h1>Good {time} </h1>
  </div>,
  document.getElementById("root")
);