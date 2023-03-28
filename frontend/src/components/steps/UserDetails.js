import React, { useState ,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

import Patientcard from '../Patient/Patientcard'


// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
const UserDetails = ({ handleChange }) => {

  const [patient ,setPatient] = useState([]);

  useEffect(()=>{
    const Fetch  = async ()=>{
      // const tests ;
     await fetch("/patient/").then(res =>res.json())
    //  .then(dt => dt.stringyfy())
     .then(data =>  setPatient(data));
      // console.log(tests);
    }
    Fetch();
  },[])
  console.log(patient);

  const styles = makeStyles((theme) => ({
    textField: {
      margin: '0 auto',
    },
  }));
  const classes = styles();

  const detail=(e,obj)=>{
    handleChange('name',obj.nameOfPatient);
    handleChange('age',obj.age);
    handleChange('gender',obj.gender);
 }

  return (
    
    <>
    {/* <Patientcard patient ={patient}/> */}
    {patient.map((obj, index) => (
        <Card key={index} sx={{ maxWidth: 345 }} style={{ margin: 8 }} onClick={(e)=>{detail(e,obj)}} >
          <CardActionArea >
            <CardContent  >

                <Typography  gutterBottom variant="h5" component="div">
                  <strong>Name : {obj.nameOfPatient} </strong><br />
                  <strong>Age : {obj.age} </strong><br />
                  <strong>Gender : {obj.gender} </strong>

                </Typography>

              
              <Typography variant="body2" color="text.secondary">
                This Description for test.
              </Typography>
              
            </CardContent>
          </CardActionArea>
        </Card>
        

      ))}
      



    </>
  );
};

export default UserDetails;
