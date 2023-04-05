import Footer from "../Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
const Main = () => {
	
	
	const handleFrom = () => {
		// window.location.href = "/form"
		
	}
	

	return (
		<div>
			<Header />
			<Banner />
			<About />
			<Contact />
		</div>
	);
};

export default Main;
