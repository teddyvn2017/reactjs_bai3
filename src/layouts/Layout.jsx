import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
    <>
    <Header />
        <main className='container mx-auto max-w-[1280px]'>{children}</main>
    <Footer />
    </>
    
  )
}

export default Layout