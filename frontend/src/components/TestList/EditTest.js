import React, { useEffect, useState } from 'react';

function EditTest(t) {
    const [updateTest,setUpdateTest] = useState({
        nameOfTest : t.nameOfTest,
        amount: t.amount
    })

    console.log(updateTest)
   
    
    const onchnagevalue = (e) => {
        setUpdateTest({ ...updateTest, [e.target.name]: e.target.value });
    }
    const handleEdit = async (event, obj) => {
        event.preventDefault();
        console.log(obj);

        
        const { _id, nameOfTest, amount, sampleReq, disease } = obj;
        console.log(_id)

        // const res2 = await axios.put(`/test/update/${_id}`,)
        const res = await fetch(
            `/test/update/${_id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nameOfTest,
                    amount,
                    sampleReq,
                    disease
                }),
            },
            []
        );
        fetch();


    }
    return (
        <div>
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
                                    <input type="text" className="form-control" required onChange={(e) => onchnagevalue(e)}  name="nameOfTest" />
                                </div>
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" onChange={(e) => onchnagevalue(e)} name="amount" required />
                                </div>
                                <div className="form-group">
                                    <label>Disease</label>
                                    <input className="form-control" required onChange={(e) => onchnagevalue(e)} name="disease" ></input>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" required />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" /> {/*handle edit */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTest;