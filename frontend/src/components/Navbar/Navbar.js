import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
const Navbar = () => {
    const nav = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        nav("/login")
        // window.location.reload();
    };
    const handleFrom = () => {
        // window.location.href = "/form"
        nav("/form")
    }
    const handleProfile = () => {
        // window.location.href = "/profile";
        nav("/profile")
    }
    const handleHome = () => {
        nav("/")
    }

    const handlePathology = () => {
        nav("/")
    }

    return (
        <div className={styles.main_container}>
            <div className="back-to-top"></div>
            <nav className={styles.navbar}>
                <h1 onClick={handlePathology}>Pathology</h1>
                <button onClick={handleHome} className={styles.white_btn} style={{ textDecoration: "none" }}>
                    Home
                </button>
                <button className={styles.white_btn} onClick={handleProfile} style={{ textDecoration: "none" }}>
                    Profile
                </button>

                <button onClick={handleFrom} className={styles.white_btn} style={{ textDecoration: "none" }}>
                    Appointment
                </button>

                <button className={styles.white_btn} onClick={handleLogout} style={{ textDecoration: "none" }}>
                    Logout
                </button>

            </nav>


            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 text-sm">
                            <div className="site-info">
                                <a href="#"><span className="mai-call text-primary"></span> +00 123 4455 6666</a>
                                <span className="divider">|</span>
                                <a href="#"><span className="mai-mail text-primary"></span> mail@example.com</a>
                            </div>
                        </div>
                        <div className="col-sm-4 text-right text-sm">
                            <div className="social-mini-button">
                                <a href="#"><span className="mai-logo-facebook-f"></span></a>
                                <a href="#"><span className="mai-logo-twitter"></span></a>
                                <a href="#"><span className="mai-logo-dribbble"></span></a>
                                <a href="#"><span className="mai-logo-instagram"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container">
                    <a className="navbar-brand" href="#"><span className="text-primary">One</span>-Health</a>



                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupport">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link onClick={handleFrom} className="nav-link" >Home</Link>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary ml-lg-3" href="#">Login / Register</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- .navbar-collapse --> */}
                </div>
                {/* <!-- .container --> */}
            </nav>

        </div>




    );
};

export default Navbar;
