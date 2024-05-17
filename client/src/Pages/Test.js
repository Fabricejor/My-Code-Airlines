import React, { useState } from 'react';

const Test = () => {
  const [destinations] = useState(["Dakar -Senegal", "Paris-France", "New York - Etat Unis"]);

  return (
    <div className="form-item">
      <label>From</label>
      <input list="destinations" type="text" placeholder="Airport start" name="airport_start"/>
      <datalist id="destinations">
        {destinations.map((destination, index) => 
          <option key={index} value={destination} />
        )}
      </datalist>
    </div>
  );
}

export default Test;
