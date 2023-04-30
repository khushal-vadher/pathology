import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AddressCard({ address }) {

  return (
    <>
    <h3>Address</h3>
    <div > 
      {address.map((obj, index) => (
        <Card key={index} sx={{ maxWidth: 345 }} style={{ margin: 8 }} >
          <CardActionArea >
            <CardContent  >
              
                <Typography  gutterBottom variant="h5" component="div">
                  <strong style={{fontSize:"17px"}}> {obj.address} </strong>
                  
                </Typography>           
            </CardContent>
          </CardActionArea>
        </Card>

      ))}
      </div>
    </>
  );
}