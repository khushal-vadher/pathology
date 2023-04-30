import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header(props) {
	const nav = useNavigate();
	const user = localStorage.getItem("token");
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("User");
		localStorage.removeItem("userid");
		nav("/login")
	};

	const userid = localStorage.getItem("userid")
	if(userid === "6425acd05851f274a3fcce71"){
		var isAdmin = true
	}
	return (
		<div>
			<header>
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
						<a className="navbar-brand" href="#"><NavLink to="/"><span className="text-primary">One</span>-Health</NavLink></a>



						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarSupport">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a className="nav-link" ><NavLink to="/">Home</NavLink></a>

								</li>

								{!isAdmin && <li className="nav-item">
									<a className="nav-link" ><NavLink to="/form">Appointment</NavLink></a>
								</li>}
								{!isAdmin && <li className="nav-item">
									<a className="nav-link" ><NavLink to="/report">Reports</NavLink></a>
								</li>}
								{isAdmin && <li className="nav-item">
									<a className="nav-link" ><NavLink to="/alltest">Appointment</NavLink></a> {/*  appointmnt link work as display all report*/}
								</li>}
								<li className="nav-item">
									<a className="nav-link" ><NavLink to="/profile" >Profile</NavLink></a>
								</li>
								{isAdmin && <li className="nav-item">
									<a className="nav-link" ><NavLink to="/test" >Test</NavLink></a>
								</li>}
								{isAdmin && <li className="nav-item">
									<a className="nav-link" ><NavLink to="/customer" >User</NavLink></a>
								</li>}
								<li className="nav-item">
									<a className="nav-link" ><NavLink to="/contact" >Contact</NavLink></a>
								</li>
								<li className="nav-item">
									{user && <a onClick={handleLogout} className="btn btn-primary ml-lg-3" style={{ color: '#095443' }}><NavLink to="/login"  >Logout</NavLink></a>}
									{!user && <a className="btn btn-primary ml-lg-3" style={{ color: '#095443' }}><NavLink to="/login" >Login / Register</NavLink></a>}
								</li>
							</ul>
						</div>
						{/* <!-- .navbar-collapse --> */}
					</div>
					{/* <!-- .container --> */}
				</nav>
			</header>

		</div>
	);
}

export default Header;