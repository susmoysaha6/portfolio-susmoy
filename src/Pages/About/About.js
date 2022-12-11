import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <div id='about' className='w-11/12 mx-auto shadow'>
            <h1 className='text-center text-3xl uppercase my-10'>About</h1>
            <div className='flex flex-col md:flex-row md:justify-center md:items-center '>
                <div className='md:w-1/2'>
                    <p className='text-justify'>
                        I'm Susmoy Saha from Barishal, Bangladesh. I have completed M.Sc. in Statistics from Shahjalal University of Science & Technology. I have been learning web development since 2021.
                        So far, I have learned ReactJS and built some projects.
                        Also I have knowledge about NodeJS, ExpressJS and MongoDB.
                        I have built two projects using CRUD Operations. In university I worked for a sports organization. Where I worked in different roles. I am diligent, punctual and quick learner.I like to learn new technologies. I can work under pressure. Thank you for visiting my portfolio.
                    </p>
                </div>
                <div className='md:w-1/2  md:pl-10'>
                    <h3 className='text-xl'>Contact Info :</h3>
                    <p>Email: susmoysaha6@gmail.com</p>
                    <p>Phone: +8801677641562</p>
                    <div className='my-2 flex'>
                        <a className='text-2xl mr-2' target='blank' href="https://github.com/susmoysaha6">
                            <FaGithubSquare />
                        </a>
                        <a className='text-2xl mr-2' target='blank' href="https://www.linkedin.com/in/susmoy-saha-b150a5183/">
                            <FaLinkedin />
                        </a>
                        <a className='text-2xl' target='blank' href="https://www.facebook.com/susmoys/">
                            <FaFacebookSquare />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;