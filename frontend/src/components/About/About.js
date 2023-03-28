import React from 'react';
import bgdoc from './bgdoctor.png'

function About(props) {
    return (
        <div>

            <div className="page-section pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 py-3 wow fadeInUp">
                            <h1>Welcome to Your Health <br /> Center</h1>
                            <p className="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
                            <a href="about.html" className="btn btn-primary">Learn More</a>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                            <div className="img-place custom-img-1">
                                <img src={bgdoc} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;