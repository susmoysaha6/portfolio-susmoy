import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
const Banner = () => {
    return (
        <div id='home' className='my-10'>
            <div className="shadow-2xl">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div>
                        <h1 className="text-5xl font-bold py-5">Susmoy Saha</h1>
                        <Typewriter className="py-6"
                            options={{
                                strings: ['WEB DEVELOPER', 'MERN STACK DEVELOPER'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        <div className='my-10 flex justify-between'>
                            <a className='text-2xl' target='blank' href="https://github.com/susmoysaha6">
                                <FaGithub />
                            </a>
                            <a className='text-2xl' target='blank' href="https://www.linkedin.com/in/susmoy-saha-b150a5183/">
                                <FaLinkedin />
                            </a>
                            <a className='text-2xl' target='blank' href="https://www.facebook.com/susmoys/">
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