import React from "react";

let myYear = new Date().getFullYear()  // returns the current year
//console.log(myYear)

function Footer(){
    return (
        <footer>
        <p>copyright: {myYear}</p>
        </footer>
    )
}

export default Footer;