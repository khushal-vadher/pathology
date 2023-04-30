import React, { useEffect, useState } from 'react';
import Title from '../layout/Title';
import SubTitle from '../layout/Subtitle';
import useFetch from '../../hooks/useFetch';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function Instructions({ handleChange }) {
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

  const detail = (e, obj) => {
    handleChange('nameOfTest', obj.nameOfTest);
    handleChange('disease', obj.disease);
    handleChange('amount', obj.amount);
    handleChange('sampleReq', obj.sampleReq);
  }

  return (
    <>
    <br></br>
     
      <Title stepTitle='Welcome to Pathology '/>
      <br></br>
      {/* <Testcard tests={tests} /> */}
      {tests.map((obj, index) => (
        <Card key={index} sx={{ maxWidth: 430 }} style={{ margin: 8 }} onClick={(e) => { detail(e, obj) }}>

          <CardActionArea>
            <CardContent >

              <Typography gutterBottom variant="h5" component="div" >
                <strong>Name of test: {obj.nameOfTest} </strong><br />
                <strong>Disease :</strong>
                <strong> {obj.disease} </strong><br />
                <strong>Price :</strong>
                <strong> {obj.amount} </strong><br />
                <strong>Required Test Sample :</strong>
                <strong> {obj.sampleReq} </strong>
              </Typography>



            </CardContent>
          </CardActionArea>
        </Card>
 
      ))}
    <br></br>
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
