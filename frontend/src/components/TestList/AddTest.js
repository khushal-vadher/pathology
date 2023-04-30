import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer,toast} from'react-toastify';
function AddTest() {
    const [addTest, setAddTest] = useState({
        nameOfTest: '',
        amount: 0,
        sampleReq: "",
        disease: ""
    })
    const nav = useNavigate()
    const [submit,setSubmit] = useState(0);
    const [reducer,setReducer]  = useReducer(x => x + 1 ,0)

    useEffect(()=>{
        nav("/test")
    },[submit])
    const onchnagevalue = (e) => {
        setAddTest({ ...addTest, [e.target.name]: e.target.value });
    }
    const handleAdd = async (e) => {
        e.preventDefault();
        // if(submit == 0){
        //     setSubmit(1)
        //     console.log(submit)
            
        // }
        if(addTest.nameOfTest.length===0  || addTest.amount===0  ||  addTest.sampleReq.length===0 || addTest.disease.length===0){
              toast.warning('please enter all the fields ');
        }
        else {

            console.log(addTest)
        try {

            const res = await axios.post('/test/create', addTest)
        }
        catch (err) {
            console.log(err);
        }
        setReducer();
        }
        

        // setTimeout(10000);
    }
    return (
        <div>

            <div id="addEmployeeModal" className="modal fade" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Add Test</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">

                                <div className="form-group">
                                    <label>Name Of Test</label>
                                    <input type="text" className="form-control" onChange={(e) => onchnagevalue(e)} name="nameOfTest" required />
                                </div>
                                <div className="form-group">
                                    <label>Required Sample</label>
                                    <input type="text" className="form-control" onChange={(e) => onchnagevalue(e)} name="sampleReq" required />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" onChange={(e) => onchnagevalue(e)} name="amount" required />
                                    {/* onChange={(e) => onchnagevalue(e)} name="amount" */}
                                </div>
                                <div className="form-group">
                                    <label>Disease</label>
                                    <input type="text" className="form-control" onChange={(e) => onchnagevalue(e)} name="disease" required ></input>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-success"  style={{backgroundColor:"#00D9A5"}}value="Add" onClick={(event) =>{handleAdd(event)}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTest;