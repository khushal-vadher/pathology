import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';

import {ToastContainer,toast} from'react-toastify';

const AddressForm = ({ handleChange }) => {
  const userid = localStorage.getItem("userid");
  const [address, setAddress] = useState([]);
  const [clickaddress, setClickAdress] = useState({
    address :"",
    user_id : userid,
  });
  const [show, setShow] = useState(false);
  const [addressId,setAddressId] = useState("")
  const [reducer,setReducer] = useReducer(x=>x+1,0);
  
  //add address to database
  const addNewAddress = async (e) => {
    e.preventDefault();
    if(clickaddress.address.length===0 ){
      toast.warning('please enter a addrss');
    }
    else{
      const saveObj = {
        user_id : userid,
        address : clickaddress.address
      }
      try{
        await axios.post("/address/create",saveObj).then()
        setShow(!show)
        setReducer()
        toast.success('Address has been added successfully!');
  
      }catch(err){
        console.log(err);
      }
    }

  };
  const onchanged = (e) =>{
    setClickAdress((clickaddress)=>({
      ...clickaddress,
      [e.target.name] : e.target.value
    }))
    console.log(clickaddress)
  }
  //update the address with given id
  const updateAddress =async (e) => {
    e.preventDefault();
    if(clickaddress.address.length===0){
      toast.warning('please eneter a address');
    }
    else{
      try{
        await axios.put(`/address/update/${clickaddress._id}`,clickaddress)
        setShow(!show)
        setReducer()
        toast.success('Address has been updated successfully!');
        
      }catch(err){
        console.log(err)
      } 
    }

  };
  const deleteAddress =async (e) => {
    e.preventDefault();
    try{
      await axios.delete(`/address/delete/${clickaddress._id}`)
      setShow(!show)
      setReducer()
			toast.success('Address has been deleted successfully!');


    }catch(err){
      console.log(err)
    }

  };

  const navigate = useNavigate();
  useEffect(() => {
    const Fetch = async () => {
      try{
        await axios.post(`/address/get`,{userid}).then((res)=>{setAddress(res.data)})
      }catch(err){
        console.log(err)
      }
    };
    Fetch();
  }, [reducer]);
  console.log(address);

  const styles = makeStyles((theme) => ({
    textField: {
      margin: "0 auto",
    },
  }));
  // const classes = styles();

  const detail = (e, obj) => {
    handleChange("address", obj.address);
    setClickAdress(obj);
    // setAddressId(obj._id);
  };

  return (
    <>
      <br></br>
      {!show && <spam style={{ fontSize: "20px" }}> Address </spam>}
      {!show && (
        <Button
          color="secondary"
          onClick={(e) => setShow(!show)}
          
          style={{ marginLeft: "200px",color:"#00D9A5" }}
        >
          Add Upadte Delete
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
                <strong> {obj.address} </strong>
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
              <h4 className="modal-title">Address</h4>
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
                  value={clickaddress.address}
                  onChange={(e) =>{onchanged(e)}}
                  name="address"
                  
                  required
                />
              </div>
            </div>
            <div className="modal-footer">
              <Button style={{ display: 'flex', justifyContent: 'left' }}
                variant="outlined"
                onClick={(e) => addNewAddress(e)}
                startIcon={<AddIcon />}
              >
                Add
              </Button><span></span>
              <Button
                variant="outlined"
                onClick={(e) => updateAddress(e)}
                startIcon={<UpdateIcon />}
              >
                Update
              </Button>
                  <span></span>
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
