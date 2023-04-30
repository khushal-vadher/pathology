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
import Header from './Header/Header';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer/Footer';
import {ToastContainer,toast} from'react-toastify';

const UserForm = () => {
  const navigator= useNavigate()

  const userid= localStorage.getItem("userid")
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
    user_id :userid,
    nameOfTest:'',
    disease:'',
    age:0,
    gender:'',
    address:'',
    slot:'',
    date:'',
    nameOfPatient :'',
    sampleReq : '',
    amount : 0
  });

  // Actions
  const handleNext = () => {

    if(activeStep === 0){
      if(appointmentdata.nameOfTest.length>0 && appointmentdata.disease.length>0 && appointmentdata.amount>0 && appointmentdata.sampleReq.length>0 ){
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      else{
          toast.warning('please select a report');
      }
    }
    else{
       if(activeStep === 1){
        if(appointmentdata.nameOfPatient.length>0 && appointmentdata.gender.length>0 && appointmentdata.age>0){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else{
            toast.warning('please select a patient');
        }

      }
      else  if(activeStep === 2){
        if(appointmentdata.address.length>0){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else{
            toast.warning('please select a address');
        }
      }
      else  if(activeStep === 3){
        if(appointmentdata.slot.length>0 && appointmentdata.date.length>0 ){
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        else{
            toast.warning('please select a time and date');
        }
      }
      else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
    
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setAppointmentdata({
    
      user_id :userid,
      nameOfTest:'',
      disease:'',
      age:20,
      gender:'',
      address:'',
      slot:'',
      date:'',
      nameOfPatient :'',
      sampleReq : '',
      amount : 500

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
  console.log("Token :" +userToket)
  console.log(appointmentdata)



  //save appointment 
  const saveAppointment = async() =>{
    const {user_id,nameOfTest,disease,amount,sampleReq,nameOfPatient, age,gender,address,slot,date} = appointmentdata;
    const saveData = {
      nameOfTest : nameOfTest,
      amount :amount,
      user_id : userid,
      disease : disease,
      sampleReq : sampleReq ,
      nameOfPatient : nameOfPatient ,
      age : age,
      gender : gender,
      address : address ,
      slot : slot ,
      date : date
    }
    
    try{
      const res =await axios.post('/appointment/create',saveData)
      console.log(res.data)
      toast.success('you have succesfully registered appointment');
      navigator("/")

    }catch(err){
      console.log(err)
    }
  }

  // Rendering
  return (
    <>
      <Header /><br /><br />
      <div className={classes.root}>
        {width > 479 ? (
          <Stepper activeStep={activeStep}  alternativeLabel>
            {steps.map((label) => (
              <Step key={label} >
                <StepLabel  >{label}</StepLabel>
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
                {activeStep !== steps.length - 1 && <Button variant='contained' style={{backgroundColor:"#00D9A5"}} onClick={handleNext} >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>}
                {activeStep === steps.length -1 && <Button variant='contained' style={{backgroundColor:"#00D9A5"}} onClick={saveAppointment} >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>}
              </div>
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default UserForm;
