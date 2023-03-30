import React from "react";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../layout/Title";
import Address from "../Address/AddressCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@material-ui/core";
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
const AddressForm = ({ handleChange }) => {
  const [address, setAddress] = useState([]);
  const [clickaddress, setClickAdress] = useState("");
  const [show, setShow] = useState(false);
  //add address to database
  const addNewAddress = async (e) => {
    e.preventDefault();
  };
  //update the address with given id
  const updateAddress = (e) => {
    e.preventDefault();
  };
  const deleteAddress = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();
  useEffect(() => {
    const Fetch = async () => {
      // const tests ;
      await fetch("/patient/")
        .then((res) => res.json())
        //  .then(dt => dt.stringyfy())
        .then((data) => setAddress(data));
      // console.log(tests);
    };
    Fetch();
  }, []);
  console.log(address);

  const styles = makeStyles((theme) => ({
    textField: {
      margin: "0 auto",
    },
  }));
  // const classes = styles();

  const detail = (e, obj) => {
    handleChange("address", obj.address[0]);
    setClickAdress(obj.address[0]);
  };

  return (
    <>
      <br></br>
      {!show && <spam style={{ fontSize: "20px" }}>Add a new Address </spam>}
      {!show && (
        <Button
          color="secondary"
          onClick={(e) => setShow(!show)}
          startIcon={<AddIcon />}
          style={{ marginLeft: "200px" }}
        >
          Add
        </Button>
      )}
      <br></br>

      <br></br>
      {address.map((obj, index) => (
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
                <strong> {obj.address[0]} </strong>
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
      {show && (
        <div>
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Add New Address</h4>
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
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={clickaddress}
                  onChange={(e) => setClickAdress(e.target.value)}
                  name="nameOfTest"
                  onClick={(event) => {
                    updateAddress(event);
                  }}
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <Button style={{ display: 'flex', justifyContent: 'left' }}
                color="secondary"
                onClick={(e) => addNewAddress(e)}
                startIcon={<AddIcon />}
              >
                Add
              </Button>
              <Button
                variant="outlined"
                onClick={(e) => updateAddress(e)}
                startIcon={<UpdateIcon />}
              >
                Update
              </Button>

              <Button
                variant="outlined"
                onClick={(e) => deleteAddress(e)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AddressForm;
