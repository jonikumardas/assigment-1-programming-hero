import React from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Fotter/Footer';
import Header from './Homepage/Header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;