import './List.css'
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"

function List(props) {

    const [liStyle,setliStyle]=useState('listRow');
    useEffect(()=>{
        if(props.flex=="col"){
            setliStyle('listCol')
        }else{
            setliStyle('listRow')
        }
    })
  
    let style={color:"white",textDecoration:"none"};
    return  <ul className={liStyle}>
        <Link style={style} to="/Home"><li>Home</li></Link>
        <Link style={style}  to="/NavTextTwo"><li>NavText Two</li></Link>
        <Link style={style}  to="/NavTextThree"><li>Navtext Three</li></Link>
        <Link style={style}  to="/Contact"><li>Contact us</li></Link>
    </ul>
}

export default List;