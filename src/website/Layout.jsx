import React from 'react';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

const Layout = () => {
    return (
        <>
            <Header />
            <main className='w-[900px] border mx-auto h-[600px]'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
