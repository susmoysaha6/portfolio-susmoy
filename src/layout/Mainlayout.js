import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../components/Headers/Headers';

const Mainlayout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;