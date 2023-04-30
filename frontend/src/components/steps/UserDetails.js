import React, { useState, useEffect, useReducer } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../layout/Title";
import Patientcard from "../Patient/Patientcard";

// import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

import {ToastContainer,toast} from'react-toastify';

const UserDetails = ({ handleChange }) => {
  var userid = localStorage.getItem("userid")
  // userid = JSON.parse(userid)
  const [newPatient, setNewpatient] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({
    nameOfPatient: "",
    user_id:userid,
    age: Number,
    gender: ""
  });
  const [show, setShow] = useState(false);
  const [reducer,setReducer] = useReducer(x=>x+1,0);
  const onchanged = (e) => {
    setSelectedPatient((selectedPatient) => ({
      ...selectedPatient,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewPatient = async (e) => {
    e.preventDefault();
    if(!(selectedPatient.age>0 && selectedPatient.nameOfPatient.length>0 &&  selectedPatient.gender.length>0)){
          toast.warning('all the fields are required'); 
    }
    else{
      try {
        await axios.post("/patient/create", selectedPatient).then((res) => { setSelectedPatient(res.data) })
        setShow(!show)
        setReducer()
        toast.success('Patient has been added successfully!');
      
  
      } catch (err) {
        console.log(err)
      }
    }

    
  };
  const updatePatient = async (e) => {
    e.preventDefault();
    if(!(selectedPatient.age>0 && selectedPatient.nameOfPatient.length>0 &&  selectedPatient.gender.length>0)){
      toast.warning('all the fields are required');
}
else{
  try {
    await axios.put(`/patient/update/${selectedPatient._id}`, selectedPatient).then((res) => { setSelectedPatient(res.data) })
    setShow(!show)

    setReducer()

    toast.success('Patient has been updated successfully!');

  } catch (err) {
    console.log(err)
  }
}

    
  };
  const deletePatient = async (e) => {
    e.preventDefault();
    if(selectedPatient.nameOfPatient.length===0){
      toast.warning('please select a patient');
}
else{
  try{
    await axios.delete(`/patient/delete/${selectedPatient._id}`).then(()=>{setSelectedPatient({})})
    setShow(!show)

    setReducer()
    toast.success('Patient has been deleted successfully!');

  }catch(err){
    console.log(err)
  }
}


  };
  useEffect(() => {
    const Fetch = async () => {
      
      console.log(userid);
      try {
        await axios.post(`/patient/get`, { userid }).then((res) => { setNewpatient(res.data) })
      } catch (err) {
        console.log(err)
      }
    };
    Fetch();
  }, [reducer]);
  console.log("Patient")
  console.log(newPatient);

  const styles = makeStyles((theme) => ({
    textField: {
      margin: "0 auto",
    },
  }));
  const classes = styles();
  
  const detail = (e, obj) => {
    handleChange("nameOfPatient", obj.nameOfPatient); //set the main useState of appoinetment
    handleChange("age", obj.age);
    handleChange("gender", obj.gender);
    setSelectedPatient(obj);
    // handlePatientId(obj._id) //try by creating useState for patientid
  };

  return (
    <>  
      <br></br>
      {/* <Patientcard patient ={patient}/> */}
      {
        !show && <spam style={{ fontSize: '20px' }}>Do you want to add new patient details ? </spam>
      }
      {!show && <Button color="secondary" onClick={(e) => setShow(!show)}  style={{ marginLeft: '200px', color: '#3bb19b' }}>
        Add Update Delete
      </Button>
      }
      <br></br>
      {newPatient.map((obj, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345 }}
          style={{ margin: 8 }}
          onClick={(e) => {
            detail(e, obj);
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <strong>Name : {obj.nameOfPatient} </strong>
                <br />
                <strong>Age : {obj.age} </strong>
                <br />
                <strong>Gender : {obj.gender} </strong>
              </Typography>


            </CardContent>
          </CardActionArea>
        </Card>
      ))}

      <br></br>



      <br></br>

      {show && <div>
        <form>
          <div className="modal-header">
            <h4 className="modal-title">Patient</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              // aria-hidden="true"
              onClick={(e) => setShow(!show)}
              
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                defaultValue={selectedPatient.nameOfPatient}
                onChange={(e) => onchanged(e)}
                name="nameOfPatient"
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                defaultValue={selectedPatient.age}
                onChange={(e) => onchanged(e)}
                name="age"
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                defaultValue={selectedPatient.gender}
                onChange={(e) => onchanged(e)}
                name="gender"
                required
              />
            </div>

            {/* <p>{selectedPatient._id}</p> */}
          </div>
          <div className="modal-footer">
            <Button
              variant="outlined"
              onClick={(e) => addNewPatient(e)}
              startIcon={<AddIcon />}
              style={{ marginLeft: "200px" }}
            >
              Add
            </Button><span></span>
            <Button
              variant="outlined"
              onClick={(e) => updatePatient(e)}
              startIcon={<UpdateIcon />}
            >
              Update
            </Button><span></span>

            <Button
              variant="outlined"
              onClick={(e) => deletePatient(e)}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </div>
        </form>
      </div>
      }
    </>
  );
};

export default UserDetails;