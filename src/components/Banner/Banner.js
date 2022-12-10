import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
const Banner = () => {
    return (
        <div id='home' className='my-10 w-11/12 mx-auto'>
            <div className="shadow-2xl">
                <div className="flex flex-col-reverse md:flex-row justify-evenly items-center">
                    <div className='px-5'>
                        <h1 className="text-4xl md:text-5xl font-bold py-5">SUSMOY SAHA</h1>
                        {/* <div className="text-5xl font-bold py-5">
                            <Typewriter
                                options={{
                                    strings: ['SUSMOY SAHA'],
                                    autoStart: true,
                                    loop: true
                                }} />
                        </div> */}

                        <Typewriter
                            options={{
                                strings: ['WEB DEVELOPER', 'REACT JS DEVELOPER', 'MERN STACK DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />

                        <div className='my-10 flex justify-between'>
                            <a className='text-3xl' target='blank' href="https://github.com/susmoysaha6">
                                <FaGithub />
                            </a>
                            <a className='text-3xl' target='blank' href="https://www.linkedin.com/in/susmoy-saha-b150a5183/">
                                <FaLinkedin />
                            </a>
                            <a className='text-3xl' target='blank' href="https://www.facebook.com/susmoys/">
                                <FaFacebook />
                            </a>
                        </div>


                    </div>
                    <div className=' mt-5'>
                        <img src="https://i.ibb.co/hLq2NQz/15933874-1363042953769435-915479771-o-removebg-preview.png" alt='' className="rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;