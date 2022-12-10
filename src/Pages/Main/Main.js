import React from 'react';
import Banner from '../../components/Banner/Banner';
import Headers from '../../components/Headers/Headers';
import Projects from '../../components/Projects/Projects';


const Main = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Main;