import React from "react";
import './HireMe.css';

const HireMe = () => {
    return (
        <>
            <div className="hire-me-container">
                <div className="hire-me-content">
                    <h1 className="title">Let's Work Together</h1>
                    <p className="description">
                        Looking for a skilled developer to build your next project? Let’s work together!
                    </p>

                    {/* Skills Section */}
                    <div className="mb-6">
                        <h2 className="skills-title">My Expertise</h2>
                        <ul className="skills-list">
                            <li>Full-Stack Web Development (MERN, PHP, Java, SQL)</li>
                            <li>Frontend: React, Tailwind CSS, Bootstrap</li>
                            <li>Backend: Node.js, Express.js, PHP</li>
                            <li>Database Management: MongoDB, MySQL</li>
                            <li>API Development & Integration (Cloudinary, Razorpay, etc.)</li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="contact-input"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="contact-input"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="contact-textarea"
                        ></textarea>
                        <button className="contact-button">Send Message</button>
                    </form>

                    {/* Social Links */}
                    <div className="social-links">
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="mailto:your.email@example.com">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HireMe;
