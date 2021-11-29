import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container w-75 m-auto">
            <h1 className="text-center mb-5">About</h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div className="content">
                    <h1>hello</h1>
                </div>
                <div className="img">
                    <img className="img-fluid" src="https://i.ibb.co/j6B9cpw/Whats-App-Image-2021-11-28-at-5-54-12-PM.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;