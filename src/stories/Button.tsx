import React from "react";
import "../styles/button.css";



export const Button=({backgroundColor})=>{
    return(
        <>
        <button className="btn"
        style={{ backgroundColor }}
        >click me</button>
        </>
    )
}