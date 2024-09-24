import React from "react";
import gamePic from './assets/the-elder-scrolls-v--skyrim-v5--19.png'

const Card = () => {
    return(
        <div className="Card">
            <img src={gamePic}  alt = "game picture" ></img>
            <h2>TES Skyrim</h2>

        </div>
    )
}
export default Card;