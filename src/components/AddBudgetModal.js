import {Form, Modal, Button} from 'react-bootstrap';
import {useRef} from 'react';
import {useBudgets} from '../context/BudgetContext';

export default function AddBudgetModal({show, handleClose}) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  
  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value)
    })
    handleClose();
  }

  return (
    <div>
        <Modal show={show} onHide={handleClose}>
          <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control 
                        ref={nameRef} 
                        type='text' 
                        required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>Maximum Spending</Form.Label>
                      <Form.Control 
                        ref={maxRef}
                        type='number' 
                        required 
                        min={0} 
                        step={0.01} />
                  </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                  <div className='d-flex justify-content-end'>
                      <Button variant='primary' type='submit'>Add</Button>
                  </div>
              </Modal.Footer>
          </Form>
        </Modal>
    </div>
  )
}