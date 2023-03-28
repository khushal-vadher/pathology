import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Instructions from './steps/Instructions';
import UserDetails from './steps/UserDetails';
import AddressForm from './steps/AddressForm';
import Confirm from './steps/Confirm';
import Submit from './steps/Submit';
import useCurrentWidth from '../hooks/useCurrentWidth';
import MobileStepper from './layout/mobile/MobileStepper';
import Main from './Home';
import Slot from './steps/Slot';
import Payment from './steps/Payment';
import axios from 'axios';

const UserForm = () => {
  // Styles
  const styles = makeStyles((theme) => ({
    root: {
      width: '60%',
      margin: '0 auto',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      fontSize: '30px',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    grid: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    steps: {
      minHeight: '300px',
    },
  }));
  const classes = styles();

  // Steps
  const [activeStep, setActiveStep] = useState(0);
  const getSteps = () => {
    return ['Select Report', 'User details', 'Address','Slot', 'Check Details','Payment'];
  };
  const steps = getSteps();
 
  // State variables
  const [appointmentdata, setAppointmentdata] = useState({
    // name: '',

    address: '',
    email: '',
    nameOfTest: '',
    slot: '',
    isDocRef: false,
    doctor: '',
    doctorEmail: '',
  });

  // Actions
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setAppointmentdata({
      nameOfTest:'',
      disease:'',
      name:'',
      age:20,
      gender:'',
      address:'',
      time:'',
      date:'',
    });
    setActiveStep(0);
  };
  const handleChange = (name,value) => {
    setAppointmentdata(appointmentdata=>({ ...appointmentdata,[name]: value }));
  };

  console.log('steps: ' + steps.length);

  let width = useCurrentWidth();
  console.log('Width2: ' + width);
  const userToket = localStorage.getItem("token");
  const user  = localStorage.getItem("User");
  console.log("Token :" +userToket)
  console.log(user.email)
  console.log(appointmentdata)



  //save appointment 
  const saveAppointment = async() =>{
    const {nameOfTest,disease,name,age,gender,address,time,date} = appointmentdata;
    const saveData = {
      nameOfTest : nameOfTest,
      name : name,
      slot : time,
      date :date,
      email : user.email
    }
    
    try{
      const res =await axios.post('/appointment/create',saveData)
      console.log(res)

    }catch(err){
      console.log(err)
    }
  }

  // Rendering
  return (
    <>
    <Main />
      <div className={classes.root}>
        {width > 479 ? (
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : (
          <MobileStepper
            activeStep={activeStep}
            variant='progress'
            steps={steps.length + 1}
            position='static'
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </MobileStepper>
        )}
        <div>
          {activeStep === steps.length ? (
            <div>
              <Submit />
              <Button variant='contained' color='primary' onClick={handleReset}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <div className={classes.steps}>
                {activeStep === 0 && (
                  <Instructions
                    // values={appointmentdata}
                    handleChange={handleChange}
                  />
                )}
                {activeStep === 1 && (
                  <UserDetails
                    // values={appointmentdata}
                    handleChange={handleChange}
                  />
                )}
                {activeStep === 2 && (
                  <AddressForm
                    // values={appointmentdata}
                    handleChange={handleChange}
                  />
                )}
                {activeStep === 3 && <Slot  handleChange={handleChange} />}
                {activeStep === 4 && <Confirm values={appointmentdata} />}
                {activeStep === 5 && <Payment values={appointmentdata}  />}
                {activeStep === 6 && <Submit />}
              </div>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                {activeStep !== steps.length - 1 && <Button variant='contained' color='primary' onClick={handleNext} >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>}
                {activeStep === steps.length -1 && <Button variant='contained' color='primary' onClick={saveAppointment} >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserForm;
