import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './bg.jpg';

function Banner(props) {

    const userid = localStorage.getItem('userid');
    
    return (
        <div>
            <div className="page-hero bg-image overlay-dark" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-section">
                    <div className="container text-center wow zoomIn">
                        <span className="subhead">Let's make your life easier</span>
                        <h1 className="display-4">Healthy Living</h1>
                        {userid && <a  className="btn btn-primary"><NavLink to="/form">Let's Do Test For You</NavLink></a>}
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="page-section py-3 mt-md-n5 custom-index">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp">
                                    <div className="circle-shape bg-secondary text-white">
                                        <span className="mai-chatbubbles-outline"></span>
                                    </div>
                                    <p><span>Chat</span> with a doctors</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp">
                                    <div className="circle-shape bg-primary text-white">
                                        <span className="mai-shield-checkmark"></span>
                                    </div>
                                    <p><span>One</span>-Health Protection</p>
                                </div>
                            </div>
                            <div className="col-md-4 py-3 py-md-0">
                                <div className="card-service wow fadeInUp">
                                    <div className="circle-shape bg-accent text-white">
                                        <span className="mai-basket"></span>
                                    </div>
                                    <p><span>One</span>-Health Pharmacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;