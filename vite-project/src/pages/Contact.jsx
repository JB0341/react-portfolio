import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Me</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="form-control" 
                        aria-label="Name input" 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="form-control" 
                        aria-label="Email input" 
                        required 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                        id="message" 
                        className="form-control" 
                        aria-label="Message input" 
                        rows="4" 
                        required 
                    ></textarea>
                </div>

                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    );
}
