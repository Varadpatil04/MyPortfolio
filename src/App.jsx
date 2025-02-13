import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Hero from './Components/Home';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';
import Loader from './Components/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <Outlet />
                    <Hero />
                </>
            )}
        </>
    );
}

export default App;