import "./ProfileIcon.css";
import React from "react";
function ProfileIcon(props) {
  return <div className="profileDiv">
    <img className="fireIcon" src={props.fireIcon}/>
    <img className="profileImg" src={props.profileIcon}/>
    </div>;
}
export default ProfileIcon;
