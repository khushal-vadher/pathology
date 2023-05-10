import React from "react";
// import {slotPickerComponent} from "@syncfusion/ej2-react-calendars";
// import { Select } from "@material-ui/core";
// import * as CronofyElements from "cronofy-elements";
import "./Slot.css";
const Slot = ({ handleChange }) => {
  const s = ['Select slot', '9 to 10', '10 to 11', '11 to 12', '3 to 4', '4 to 5', '5 to 6', '6 to 7'];
  // let x = document.getElementById("date").value;

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;

  const detail = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    // console.log(x)
    handleChange(e.target.name, e.target.value);

  }
  return (
    <>
      <br></br>
      <div className="app-slot" style={{ fontSize: "16px" }}>
        <div>
          <div>
            <label  >Select Date :</label>
            <input type="date" className="reportDate" name='date' onChange={(e) => { detail(e) }} min={today}></input>
          </div>

          <br></br>
          <br></br>
          <p  >Select Timing </p>
          <p>9:00AM to 12:00PM</p>
          <div className="app-check">
            <input type="radio" className="option-input radio" name="slot" value='9:00 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">9:00 AM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='9:30 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">9:30 AM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='10:00 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">10:00 AM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='10:30 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">10:30 AM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='11:00 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">11:00 AM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='11:30 AM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">11:30 AM
              </label>
            </div>
          </div>
        </div>
        <div>
          <div>
            {/* <p>Timings</p>
             */}
            <br></br>
          </div>
          <p>1:00PM to 5:00PM</p>
          <div className="app-check">
            {/* <input type="radio" className="option-input radio" name="example" /> */}
            {/* <div className="app-border">

        <label className="app-label">1:00 PM
        </label>
      </div> */}
            <input type="radio" className="option-input radio" name="slot" value='1:30 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">1:30 PM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='2:00 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">2:00 PM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='2:30 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">2:30 PM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='3:00 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">3:00 PM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='3:30 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">3:30 PM
              </label>
            </div>
            <input type="radio" className="option-input radio" name="slot" value='4:00 PM' onClick={(e) => { detail(e) }} />
            <div className="app-border">

              <label className="app-label">4:00 PM
              </label>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>

  )
}
export default Slot