import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';

const Profile = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData((data)=>({
             ...data, [e.target.name]: e.target.value 
        }));
        console.log(data)
    };

    const userid = localStorage.getItem("userid");
    const handleUpdate = async (e) => {
        e.preventDefault();
        if (data.firstName.length === 0 || data.lastName.length === 0 || data.email.length === 0) {
            toast.warning("Empty fields are not valid!")
        }
        else {
            try {

                await axios.put(`/users/update/${userid}`, data).then((res) => { setData(res.data) });
                toast.success('your profile has been updated');
                navigate("/");
                console.log("Updated!");
                console.log(data)
                // console.log(res.message);
            } catch (error) {
                console.log(error)
            }
        }

    };


    useEffect(() => {
        const getUser = async () => {
            try {
                await axios.get(`/users/get/${userid}`).then((res) => { setData(res.data) })
                console.log(data)

            } catch (err) {
                console.log(err)
            }
        }
        getUser();
    }, [])


    return (
        <>
            <Header />
            <div className={styles.signup_container}>
                <div className={styles.signup_form_container}>
                    <div className={styles.left}>
                        <h1>Profile</h1>
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <span className="font-weight-bold">{data.firstName}</span>
                            <span className="text-black-50">{data.email}</span>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <form className={styles.form_container} onSubmit={handleUpdate}>
                            <h1>Update Profile Details</h1>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={(e) => handleChange(e)}

                                defaultValue={data.firstName}
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={(e) => handleChange(e)}
                                defaultValue={data.lastName}
                                className={styles.input}
                            />
                            <input
                                type="text"
                                placeholder="Email ID"
                                name="email"
                                onChange={(e) => handleChange(e)}
                                defaultValue={data.email}
                                className={styles.input}
                            />


                            <div className="row-5">
                                <button type="submit" className={styles.green_btn}>
                                    Update
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;