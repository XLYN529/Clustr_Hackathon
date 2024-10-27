import React from 'react'
import {useState, useEffect} from 'react'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import {app} from './firebase'
import './Form.css'
import {v4  as uuidv4} from 'uuid';
import Rooms  from './Rooms.jsx'


const Form = ({onClose}) => {
 
   const [subject, setSubject] = useState('')
   const[time, setTime] = useState('')
   const[date, setDate] = useState('')
   const[name, setName] = useState('')
   const[campus, setCampus] = useState('')
  const [ num, setNum] = useState(1)
  const [showRooms, setShowRooms] = useState(false);
  const [finalLib,setFinalLib] = useState('')
  const uniqueID = uuidv4();
  var isChecked ="false";

  
   

   const whenSubmit = (e) => {
    e.preventDefault(); 
    const db = getDatabase(app);
    const reference = ref(db, 'Users/' +name); // Adjust your path here

    set(reference, {
        userName: name,
        userSubject: subject,
        userTime: time,
        userNumPeople: num,
        userCalender: date,
        userCampus: campus,
        userRoom: null,
        userStatus: isChecked,
        finalLib: '',
        uniqueId: uniqueID
    }).then(() => {
        console.log('Data written successfully!');
    }).catch((error) => {
        console.error('Error writing data: ', error);
    });
    console.log(isChecked);
    const finalStatus = isChecked;

   

    
   
   
    
    onClose();
    
   }

   useEffect(() => {
    const db = getDatabase(app);
    const reference = ref(db, 'Users/' + name); 
  
    const checkStatus = () => {
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log("Current status:", data.userStatus);
          if (data.userStatus === "true") {
            setFinalLib(data.finalLib); 
            setShowRooms(true);
            clearInterval(intervalId); 
          }
        } else {
          console.log("Data not found for user:", name);
        }
      });
    };
  
    const timer = setTimeout(checkStatus, 2000);
  
    
    const intervalId = setInterval(checkStatus, 5000);
  
    
    return () => {
      clearTimeout(timer);
      clearInterval(intervalId);
    };
  }, [name]);
  if (showRooms) {
    console.log("Rooms component should be displayed now.");
  }

    return (
    <>
        <div className = "form-container">
        <h2>Host a Study Session</h2>
        <form onSubmit={whenSubmit}>

        <label>
        
        <input type = "text" value={name} placeholder='Name' onChange = {(e) => setName(e.target.value)} required/>
        </label>
        
        <label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="" disabled>Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
        </select>
        </label>


        <div className="input-row">
            <input type="time" step = "3600" value={time} placeholder="Enter Time" onChange={(e) => setTime(e.target.value)} required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>

        <label>
        <select value={campus} onChange={(e) => setCampus(e.target.value)} required>
            <option value="" disabled> Select Preferred Campus</option>
            <option value="CA">College Avenue</option>
            <option value="CD">Cook & Douglouss</option>
            <option value="L">Livingston </option>
            <option value="B">Busch</option>
        </select>
        </label>


        <label>
        <input type = "number" value={num} placeholder = "How many people are joining?" onChange = {(e) => setNum(e.target.value)} required/>
        </label>

        <button type="submit">Create Session</button>
        </form>


        </div>

        {showRooms && <div><Rooms finalLibrary={finalLib}/></div> } {/* Display Rooms component if showRooms is true */}
       
    </>
    )
}

export default Form