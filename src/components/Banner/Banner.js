import React from 'react';

const Banner = () => {
    return (
        <div id='home' className='my-10'>
            <div className="shadow-2xl">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div>
                        <h1 className="text-5xl font-bold">Susmoy Saha</h1>
                        <p className="py-6">Web Developer || MERN Stack Developer</p>
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