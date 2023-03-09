import React from 'react';

function TestList({ tests }) {
  return (
    <div>
      {tests.map((obj, index) => (
        <div key={index}>
          {Object.entries(obj).map(([key, value]) => (
            <p key={key}>
              <strong>{key}: </strong>
              {value}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TestList;
