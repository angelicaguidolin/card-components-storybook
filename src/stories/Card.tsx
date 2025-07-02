//IMPORT
import React from "react"

 //CSS FILE
 import "../styles/card.css";
 import "../styles/reset.css";
 import "../styles/variables.css";
 import "../styles/typography.css";
//CODE
 export const Card=({}) =>{
    return(
        <>
        <div className="container">
        <h1 className="title">SONO LA CARD</h1>
        <img src="/img/Place.jpg" alt="Place" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquam repellendus alias dolor laboriosam tempora ex impedit, sunt sint vero nostrum hic accusantium culpa ea necessitatibus rem. Voluptatibus, est eveniet?</p>
        </div>
        </>
    )
 }