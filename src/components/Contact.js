// src/components/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message" />
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Contact;
