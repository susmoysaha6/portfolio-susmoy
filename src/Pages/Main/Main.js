import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactMe from '../../components/ContactMe/ContactMe';
import Headers from '../../components/Headers/Headers';
import Projects from '../../components/Projects/Projects';


const Main = () => {
    return (
        <div>
            <Headers />
            <Banner />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Main;