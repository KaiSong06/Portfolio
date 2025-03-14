import React from "react"
import profilePic from "../assets/profilepicture.jpg"

const About = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-stone-100" id="about">
            <div className="text-black max-w-[1200px] w-full">
                <div className="md:grid md:grid-cols-2 sm:py-16">
                    <div className="rounded-xl mt-4 p-5 md:mt-0 text-left flex py-6 md:py-0 shadow-2xl transform">
                        <div className="my-auto mx-auto max-w-[600px]">
                            <h2 className="text-4xl font-bold mb-4 text-sky-500">About me</h2>
                            <p className="text-base lg:text-lg">
                            Hi, I'm a first year Computer Science student at Carleton University
                            with a specialization in Artificial Intelligence and Machine Learning
                            persuing a minor in Business Management. I'm always look to expand on my
                            skillset. Right now, I'm learning full stack web development as well as 
                            implementations of various AI models. I also love playing League of Legends
                            and volleyball. Feel free to reach out with any opportunities for projects,
                            internships, or hackathons!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center h-full">
                        <img className="rounded-3xl max-w-full h-auto shadow-2xl transform" src={profilePic} width={500} height={400} alt="About me"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About