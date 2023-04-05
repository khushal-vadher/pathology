import React, { useState, useEffect, useReducer } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Patientcard from '../Patient/Patientcard';
import AddressCard from '../Address/AddressCard';
function Displayuser() {
    const [users, setUsers] = useState([])
    const [patient, setPatient] = useState([])
    const [address, setAddress] = useState([])
    const [reducer, setReducer] = useReducer(x => x + 1, 0)
    const nav = useNavigate()
    const fetch = async () => {
        try {
            // axios.get("/users/getall").then((response)=>{setUsers(response.data);});
            axios.get("/users/getall").then((res) => { setUsers(res.data) })
            // console.log(users);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {

        fetch();
        console.log(users)
    }, [reducer])

    const handlecust = () => {
        setReducer()

    }

    var isPatient = false
    const handlePatient = (e, userid) => {
        e.preventDefault();
        console.log(userid)
        isPatient = true
        try {

            axios.post("/patient/get", { userid }).then((res) => { setPatient(res.data) })
            console.log(patient)

        } catch (err) {
            console.log(err)
        }

    }
    const handleAddress = (e, userid) => {
        e.preventDefault();
        console.log(userid)

        const get = async () => {
            try {

                await axios.post("/address/get", { userid }).then((res) => { setAddress(res.data) })
                console.log(address)

            } catch (err) {
                console.log(err)
            }
        }

        get()

        
    }


    return (
        <div>
            <Header />
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>All Test <b>Details</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <div className="search-box">
                                        <div className="input-group">
                                            <input type="text" id="search" className="form-control" placeholder="Search by Name" />
                                            <span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th >Name</th>

                                    <th>Email</th>
                                    <th></th>
                                    <th></th>



                                </tr>
                            </thead>
                            <tbody>
                                {users.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.firstName}<p></p>{obj.lastName}</td>
                                        <td>{obj.email}</td>
                                        <td><Button onClick={(e) => { handlePatient(e, obj._id) }} >Patient</Button></td>
                                        <td><Button onClick={(e) => { handleAddress(e, obj._id) }} >Address</Button></td>
                                    </tr>
                                ))
                                }

                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
           
                {1 && <Patientcard patient={patient} />}
            
            <div>
                {1&& <AddressCard address={address} />}
            </div>

            <Footer />
        </div>
    );
}

export default Displayuser;