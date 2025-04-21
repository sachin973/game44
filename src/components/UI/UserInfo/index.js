import React, { useState, useCallback, useMemo } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


const UserFormModal = ({show,setShow,isSaved,setIsSaved,username,setUsername,handleShow,handleClose}) => {
  const [mobile, setMobile] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'mobile') setMobile(value);
  }, []);

  const handleSave = useCallback(() => {
    if (username.trim()) {
      setIsSaved(true);
      handleClose();
    }
  }, [username, handleClose]);

  const formComponent = useMemo(() => (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          name="mobile"
          value={mobile}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  ), [username, mobile, handleChange]);

  return (
    <>
      {/* {!isSaved ? (
        <Button variant="primary" onClick={handleShow}>
          Open Form
        </Button>
      ) : (
        <h5 className="text-success">{username}</h5>
      )} */}

      <Modal className='custom-modals' show={show} onHide={handleClose} centered style={{backgroundColor:"#fff"}}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{formComponent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default UserFormModal;
