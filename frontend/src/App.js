import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Home";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import TestList from "./components/TestList/TestList";
import Home from "./components/Home/index.jsx";
import Tests from "./components/DisplayUserTest/Tests"
function App() {

	const user = localStorage.getItem("token");
	console.log(user)

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{user && <Route path="/form" exact element={<UserForm />} />}
			<Route path="/form" element={<Navigate replace to="/login" />} />
			<Route path="/test" exact element={<TestList />} />
			<Route path="/alltest" exact element={<Tests />} />
		</Routes>
	);
}

export default App;
