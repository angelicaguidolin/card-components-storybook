//IMPORT
import React from "react";
//CSS 
import "../styles/button.css";
import { Disabled } from "./Button.stories";

//CODE
export interface ButtonProps {
    label: string;
    bakcgroundColor?: string;
    size?:'small' | 'medium' | 'large';
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "disabled";
}
export const Button=({label, onClick, variant = "primary", size}: ButtonProps) =>{
    const variants={
        primary:{
            backgroundColor: "#009A8B",
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
            backgroundColor:"#788185",
            color: "white",
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

