import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div className="logo">Mahade Hasan</div>
                <label htmlFor="btn" className="icon">
                    <span class="fas fa-bars"></span>
                </label>
                <input type="checkbox" name="" id="btn" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;