import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cardText1, cardText2, cardText3 } from "./Cards";

const cards = new Map([
    [1, cardText1],
    [2, cardText2],
    [3, cardText3],
]);

const Projects = () => {

    const [card, setCard] = useState(1);

    const handleCards = (currentCard, path) => {
        if (path === "forward") {
            currentCard += 1;
            if (currentCard > 3) {
                currentCard = 1;
            }
        } else {
            currentCard -= 1;
            if (currentCard < 1) {
                currentCard = 3; 
            }
        }
        return currentCard;
    };

    return (
        <div className="relative flex justify-center items-center w-screen h-screen" id="projects">
            <div className="absolute lg:top-0 lg:text-7xl md:top-15 md:text-4xl top-35 text-xl text-sky-500 font-bold">
                <h1>My Projects</h1>
            </div>

            <div onClick={() => setCard((prevCard) => handleCards(prevCard, "backward"))}>
                <IoIosArrowBack className="flex justify-center items-center md:w-40 w-20 h-70 hover:w-[140%] text-sky-500 "/>
            </div>

            <div className="relative flex justify-center items-center perspective-1000">
                <div className="md:w-200 md:h-100 w-80 h-40 bg-sky-500 text-white flex justify-center items-center rounded-lg shadow-2xl transform">
                    {cards.get(card)}
                </div>
            </div>

            <div onClick={() => setCard((prevCard) => handleCards(prevCard, "forward"))}>
                <IoIosArrowForward className="flex justify-center items-center md:w-40 w-20 h-70 hover:w-[40%] text-sky-500" />
            </div>
        </div>
    );
};

export default Projects;
