import React, { useState, useEffect, useReducer } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Patientcard from "../Patient/Patientcard";
import AddressCard from "../Address/AddressCard";
import { ToastContainer, toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";

function Displayuser() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [isPatient, setIsPatient] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [patient, setPatient] = useState([]);
  const [address, setAddress] = useState([]);
  const [reducer, setReducer] = useReducer((x) => x + 1, 0);
  const [show1, setShow] = useState(false);
  const nav = useNavigate();
  const fetch = async () => {
    try {
      // axios.get("/users/getall").then((response)=>{setUsers(response.data);});
      await axios.get("/users/getall").then((res) => {
        setUsers(res.data);
        setSearch(res.data)
      });
      // console.log(users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
    console.log(users);
  }, [reducer]);

  const handlecust = () => {
    setReducer();
  };

  const handleDeleteUser = async (e, id) => {
    e.preventDefault();
    // const obj = {
    //     id : id
    // }
    try {
      await axios.post(`/patient/deletemany`, { id }).then((res) => {
        console.log("Patient Deleted");
      });
      await axios.post(`/address/deletemany`, { id }).then((res) => {
        console.log("address Deleted");
      });
      await axios.post(`/appointment/deletemany`, { id }).then((res) => {
        console.log("appoiontment Deleted");
      });
      await axios.delete(`/users/delete/${id}`).then((res) => {
        console.log("user Deleted");
      });
      setReducer();
      console.log(
        "User deleted and corrosponding patient , address and appointmnt are also deleted"
      );
      toast.success("User has been deleted successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePatient = (e, userid) => {
    e.preventDefault();
    console.log(userid);

    try {
      axios.post("/patient/get", { userid }).then((res) => {
        setPatient(res.data);
      });
      console.log(patient);
      setIsPatient(true);
      setIsAddress(false);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddress = (e, userid) => {
    e.preventDefault();
    console.log(userid);

    const get = async () => {
      try {
        await axios.post("/address/get", { userid }).then((res) => {
          setAddress(res.data);
        });
        console.log(address);
        setIsAddress(true);
        setIsPatient(false);
        setShow(true);
      } catch (err) {
        console.log(err);
      }
    };
    get();
  };

  const handleFilter = (e) =>{
    e.preventDefault();
    if(e.target.value == ''){
      setUsers(search);
    }else{
      const searchResult = search.filter(item => item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()));
      setUsers(searchResult)
    }
    setSearchFilter(e.target.value)
  }
  return (
    <>
      <Header />
      {
        <div className="container-lg">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>
                      All Test <b>Details</b>
                    </h2>
                  </div>
                  <div className="col-sm-6">
                    <div className="search-box">
                      <div className="input-group">
                        <input type="text" id="search" className="form-control" placeholder="Search User" value={searchFilter} onInput={(e)=>handleFilter(e)} />
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
                    <th>Name</th>

                    <th>Email</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((obj, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {obj.firstName}
                        <p></p>
                        {obj.lastName}
                      </td>
                      <td>{obj.email}</td>
                      <td>
                        <Button
                          onClick={(e) => {
                            handlePatient(e, obj._id);
                          }}
                        >
                          Patient
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={(e) => {
                            handleAddress(e, obj._id);
                          }}
                        >
                          Address
                        </Button>
                      </td>
                      <td>
                        <Button
                          onClick={(e) => {
                            handleDeleteUser(e, obj._id);
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>{isPatient && <Patientcard patient={patient} />}</div>
          <div>{isAddress && <AddressCard address={address} />}</div>
        </div>
      }
      <br></br>
      <Footer />
    </>
  );
}

export default Displayuser;
