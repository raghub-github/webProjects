import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Callback = ({ UIcolor }) => {
  const [newColor, setnewColor] = useState("");
  const handleChange = (e) => {
    setnewColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UIcolor(newColor);
  };

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="text">Enter the color</label>
        <input type="text" value={newColor} onChange={handleChange} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Callback;
