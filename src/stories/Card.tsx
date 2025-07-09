//IMPORT
import React from "react"

import {Button} from "./Button"

//CSS FILE
import "../styles/card.css"
import "../styles/typography.css"
//CODE
type CardProps = {
    title: string;
    description: string;
    variant?: "primary"| "secondary"| "third";
    image?: string;
 
}
const changeImage: Record<string, string> = {
    primary: "src/img/img_1.png",
    secondary: "src/img/img_2.png",  
    third: "src/img/img_3.png",
}
export const Card: React.FC<CardProps> = ({ title, description, variant="primary",image}) => {
    const variants={
        primary:{
            backgroundColor:"#FFF4E9",
            color: "#000",
            
        },
        secondary:{
            backgroundColor:"#F4B570",
            color: "#white",
        },
        third:{
            backgroundColor:"#A7D8BC",
            color: "#000",
        }
    
    }
    const styles={
        ...variants[variant],
    }
    const imgchange= changeImage[variant] || img_1;
    return(
        <div className="container">
            <div className="card" style={styles} >
            <h1 className="title">{title}</h1>
            <div className="img-style">
            <img src={imgchange} alt="Placeholder" className="placeholder" />
            </div>
            <p className="description">{description}</p>
            <div className="btn-style">
            <Button  label="Scopri di più" variant="primary" size="medium" />
            </div>
            </div>
        </div>
    )
}