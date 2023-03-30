import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Home";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import TestList from "./components/TestList/TestList";
import Home from "./components/Home/index.jsx";
import Tests from "./components/DisplayUserTest/Tests"
import Profile from "./components/Profile/Profile";
function App() {

	const user = localStorage.getItem("token");
	console.log(user)
	const userid = localStorage.getItem("userid")
	if(userid === "6425acd05851f274a3fcce71"){
		var isAdmin = true
	}

	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{user && <Route path="/form" exact element={<UserForm />} />}
			<Route path="/form" element={<Navigate replace to="/login" />} />
			{isAdmin && <Route path="/test" exact element={<TestList />} />}
			{isAdmin && <Route path="/alltest" exact element={<Tests />} />}
			{user && <Route path="/profile" exact element={<Profile />}/>}
			<Route path="/profile" exact element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
