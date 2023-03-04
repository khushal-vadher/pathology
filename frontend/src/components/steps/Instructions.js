import React from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';

const Instructions = ({ values, handleChange }) => {
  return (
    <React.Fragment>
      <Title stepTitle='Welcome to Pathology ' />
      <br></br>
      <SubTitle
        stepSubTitle={
          <span>
            Please follow each step of this wizard to enter your personal
            details.
            <br />
            <br />
            This is a sample application. We are not going to catch your data.
          </span>
        }
      />
    </React.Fragment>
  );
};

export default Instructions;
