import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Patientcard({ patient }) {
  return (
    <>
    <h3>Patient</h3>
      {patient.map((obj, index) => (
        <Card   key={index} sx={{ maxWidth: 345 }} style={{ margin: 8 }} >
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

    </>
  );
}