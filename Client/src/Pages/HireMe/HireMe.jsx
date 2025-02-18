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
                            <h1>Hire Me</h1>
                            <br />
                            <p>Hey there!,</p>
                            <br />
                            <p>
                                I am <strong>Tushar Chaudhary</strong>, a dedicated <strong>Full-Stack Developer</strong> with expertise in the
                                <strong> MERN stack</strong> (MongoDB, Express.js, React, Node.js). <br /> I also have experience in <strong> PHP </strong>
                                and various other frameworks and libraries.
                            </p>
                            <br />
                            <p>
                                Whether you need a modern web application, API integration, or a reliable solution to complex development challenges,
                                I am here to provide high-quality services tailored to your needs.
                            </p>
                            <br />
                            <p>
                                Let’s collaborate and build something exceptional. <strong>Get in touch today!</strong>
                            </p>
                            <br />
                            <a href="mailto:dev.mrtushar01@gmail.com" class="hire-btn">Hire Me</a>
                        </section>

                    </div>
                </div>
                <div className="middle">
                    <div className="left">
                        <a style={{ textDecoration: 'none', color: 'gray' }} target="_blank" href="https://www.linkedin.com/in/devtushar01"><li>Linkedin</li></a>
                        <a style={{ textDecoration: 'none', color: 'gray' }} target="_blank" href="https://github.com/devtushar001"><li>Github</li></a>
                        <a style={{ textDecoration: 'none', color: 'gray' }} target="_blank" href="https://leetcode.com/u/_devtushar001/"><li>Leatcode</li></a>
                    </div>
                    <div className="right">
                        <section class="my-skills">
                            <h2>My Skills & Expertise</h2>
                            <div class="skills-container">
                                <div class="skill-category">
                                    <h3>Frontend Development</h3>
                                    <ul>
                                        <li>HTML5, CSS3, JavaScript (ES6+)</li>
                                        <li>React.js, Next.js</li>
                                        <li>Bootstrap, Tailwind CSS</li>
                                        <li>TypeScript</li>
                                        <li>Jodit-React, React-Quill</li>
                                        <li>Java & Java DSA</li>
                                    </ul>
                                </div>

                                <div class="skill-category">
                                    <h3>Backend Development</h3>
                                    <ul>
                                        <li>Node.js, Express.js</li>
                                        <li>PHP, Laravel</li>
                                        <li>REST API, GraphQL</li>
                                        <li>Authentication (JWT, OAuth)</li>
                                        <li>Cloudinary Integration</li>
                                    </ul>
                                </div>

                                <div class="skill-category">
                                    <h3>Database & Storage</h3>
                                    <ul>
                                        <li>MongoDB, Mongoose</li>
                                        <li>SQL, MySQL</li>
                                        <li>Firebase</li>
                                        <li>Cloudinary (Image & Video Storage)</li>
                                    </ul>
                                </div>

                                <div class="skill-category">
                                    <h3>Tools & Other Skills</h3>
                                    <ul>
                                        <li>Git & GitHub</li>
                                        <li>Docker, Kubernetes</li>
                                        <li>Razorpay Integration (Payment Gateway)</li>
                                        <li>AWS (Basic Cloud Services)</li>
                                        <li>Data Structures & Algorithms (Java DSA)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="bottom">
                    <input type="text" name="name" id="name" placeholder="Enter your name" />
                    <input type="email" name="email" id="email" placeholder="Enter your email id" />
                    <textarea name="message" id="message"></textarea>
                    <button>Submit</button>
                </div>
            </div>
        </>
    );
};

export default HireMe;
