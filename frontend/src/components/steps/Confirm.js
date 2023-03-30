import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../layout/Title";

const Confirm = ({ values }) => {
  const styles = makeStyles((theme) => ({
    list: {
      width: "30%",
      margin: "0 auto",
    },
  }));
  const classes = styles();

  const { name, address, email, nameOfTest, slot, doctor, doctorEmail } =
    values;

  return (
    <React.Fragment>
      <Title stepTitle="Check your information" />
      <br />
      <List className={classes.list}>
        <ListItem>
          <ListItemText primary="Name Of Test" secondary={values.nameOfTest} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Disease" secondary={values.disease} />
        </ListItem>
        <ListItem>
          <ListItemText primary="amount" secondary={values.amount} />
        </ListItem>
        <ListItem>
          <ListItemText primary="sampleReq" secondary={values.sampleReq} />
        </ListItem>
        
        <ListItem>
          <ListItemText primary="name" secondary={values.nameOfPatient} />
        </ListItem>
        <ListItem>
          <ListItemText primary="age" secondary={values.age} />
        </ListItem>
        <ListItem>
          <ListItemText primary="gender" secondary={values.gender} />
        </ListItem>
        <ListItem>
          <ListItemText primary="address" secondary={values.address} />
        </ListItem>
        <ListItem>
          <ListItemText primary="time" secondary={values.slot} />
        </ListItem>
        <ListItem>
          <ListItemText primary="date" secondary={values.date} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default Confirm;
