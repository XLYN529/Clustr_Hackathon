import React,{useState} from 'react'
import './StudyGroup.css'
import Catalog  from  './Catalog'

const StudyGroup = ({userName,userSubject,location,time,uniqueid}) => {

    const [joined, setJoin] = useState(false);
    const join = () => {
        if(!joined){
          setJoin(true);
        } 
    }

    
  return (
    <div className={`containerForGroups ${joined ? 'joined' : ''}`}>
    <p className="userName">{userName}</p>
    <p className="userSubject">Subject: {userSubject}</p>
    <p className="location">Location: {location}</p>
    <p className="time">Time: {time}</p>
    <button className="joinButton" onClick={join}>
        {joined ? 'Joined' : 'Join'}
    </button>
  </div>
  )
}

export default StudyGroup
