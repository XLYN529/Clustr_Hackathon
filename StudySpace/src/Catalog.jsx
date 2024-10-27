import React,{useState,useEffect} from 'react'
import {app} from  './firebase'
import { getDatabase, ref, onValue } from "firebase/database";
import StudyGroup from './StudyGroup'
import './Catalog.css'

const Catalog = ({Subject,venue}) => {
const [studentData,setStudentData] = useState(null);
   
useEffect(()=>{
    const db = getDatabase(app);
    const startCountRef = ref(db,"Users");
    onValue(startCountRef, (snapshot) => {
      const data = snapshot.val();
      setStudentData(data);
    })
},[])

if(!studentData){
  return  <div>Loading...</div>
}

return(
  <div className="catalog">
  <h2>Available Study Groups</h2>
  <div className="scrollableContainer">
    {Object.entries(studentData).map(([userKey, values]) => {
      console.log(values);
      return (
        (Subject === values.userSubject && venue === values.location) ? (
          <StudyGroup
            key={userKey}
            userName={values.userName}
            userSubject={values.userSubject}
            location={values.userCampus}
            time={values.userTime}
            uniqueid={values.uniqueId}
          />
        ) : null
      );
    })}
  </div>
</div>
)
}

export default Catalog
