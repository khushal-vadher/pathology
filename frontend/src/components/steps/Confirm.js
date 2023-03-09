import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

const Confirm = ({ values }) => {
  const styles = makeStyles((theme) => ({
    list: {
      width: '30%',
      margin: '0 auto',
    },
  }));
  const classes = styles();

  const { name, address, email, nameOfTest, slot, doctor,doctorEmail } = values;

  return (
    <React.Fragment>
      <Title stepTitle='Check your information' />
      <br />
      <List className={classes.list}>
        <ListItem>
          <ListItemText primary='Name' secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Address' secondary={address} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Name of Test' secondary={nameOfTest} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Slot' secondary={slot} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Doctor' secondary={doctor} />
        </ListItem>
        <ListItem>
          <ListItemText primary='Doctor Email' secondary={doctorEmail} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default Confirm;
