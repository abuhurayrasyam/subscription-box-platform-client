import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyProfile = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                MyProfile
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyProfile;