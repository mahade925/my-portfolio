import React from 'react';
import { Link } from 'react-router-dom';
import { saveAs } from "file-saver";
import './Banner.css'

const Banner = () => {
    const saveFile = () => {
        saveAs(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          "example.pdf"
        );
    };
    return (
        <div className="container text-center banner-container">
            <h1 className>Hello I'm Mahade Hasan</h1><br />
            <h1>I'm a Full Stack Web Developer</h1><br />
            <button class="custom-btn btn-6" onclick="DownloadFile('./my-resume.pdf')"><span>Download
            Resume</span></button>
        </div>
    );
};

export default Banner;