import React from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';

const Submit = () => {
  return (
    <React.Fragment>
      <Title stepTitle='Submit success' />
      <SubTitle
        stepSubTitle={
          <span>
            <br />
            Take a breathe ;-) We didn't stored, tracked or sent your data.
            <br />
          </span>
        }
      />
    </React.Fragment>
  );
};

export default Submit;
