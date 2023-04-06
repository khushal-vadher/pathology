import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";


export default function Patientcard({ patient ,reducer}) {
  const nav = useNavigate()
  const handleBack = () =>{


  }
  return (
    <>
    <h3>Patient</h3>
      {patient.map((obj, index) => (
        <Card  style={{alignContent : "center"}} key={index} sx={{ maxWidth: 345 }}  >
          <CardActionArea >
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                <strong>Name : {obj.nameOfPatient} </strong><br />
                <strong>Age : {obj.age} </strong><br />
                <strong>Gender : {obj.gender} </strong>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>


      ))}
<Button variant='contained' color='primary' onClick={handleBack} >Back</Button>

    </>
  );
}