//IMPORT
import React from "react";
//CSS 
import "../styles/button.css";
import { Disabled } from "./Button.stories";

//CODE
export interface ButtonProps {
    label: string;
    size?:'small' | 'medium' | 'large';
    onClick?: () => void;
    variant?: "primary" | "secondary" | "disabled";
}
export const Button=({label, onClick, variant = "primary"}: ButtonProps) =>{
    const variants={
        primary:{
            backgroundColor: "#02cab6",
            color : "white",
            size: 'medium',
            disabled: false,
        },
        secondary:{
            backgroundColor: "#FF7E00",
            color: "white",
            size: 'medium',
            disabled: false,
        },
        disabled:{
            backgroundColor:"#b8bfc1",
            color: "black",
            cursor: "not-allowed",
          
        }
    }
const styles={
   ...variants[variant],
}

    return(
        <button className="btn"  style={styles} onClick={onClick}>{label}</button>
    )
}

