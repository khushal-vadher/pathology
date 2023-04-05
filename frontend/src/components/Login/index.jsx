import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {ToastContainer,toast} from'react-toastify';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const nav = useNavigate();


	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {

		e.preventDefault();
		try {
			const url = "/auth";
			const res = await axios.post(url, data);
			console.log(res.data)
			localStorage.setItem("token", res.data.data);

			localStorage.setItem("userid", res.data.user._id)
			// console.log(res.data)
			// console.log(res.data.user)
			toast.success('you have successfully signed in');
			nav("/")

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}

		}

	};

	return (
		<div>
			<Header />
			<div className={styles.login_container}>
				<div className={styles.login_form_container}>
					<div className={styles.left}>
						<form className={styles.form_container} onSubmit={handleSubmit}>
							<h1>Login to Your Account</h1>
							<input
								type="email"
								placeholder="Email"
								name="email"
								onChange={handleChange}
								value={data.email}
								required
								className={styles.input}
							/>
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={handleChange}
								value={data.password}
								required
								className={styles.input}
							/>
							{error && <div className={styles.error_msg}>{error}</div>}
							<button type="submit" className={styles.green_btn}>
								Sign In
							</button>
						</form>
					</div>
					<div className={styles.right}>
						<h1>New Here ?</h1>
						<Link to="/signup">
							<button type="button" className={styles.white_btn}>
								Sing Up
							</button>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Login;
