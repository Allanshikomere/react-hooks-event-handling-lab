// Code Keypad Component Here

import React from "react";

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      {/* Render an input with type 'password' and attach the event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;