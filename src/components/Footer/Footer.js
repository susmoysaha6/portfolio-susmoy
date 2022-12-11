import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <footer className="footer items-center p-10 bg-base-100 text-base-content">
                <div className='flex items-center'>
                    <img width={100} src={logo} alt="" />
                    <p>SUSMOY SAHA</p>
                </div>
                <div>

                    <a href="#skill" className="link link-hover">Skills</a>
                    <a href='#projects' className="link link-hover">Projects</a>
                </div>
                <div>
                    <a href='#about' className="link link-hover">About </a>
                    <Link to='/blogs' className="link link-hover">Blogs</Link>
                </div>
                <div>
                    <a href='#contact' className="link link-hover">Contact Me</a>
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

            </footer>
        </div>
    );
};

export default Footer;