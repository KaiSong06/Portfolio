import React from "react"

const Contact = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-stone-100 py-16" id="contact">
            <div className="max-w-[1200px] w-full mx-auto px-4">
                <div className="text-center">
                    <h2 className="relative flex justify-center  text-4xl font-bold top-10 text-sky-500">Contact Me</h2>
                </div>  

                <div className="max-w-[800px] mx-auto">
                    <div className="mt-6 bg-stone-100 rounded-xl">
                        <div className="p-10">
                            <form action="https://getform.io/f/bvrwzdrb" method="POST">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                    <div>
                                        <div className="mt-2.5">
                                            <input type="text" name="name" placeholder="Your Name"
                                                className="bg-stone-100 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                    border-gray-700 rounded-md focus:outline-none focus:border-sky-500
                                                    p-1 shadow-md transform"/>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mt-2.5">
                                            <input type="email" name="email" placeholder="Your Email"
                                                className="bg-stone-100 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                                                border-gray-700 rounded-md focus:outline-none focus:border-sky-500 p-1 shadow-md transform"/>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <div className="mt-2.5">
                                            <textarea name="message" placeholder="Your Message"
                                                className="bg-stone-100 w-full px-4 py-4 text-gray-400
                                                 placeholder-gray-400 border
                                                  border-gray-700 rounded-md
                                                   focus:outline-none focus:border-sky-500 shadow-md">
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <button type="submit"
                                                className="text-xl w-full p-4 mt-2 font-semibold
                                                 text-black border border-gray-700 rounded-md
                                                  hover:bg-gradient-to-br from-gray-500 to-black shadow-md transform">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact