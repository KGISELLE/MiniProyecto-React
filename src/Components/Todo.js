import { useState } from "react";

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {

  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  const deleteHandler = () => {
    // console.log('clicked');
    // console.log(props.text);
    setModalIsOpen(true);
  }
  
  const closeModalHandler = () => {
    setModalIsOpen(false);
  }

  return(
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        {/* Agregando evento onClick attibute */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      { modalIsOpen && <Backdrop onCancel={ closeModalHandler } />}
      
    </div>
  );
}

export default Todo;