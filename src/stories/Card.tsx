 import React from "react"
 import "../styles/card.css";
 import "../styles/reset.css"
 import Place from "../img/Place.jpg"
 export const Card=({}) =>{
    return(
        <>
        <div className="container">
        <h1 className="title">SONO LA CARD</h1>
        <img src={Place} alt="pgn accesibilità" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquam repellendus alias dolor laboriosam tempora ex impedit, sunt sint vero nostrum hic accusantium culpa ea necessitatibus rem. Voluptatibus, est eveniet?</p>
        </div>
        </>
    )
 }