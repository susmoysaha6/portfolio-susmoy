import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nmac5gh', 'template_b2751e5', form.current, 'L8eCYFbxoZKuXPg-y')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent Successfully')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id='contact' className='mt-20 mb-36 shadow-2xl p-10'>
            <h1 className='text-center text-3xl uppercase my-10'>Contact Me</h1>
            <form className='grid grid-cols-2 gap-5' ref={form} onSubmit={sendEmail}>


                <input placeholder='Name' className="input input-bordered w-full" type="text" name="user_name" />

                <input placeholder='Email' className="input input-bordered w-full" type="email" name="user_email" />
                <textarea placeholder='Message' className="textarea textarea-bordered grid col-span-2" name="message" />
                <input className='btn grid col-span-2' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactMe;