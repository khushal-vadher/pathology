import React, { useEffect, useState } from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';
import useFetch from '../../hooks/useFetch';

import Card from '../Testcard/Testcard';
import Testcard from '../Testcard/Testcard';

function Instructions() {
  // const {test,loading ,error} = useFetch("/test/");
  const url = "/test/";
  // console.log(test);
  const [tests, setTests] = useState([]);
  try {
    useEffect(() => {
      const Fetch = async () => {
        // const tests ;
        await fetch(url).then(res => res.json())
          //  .then(dt => dt.stringyfy())
          .then((data) => setTests(data));
        // console.log(tests);
      }
      Fetch();
    }, [url])
  } catch (err) {
    console.log(err);
  }
  console.log(tests);


  // const d = tests[0];
  // const d = tests.t[1]._id;
  // console.log(d)
  // const data = JSON.parse()
  //console.log(test.data)

  return (
    <>
      <Title stepTitle='Welcome to Pathology ' />
      <br></br>
      <Testcard tests={tests} />
      


    </>
  );
}


// const Instructions = ({ values, handleChange }) => {

//   const [test,loading , error] = useFetch("/test/");
//   console.log(test.data)
//   return (
//     <React.Fragment>
//       <Title stepTitle='Welcome to Pathology ' />
//       <br></br>
//       <SubTitle
//         stepSubTitle={
//           <span>
//             Please follow each step of this wizard to enter your personal
//             details.
//             <br />
//             <br />
//             This is a sample application. We are not going to catch your data.
//           </span>
//         }
//       />
//     </React.Fragment>
//   );
// };

export default Instructions;
