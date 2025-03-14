import React from "react"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-stone-100">
            <div className="flex justify w-full px-4 pt-[150px] pb-8">
                <div className="flex justify-center w-full">
                    <div className="px-5">
                        <h1 className="text-black text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                            <TypeAnimation
                            sequence={[
                                    "Hi, my name is Kai",
                                    1000,
                                    "",
                                    1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                        </h1>

                        <p className="text-black sm:text-lg my-6 lg:text-xl">
                            I'm an aspiring Software Developer @Carleton University
                        </p>

                        <div className="my-8 flex justify-center">
                            <a href="https://drive.google.com/file/d/1vZ86aDLAAwuozQJon7GYegUf39wBhZHF/view?usp=sharing" target="_blank" className="px-6 py-3 rounded-xl mr-4
                                border border-sky-500 hover:bg-gradient-to-br from-gray-500 to-black p-1 shadow-md transform">
                                    Resume
                            </a>
                            <a href="#contact" className="px-6 py-3 rounded-xl
                                    border border-sky-500 hover:bg-gradient-to-br from-gray-500 to-black p-1 shadow-md transform">
                                    Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero