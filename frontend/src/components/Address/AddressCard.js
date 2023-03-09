import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AddressCard({ address }) {

  return (
    <>
      {address.map((obj, index) => (
        <Card sx={{ maxWidth: 345 }} style={{ margin: 8 }} >
          <CardActionArea >
            <CardContent key={index} >
              {Object.entries(obj).map(([key, value]) => (
                <Typography key={`${key}`} gutterBottom variant="h5" component="div">
                  <strong>{key}: </strong>
                  {value}
                </Typography>

              ))}
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