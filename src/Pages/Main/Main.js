import React from 'react';
import Banner from '../../components/Banner/Banner';
import ContactMe from '../../components/ContactMe/ContactMe';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';


const Main = () => {
    return (
        <div>
            <Banner />
            <Skills />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Main;