//IMPORT
import React from "react"
import placeimage from "../img/place.jpg"

//CSS FILE
import "../styles/card.css"
import "../styles/typography.css"
//CODE
type CardProps = {
    title: string;
    description: string;
    image?: string;
    children?: React.ReactNode;
}
export const Card: React.FC<CardProps> = ({ title, description, image = placeimage, children }) => {
    return(
        <div className="container">
            <h1 className="title">SONO LA CARD</h1>
            {image && <img src={image} alt={title} className="placeholder" />}
            <p className="description">{description}</p>
            {children}
        </div>
    )
}