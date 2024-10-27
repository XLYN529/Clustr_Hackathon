import React from 'react'
import './Modal.css'
import Rooms from './Rooms.jsx'
const Modal = ({ onClose, children }) => {


  return (
    
    <div className="modal-overlay">
    <div className="modal-box">
      <button onClick={onClose} className="modal-close-button">x</button>
      {children}
    </div>
  </div>
    
  )
}

export default Modal
