import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Home";
import Signup from "./components/Singup";
import Login from "./components/Login";
import UserForm from "./components/UserForm";
import TestList from "./components/TestList/TestList";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			{user && <Route path="/form" exact element={<UserForm />}/>}
			<Route path="/form" element={<Navigate replace to="/login" />} />
			<Route path="/test" exact element={<TestList />}/>
		</Routes>
	);
}

export default App;
