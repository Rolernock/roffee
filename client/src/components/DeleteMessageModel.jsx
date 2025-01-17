import { Button, Modal } from 'react-bootstrap'

export default function DeleteMessageModel({
  show,
  handleConfirm,
  handleClose
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this message?</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleConfirm} variant='danger'>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
