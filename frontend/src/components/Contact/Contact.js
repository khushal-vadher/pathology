import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Contact() {
    return (
        <div>
            {/* <Header /> */}
            
            <div className="page-section">
                <div className="container">
                    <h1 className="text-center wow fadeInUp">Get in Touch</h1>

                    <form className="contact-form mt-5">
                        <div className="row mb-3">
                            <div className="col-sm-6 py-2 wow fadeInLeft">
                                <label for="fullName">Name</label>
                                <input type="text" id="fullName" className="form-control" placeholder="Full name.." />
                            </div>
                            <div className="col-sm-6 py-2 wow fadeInRight">
                                <label for="emailAddress">Email</label>
                                <input type="text" id="emailAddress" className="form-control" placeholder="Email address.." />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" className="form-control" placeholder="Enter subject.." />
                            </div>
                            <div className="col-12 py-2 wow fadeInUp">
                                <label for="message">Message</label>
                                <textarea id="message" className="form-control" rows="8" placeholder="Enter Message.."></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary wow zoomIn">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;