import React from "react"
import html from "../assets/html.png"
import css from "../assets/css.png/"
import javascript from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/pythonPic.png"
import react from "../assets/react.png"

const Skills = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-stone-100" id="skills">
            <div className="flex justify-center w-full">
                <div className="">
                    <h1 className="flex justify-center w-full text-3xl font-extrabold text-sky-500">
                        My Tech Stack
                    </h1>
                    <div className="flex justify-center w-full ">
                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={html} alt="HTML" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">HTML</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={css} alt="CSS" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">CSS</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={javascript} alt="Javascript" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">Javascript</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={python} alt="Python" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">Python</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={tailwind} alt="Tailwind" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">Tailwind</p>
                        </div>

                        <div className="flex flex-col items-center justify-center p-20">
                            <img src={react} alt="React" className="w-[60px] md:w-[80px]"/>
                            <p className="mt-2">React</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills