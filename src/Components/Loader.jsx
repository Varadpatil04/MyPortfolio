import React from 'react';
import './Loader.css';
import '../App.css';

const Loader = () => {
    return (
        <>
        <div className="loader-container glass">
            <div className="loader">
                {/* <div className="line1"></div> */}
                <div className="line2"></div>
                {/* <div className="line3"></div> */}
                {/* <div className="line4"></div> */}
                <div className="line5"></div>
                {/* <div className="line6"></div> */}
            </div>
        </div>
        </>
    );
};

export default Loader;