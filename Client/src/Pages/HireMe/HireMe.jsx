import React from "react";
import './HireMe.css';
import { assets } from "../../assets/escomData";

const HireMe = () => {
    return (
        <>
            <div className="hire-me-container">
                <div className="top">
                    <div className="left">
                        <img src={assets.me} alt="" />
                        <h1>Mr. Tushar</h1>
                    </div>
                    <div className="right">
                        <section class="hire-me">
                            <h1>Hire Me!</h1>
                            <p>Hey there! </p>
                            <p>
                                I’m <strong>Tushar Chaudhary</strong>, a passionate <strong>Full-Stack Developer</strong> specializing in the
                                <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). I also have expertise in
                                <strong>PHP</strong> and various other frameworks and libraries.
                            </p>
                            <p>
                                If you're looking for <strong> a skilled developer</strong> to build or optimize your project,
                                I’m here to help! Whether it’s <em>web development, API integration, or troubleshooting issues</em>,
                                I can deliver high-quality solutions at an <strong>affordable price</strong>.
                            </p>
                            <p> <strong>Let’s work together!</strong> Contact me today. </p>
                            <a href="mailto:dev.mrtushar01@gmail.com" class="hire-btn">Hire Me</a>
                        </section>
                    </div>
                </div>
                <div className="middle">
                    <div className="left">
                       <li>Linkedin</li>
                       <li>Github</li>
                       <li>Leatcode</li>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom">
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                    <input type="email" name="email" id="email" placeholder="Enter your email id"/>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                    <textarea name="message" id="message"></textarea>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};

export default HireMe;
