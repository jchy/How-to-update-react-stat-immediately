import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [open, setOpen] = useState(false);
  let length = 0;
  const handleOpen = () => {
    if (length === 0) {
      setOpen((state) => !state);
    } else {
      setOpen(true);
    }
    length++;
  };
  return (
    <>
      {open && <div> I am visible </div>}
      <button onClick={handleOpen}> change visibility </button>
    </>
  );
};
export default App;
