import React, { useState ,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

import Patientcard from '../Patient/Patientcard'
const UserDetails = ({ values, handleChange }) => {

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

  return (
    // <React.Fragment>
    //   <Title stepTitle='Enter your user details' />
    //   <br />
    //   <TextField
    //     className={classes.textField}
    //     label='Your Name'
    //     onChange={handleChange('name')}
    //     defaultValue={values.name}
    //   />
    //   <br />
    //   <TextField
    //     className={classes.textField}
    //     label='Your Address'
    //     onChange={handleChange('address')}
    //     defaultValue={values.address}
    //   />
    //   <br />
    //   <TextField
    //     className={classes.textField}
    //     type='email'
    //     label='Your email address'
    //     onChange={handleChange('email')}
    //     defaultValue={values.email}
    //   />
    // </React.Fragment>
    <>
    <Patientcard patient ={patient}/>

    </>
  );
};

export default UserDetails;
