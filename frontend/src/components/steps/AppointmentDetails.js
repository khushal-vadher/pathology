import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../layout/Title';

const options = [
  "2D Echo",
  "4D Scan",
  "ACTH (Adreno Corticotropic Hormone) Test",
  "Adenosine Deaminase Test",
  "Adenosine Deaminase Test",
  "Bleeding / Clotting Time Test",
  "Bleeding / Clotting Time Test",
  "Hemoglobin (Hb) Test",
  "Iron Test",
  "Malaria (Malarial Parasite) Test",
  "Plasma Lactate (Lactic Acid) Test",
  "Protein Test",
  "Sonography (Ultrasound / USG)",
];

const slot = ["8 to 9","9 to 10","10 to 11","3 to 4","4 to 5","5 to 6","6 to 7"];

const PersonalDetails = ({ values, handleChange }) => {
  const styles = makeStyles((theme) => ({
    textField: {
      margin: '0 auto',
    },
  }));
  const classes = styles();

  return (
    <React.Fragment>
      <Title stepTitle='Enter your Appointment Details' />
      <TextField
        className={classes.textField}
        label='Your Doctor Name '
        onChange={handleChange('doctor')}
        defaultValue={values.doctor}
      />
      <br/>
      <TextField
        className={classes.textField}
        label='Your Doctor Eamil'
        onChange={handleChange('doctorEmail')}
        defaultValue={values.doctorEmail}
      />

       <br></br>
       <br></br>

      <div style={{display:"flex" ,marginLeft:"315px",width:"100px"}} className="element">
              {/* <label htmlfor="typeofreport">Type Of Report </label> */}
              <select placeholder="Type Of Report"
                
                value={values.nameOfTest}
                onChange={handleChange('nameOfTest')}
                // name="typeofreport"
                // id="typeofreport"
              >
                <option>Select type of Report</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
            <br></br>
      <div style={{display:"flex" ,marginLeft:"315px", width:"100px"}} className="element">
              {/* <label htmlfor="typeofreport">Type Of Report </label> */}
              <select 
                value={values.slot}
                onChange={handleChange('slot')}
                // name="typeofreport"
                // id="typeofreport"
              >
                <option>Select Slot time</option>
                {slot.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
 

      
     
    </React.Fragment>
  );
};

export default PersonalDetails;
