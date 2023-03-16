import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Testcard({ tests }) {

  return (
    <>
      {tests.map((obj, index) => (
        <Card sx={{ maxWidth: 345 }} style={{ margin: 8 }} >
          
          <CardActionArea >
            <CardContent  key={index}>
             
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Name of test: {obj.nameOfTest} </strong><br />
                  <strong>Disease :</strong>
                 <strong> {obj.disease[0]} </strong><br />
                 <strong> {obj.disease[1]} </strong>


                  
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
}