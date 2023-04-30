import axios from 'axios';
import React, { useReducer } from 'react';
import { useState, useEffect } from 'react';
import AddTest from './AddTest';
import './testlist.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {ToastContainer,toast} from'react-toastify';
function TestList() {
    const [test, setTest] = useState([])
    const [t, setT] = useState({});
    const [delid, setDelid] = useState("");
    const [deletes,setDeletes] = useState([]);
    const [reducerVal , setReducerval] = useReducer(x => x + 1,0);
    


    const [updateTest, setUpdateTest] = useState({
        nameOfTest: t.nameOfTest,
        sampleReq: t.sampleReq,
        amount: t.amount,
        disease: t.disease
    })


    const url = "/test"
    try {
        useEffect(() => {
            const Fetch = async () => {
                // const tests ;
                await fetch(url).then(res => res.json())
                    //  .then(dt => dt.stringyfy())
                    .then((data) => setTest(data));
                // console.log(tests);
            }
            Fetch();
        }, [reducerVal]) // [ur;] or [] think of it
    } catch (err) {
        console.log(err);
    }
    console.log(test);
    console.log(t);

    const handleDelete = async (e) => {
        e.preventDefault();
        

        try {
           const res =  await axios.delete(`/test/delete/${delid}`)
           toast.success("test has been  deleted successfully");

        }catch(err){
            console.log(err);
        }
        setReducerval();
        
    }

    console.log(updateTest)


    const onchangevalue = (e) => {
        e.preventDefault();
        setUpdateTest({ ...updateTest, [e.target.name]: e.target.value });
    }
    const handleEdit = async (e) => {
        e.preventDefault();

         if(updateTest.nameOfTest.length===0  || updateTest.amount<=0  ||  updateTest.sampleReq.length===0 || updateTest.disease.length===0){
              toast.warning('please enter all the fields ');
        }
        else{
            try {

                const rs = await axios.put(`/test/update/${updateTest._id}`, updateTest)
                console.log(rs)
                toast.success('test has been updated successfully')
                
            }
            catch (err) {
                console.log(err);
            }
            setReducerval()
        }

    }


    console.log(deletes)
    const multipleDelete = (e) =>{
        e.preventDefault();
        try{
            deletes.forEach(async(d) =>{
                await axios.delete(`/test/delete/${d}`).then(console.log("deleted"))
            })
        }
        catch(err){
            console.log(err)
        }
        setReducerval();
    }
    

    return (
        <>
        <Header />

            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h2>Manage <b>Test</b></h2>
                                </div>
                                <div className="col-sm-6">
                                    <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Test</span></a>
                                    <a  onClick={multipleDelete} className="btn btn-danger" data-toggle="modal"><i className="material-icons" >&#xE15C;</i> <span>Delete</span></a>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">

                                        </span>
                                    </th>
                                    <th>Name</th>
                                    <th>Sample</th>
                                    <th>Amount</th>
                                    <th>Disease</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {test.map((obj, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>
                                            <span className="custom-checkbox">
                                                <input type="checkbox" id="checkbox1" name="options[]" value="1" onClick={()=>{setDeletes(oldArr => [...oldArr,obj._id])}} />
                                                <label></label>
                                            </span>
                                        </td>
                                        <td>{obj.nameOfTest}</td>
                                        <td>{obj.sampleReq}</td>
                                        <td>{obj.amount}</td>
                                        <td>{obj.disease}</td>
                                        <td>

                                            <a href='#editEmployeeModal' onClick={() => { setUpdateTest(obj) }} className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a onClick={() =>{setDelid(obj._id)}} href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>

                                </tbody>))}
                        </table>
                        {/* <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#">Previous</a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link">Next</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- Add Modal HTML --> */}
            <AddTest  />
            {/* <!-- Edit Modal HTML --> */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Test</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" required onChange={(e) => onchangevalue(e)} name="nameOfTest" defaultValue={updateTest.nameOfTest} />
                                </div>
                                <div className="form-group">
                                    <label>Required Sample</label>
                                    <input type="text" className="form-control" onChange={(e) => onchangevalue(e)} name="sampleReq" defaultValue={updateTest.sampleReq} required />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" onChange={(e) => onchangevalue(e)} name="amount" defaultValue={updateTest.amount} required />
                                </div>
                                <div className="form-group">
                                    <label>Disease</label>
                                    <input className="form-control" required onChange={(e) => onchangevalue(e)} defaultValue={updateTest.disease} name="disease" ></input>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info"  style={{backgroundColor:"#00D9A5"}}value="Save" onClick={handleEdit}/> {/*handle edit */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <EditTest  props={t}/> */}

            {/* <!-- Delete Modal HTML --> */}
            <div id="deleteEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">
                                <h4 className="modal-title">Delete Test</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete these Records?</p>
                                <p className="text-warning"><small>This action cannot be undone.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit"  className="btn btn-danger"  style={{backgroundColor:"#00D9A5"}} value="Delete" onClick={(event)=>{handleDelete(event)}} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TestList;