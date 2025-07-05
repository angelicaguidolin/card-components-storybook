//IMPORT
import React from "react";
//CSS 
import "../styles/button.css";

//CODE
export const Button=({label, onClick, variant = "primary"}) =>{
    const variant={
        primary:{
            backgroundColor: "#555AB9",
            color : "white"
        },
        secondary:{
            backgroundColor: "#D73338",
            color: "white"
        },
        disabled:{
            backgroundColor:"#E8EEFF",
            color: "white",
          
        }
    }
const styles={
    ...variant[variant],
}
    return(
        <button className="btn" style={variant} onClick={onClick}>{label}</button>
    )
}

