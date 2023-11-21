import React from "react";

function Card(props){
    return (
    <div>

      <div className="card">
          <div className="top">
              <h2 className="name">{props.name}</h2>
          <div className="img">
            <img className="circle-img"
              src={props.imgURL}
              alt="avatar_img"
            />
          </div>
        </div>
        
        <div className="bottom">
          <div className="info">
  
            <p>{props.phone}</p>
            <p>{props.email}</p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Card;