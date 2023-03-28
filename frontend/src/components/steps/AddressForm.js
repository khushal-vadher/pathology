import React from 'react';
import { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';
import Address from '../Address/AddressCard';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// const options = [
//   "2D Echo",
//   "4D Scan",
//   "ACTH (Adreno Corticotropic Hormone) Test",
//   "Adenosine Deaminase Test",
//   "Adenosine Deaminase Test",
//   "Bleeding / Clotting Time Test",
//   "Bleeding / Clotting Time Test",
//   "Hemoglobin (Hb) Test",
//   "Iron Test",
//   "Malaria (Malarial Parasite) Test",
//   "Plasma Lactate (Lactic Acid) Test",
//   "Protein Test",
//   "Sonography (Ultrasound / USG)",
// ];

// const slot = ["8 to 9","9 to 10","10 to 11","3 to 4","4 to 5","5 to 6","6 to 7"];

const AddressForm= ({  handleChange }) => {


  
  const [address ,setAddress] = useState([]);

  useEffect(()=>{
    const Fetch  = async ()=>{
      // const tests ;
     await fetch("/patient/").then(res =>res.json())
    //  .then(dt => dt.stringyfy())
     .then(data =>  setAddress(data));
      // console.log(tests);
    }
    Fetch();
  },[])
  console.log(address);


  const styles = makeStyles((theme) => ({
    textField: {
      margin: '0 auto',
    },
  }));
  // const classes = styles();

  const detail=(e,obj)=>{
    handleChange('address',obj.address[0]);
 }

  return (
    
    // <>
    // <Address address = {address} />
    // </>

    <>
      {address.map((obj, index) => (
        <Card key={index}  sx={{ maxWidth: 345 }} style={{ margin: 8 }}   onClick={(e)=>{detail(e,obj)} }>
          <CardActionArea >
            <CardContent >
              
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
};

export default AddressForm;
