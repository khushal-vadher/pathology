
import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './tests.css';
import {ToastContainer,toast} from'react-toastify';

const Tests = () => {

    const [reports, setReports] = useState([])
    const [user,setUser] = useState({})
    const [show,setShow] = useState(false)
    const [reducer,setReducer] =useReducer(x=>x+1,0)
    const userid = localStorage.getItem("userid")
    if (userid === "6425acd05851f274a3fcce71") {
        var isAdmin = true
    }else{
        isAdmin = false
    }
    if (isAdmin) {
        var fetchReport = async () => {
            try {
                await axios.get(`/appointment/`).then((res) => setReports(res.data))

            } catch (err) {
                console.log(err)
            }
        }

    } else {
        var fetchReport = async () => {
            try {
                await axios.post(`/appointment/get`, { userid }).then((res) => setReports(res.data))

            } catch (err) {
                console.log(err)
            }
        }
    }

    useEffect(() => {


        fetchReport();
    }, [reducer])

    const handleShow  = () =>{

    }

    const handleDelete = async(e,id) =>{
        e.preventDefault();
        
        try{
            await axios.delete(`/appointment/delete/${id}`)
            console.log("Deleted")
            setReducer()
            toast.success('Appointment has been deleted successfully!');
        }catch(err){
            console.log(err)
        }
    }

    const handleMail =async (e,id) =>{
        setShow(!show)
         await axios.get(`/users/get/${id}`).then((res)=>{setUser(res.data)})
         console.log(user.email)
        await axios.post("/mail/send",{
            email : user.email
        })
        toast.success('User has been mailed his/her report successfully!');

    }


    return (
        <>
            <Header />

            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>All Test <b>Details</b></h2>
                                </div>
                                
                            </div>
                        </div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th style={{ width: "22%;" }}>Name of Test</th>
                                    <th style={{ width: "22%;" }}>Disease</th>
                                    <th>Amount</th>
                                    <th>Required Sample</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Address</th>
                                    <th>Slot time</th>
                                    <th>Date</th>


                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((obj, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{obj.nameOfTest}</td>
                                        <td>{obj.disease}</td>
                                        <td>{obj.amount}</td>
                                        <td>{obj.sampleReq}</td>
                                        <td>{obj.nameOfPatient}</td>
                                        <td>{obj.age}</td>
                                        <td>{obj.gender}</td>
                                        <td>{obj.address}</td>
                                        <td>{obj.slot}</td>
                                        <td>{obj.date}</td>
                                        {isAdmin && <a onClick={(e)=>{handleDelete(e,obj._id)}}  className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>}
                                        {isAdmin && <Button onClick={(e)=>{handleMail(e,obj.user_id)}}>Mail</Button>}


                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Tests;