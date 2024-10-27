import React from 'react';
import './Rooms.css'; // Make sure to import your CSS file for styling

const Rooms = ({ finalLibrary }) => {
  return (
    <div className="rooms-popup">
      <h2>Available Library Room</h2>
      <p>Room: {finalLibrary}</p>
    </div>
  );
};

export default Rooms;


