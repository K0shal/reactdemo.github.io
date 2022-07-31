import "./Logo.css";
import { useEffect, useState } from "react";
import List from "./List";
function Logo(props) {
  const [icon, setIcon] = useState("");
  const [menu, setMenu] = useState('toggle');
  const [check,setCheck]=useState(0);
  function change(e) {
    if (icon === "") {
        setMenu('toggle')
      setIcon("change");
    } else {
      setIcon("");
      setMenu('')
    }

    if (menu === "") {
        setMenu('toggle')
     
    } else {
      setMenu('')
    }
  }
  useEffect(()=>{
    if(window.innerWidth<700){
      setCheck(1)
    }else{
      setCheck(0)
    }
    console.log("hih")
  })

  return (
    <>
      <div className={`div ${menu}`}>
        {" "}
        {(check)?<List flex="col" />:<span></span>}{" "}
      </div>

      <div className="burgerIcon" onClick={change}>
        <div className={`bar1 ${icon}`}></div>
        <div className={`bar2 ${icon}`}></div>
        <div className={`bar3 ${icon}`}></div>
      </div>
      <img className="navLogoImg" src={props.logo} />
    </>
  );
}
export default Logo;
