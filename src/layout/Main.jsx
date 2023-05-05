import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Shared/NavigationBar';
import Footer from '../pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;