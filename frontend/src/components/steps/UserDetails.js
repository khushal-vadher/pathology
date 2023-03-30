import React, { useState, useEffect } from "react";
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
const UserDetails = ({ handleChange }) => {
  const [patient, setPatient] = useState([]);
  const [newPatient, setNewpatient] = useState({});
  const [show, setShow] = useState(false);
  const onchanged = (e) => {
    setNewpatient((newPatient) => ({
      ...newPatient,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewPatient = async (e) => {
    e.preventDefault();
  };
  const updatePatient = async (e) => {
    e.preventDefault();
  };
  const deletePatient = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const Fetch = async () => {
      // const tests ;
      await fetch("/patient/")
        .then((res) => res.json())
        //  .then(dt => dt.stringyfy())
        .then((data) => setPatient(data));
      // console.log(tests);
    };
    Fetch();
  }, []);
  console.log(patient);

  const styles = makeStyles((theme) => ({
    textField: {
      margin: "0 auto",
    },
  }));
  const classes = styles();

  const detail = (e, obj) => {
    handleChange("name", obj.nameOfPatient);
    handleChange("age", obj.age);
    handleChange("gender", obj.gender);
    setNewpatient(obj);
  };

  return (
    <>
      <br></br>
      {/* <Patientcard patient ={patient}/> */}
      {
        !show && <spam style={{ fontSize: '20px' }}>If you are new Patient ? </spam>
      }
      {!show && <Button color="secondary" onClick={(e) => setShow(!show)} startIcon={<AddIcon />} style={{ marginLeft: '200px' }}>
        Add
      </Button>
      }
      <br></br>
      {patient.map((obj, index) => (
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

              <Typography variant="body2" color="text.secondary">
                This Description for test.
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
            <h4 className="modal-title">Add New Patient</h4>
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
                value={newPatient.nameOfPatient}
                onchange={(e) => onchanged(e)}
                name="nameOfPatient"
                required
              />
            </div>

            <div className="form-group">
              <label>Age</label>
              <input
                type="text"
                className="form-control"
                value={newPatient.age}
                onChange={(e) => onchanged(e)}
                name="nameOfTest"
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                className="form-control"
                value={newPatient.gender}
                onChange={(e) => onchanged(e)}
                name="nameOfTest"
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              onClick={(e) => addNewPatient(e)}
              startIcon={<AddIcon />}
              style={{ marginLeft: "200px" }}
            >
              Add
            </Button>
            <Button
              variant="outlined"
              onClick={(e) => updatePatient(e)}
              startIcon={<UpdateIcon />}
            >
              Update
            </Button>

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
