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
        <Card key={index} sx={{ maxWidth: 345 }} style={{ margin: 8 }} >
          <CardActionArea >
            <CardContent  >
              
                <Typography  gutterBottom variant="h5" component="div">
                  <strong> {obj.address[0]} </strong>
                  
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