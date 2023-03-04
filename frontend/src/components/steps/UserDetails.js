import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

const UserDetails = ({ values, handleChange }) => {
  const styles = makeStyles((theme) => ({
    textField: {
      margin: '0 auto',
    },
  }));
  const classes = styles();

  return (
    <React.Fragment>
      <Title stepTitle='Enter your user details' />
      <br />
      <TextField
        className={classes.textField}
        label='Your Name'
        onChange={handleChange('name')}
        defaultValue={values.name}
      />
      <br />
      <TextField
        className={classes.textField}
        label='Your Address'
        onChange={handleChange('address')}
        defaultValue={values.address}
      />
      <br />
      <TextField
        className={classes.textField}
        type='email'
        label='Your email address'
        onChange={handleChange('email')}
        defaultValue={values.email}
      />
    </React.Fragment>
  );
};

export default UserDetails;
