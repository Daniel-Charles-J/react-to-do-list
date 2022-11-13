import React,{ useState} from 'react';
import {useRef} from "react";
import { BsPlusLg } from 'react-icons/bs';
import './AddTask.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal } from 'react-bootstrap';

const AddTask = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [task,Settask] = useState("");
  const inputRef = useRef();

  const addTask=()=>{
    if(task.trim() === ''){
      alert("Please enter a task") 
  } else {
     props.addTask({
       todoTask:task,
       isCompleted:false
     })
  }
  console.log(inputRef);
 inputRef.current.value=""
  }

  return (
    <div className="addTodo" >
      <div  onClick={handleShow}>
      <BsPlusLg />
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add todoTask</Modal.Title>
        </Modal.Header>
        <Modal.Body><input type='text' placeholder = 'Add Task . . .' value = {task} ref={inputRef} onChange = {event => Settask(event.target.value)} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <div  onClick={handleClose} >
          <Button variant="primary" onClick={addTask}>
            Add
          </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask