import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
	const nav=useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("User");
		nav("/login")
		// window.location.reload();
	};
	const handleFrom = () =>{
		// window.location.href = "/form"
	}
	const handleProfile = () =>{
		// window.location.href = "/profile";
	}

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Pathology</h1>
				<Link to={`/`} className={styles.white_btn} style={{textDecoration :"none"}}>
					Home
				</Link>
				<Link to={`/profile`} className={styles.white_btn} onClick={handleProfile} style={{textDecoration :"none"}}>
					Profile
				</Link>
				
				<Link  to={`/form`} className={styles.white_btn} style={{textDecoration :"none"}}>
					Appointment
				</Link>
				
				<button  className={styles.white_btn} onClick={handleLogout} style={{textDecoration :"none"}}>
					Logout
				</button>
				
			</nav>
		</div>
	);
};

export default Main;
