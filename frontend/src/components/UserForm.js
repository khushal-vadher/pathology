import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Instructions from './steps/Instructions';
import UserDetails from './steps/UserDetails';
import AppointmentDetails from './steps/AppointmentDetails';
import Confirm from './steps/Confirm';
import Submit from './steps/Submit';
import useCurrentWidth from '../hooks/useCurrentWidth';
import MobileStepper from './layout/mobile/MobileStepper';

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
    return ['Instructions', 'User details', 'Report Appointment Details', 'Confirm'];
  };
  const steps = getSteps();

  // State variables
  const [wizardValues, setWizardValues] = useState({
    name: '',
    
    address: '',
    email: '',
    nameOfTest: '',
    slot: '',
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
    setWizardValues({
      name: '',
    
      address: '',
      email: '',
      nameOfTest: '',
      slot: '',
      doctor: '',
      doctorEmail: '',
    });
    setActiveStep(0);
  };
  const handleChange = (input) => (e) => {
    setWizardValues({ ...wizardValues, [input]: e.target.value });
  };

  console.log('steps: ' + steps.length);

  let width = useCurrentWidth();
  console.log('Width2: ' + width);

  // Rendering
  return (
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
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 1 && (
                <UserDetails
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 2 && (
                <AppointmentDetails
                  values={wizardValues}
                  handleChange={handleChange}
                />
              )}
              {activeStep === 3 && <Confirm values={wizardValues} />}
              {activeStep === 4 && <Submit />}
            </div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant='contained' color='primary' onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
