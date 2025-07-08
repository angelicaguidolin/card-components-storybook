//IMPORT
import React from "react"
import imageholder from "../img/image_holder.jpg"
import {Button} from "./Button"

//CSS FILE
import "../styles/card.css"
import "../styles/typography.css"
//CODE
type CardProps = {
    title: string;
    description: string;
    backgroundColor?: string;
    variant?: "primary"| "secondary"
 
}
export const Card: React.FC<CardProps> = ({ title, description, backgroundColor, variant="primary"}) => {
    const variants={
        primary:{
            backgroundColor:"#FFF4E9",
            color: "#000",
        },
        secondary:{
            backgroundColor:"#012F4C",
            color: "#000",
        },
    
    }
    const styles={
        ...variants[variant]
    }
    return(
        <div className="container" style={{backgroundColor}}>
            <div className="card" style={styles}>
            <h1 className="title">{title}</h1>
            <div className="img-style">
            <img src={imageholder} alt="Placeholder" className="placeholder" />
            </div>
            <p className="description">{description}</p>
            <div className="btn-style">
            <Button  label="Scopri di più" variant="primary" size="medium" />
            </div>
            </div>
        </div>
    )
}