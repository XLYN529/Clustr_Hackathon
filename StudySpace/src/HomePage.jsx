import React, { useState } from 'react'; // Import useState from React
import Form from './Form.jsx';
import Modal from './Modal.jsx';
import Catalog from './Catalog.jsx';
import StudyGroup from  './StudyGroup.jsx';
import './HomePage.css'

const HomePage = () => {

  

    const [showForm, setShowForm]  = useState(false)
    const [showCatalog, setCatalog] = useState(false)
    const [showReady, setShow] = useState(true)
    const [subject, setSubject] = useState("")


    const whenClicked= () => {
      setShowForm(true)
      setShow(false)
    }
  
    const closeModal = () => {
      setShowForm(false);
    };
  
    const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    };

    // const handleFilter()=> {

    // }
    const whenClickedJoin = () => {
        setCatalog(true);
        scrollToTop();
        setShow(false)
    }
    var drop;
        drop = <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
                  <option value="" disabled>Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                </select> // Scroll to top when Join button is clicked




   let content;

   if(showReady){
    content = <><h1>Ready To Study?</h1></> 
   } else {
    content= <></>
   }
  
  return (
    <div>
      {content}
      <button className = "hp-button" onClick={whenClicked}>Host a Study Session</button>
      <button className = "hp-button" onClick={whenClickedJoin}>Join A Study Session</button>

      {showForm && (  <Modal onClose={closeModal}><Form onClose={closeModal} /></Modal>
      )}
      {showCatalog &&  (<>{drop} <Catalog Subject={subject} venue={location}/></>)}
    </div>
  )
    
};
export default HomePage