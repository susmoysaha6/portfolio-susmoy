import React from 'react';
import Typewriter from 'typewriter-effect';
import SecondHeader from '../../components/Headers/SecondHeader';
const Blog = () => {
    return (
        <div>
            <SecondHeader />
            <div className='min-h-screen flex justify-center items-center text-3xl font-semibold '>
                <Typewriter
                    options={{
                        strings: ['Coming Soon...'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div>

    );
};

export default Blog;