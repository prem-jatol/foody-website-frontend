import React from 'react';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
