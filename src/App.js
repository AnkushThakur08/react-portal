import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div>Content</div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal open={isOpen} close={() => setIsOpen(false)}>
        This is A Modal
      </Modal>
    </div>
  );
};

export default App;
