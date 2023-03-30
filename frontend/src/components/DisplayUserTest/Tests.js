
import axios from "axios";
import React, { useEffect, useState } from "react";
import './tests.css';
const Tests = () => {

    const [reports, setReports] = useState([])
    const userid = localStorage.getItem("userid")


    useEffect(() => {

        const fetchReport = async () => {
            try {
                await axios.post(`/appointment/get`,{userid}).then((res) => setReports(res.data))

            } catch (err) {
                console.log(err)
            }
        }
        fetchReport();
    }, [])

    return (
        <>

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

                                    </tr>
                                ))
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Tests;