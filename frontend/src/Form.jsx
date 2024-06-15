import {useState} from 'react'
import { Form, Button } from 'react-bootstrap';
const MyForm = ({onChange, onSubmit}) =>{

    const [ newName, setNewName ] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameChange = (event) =>{
      setNewName(event.target.value);
    }
    const handleNumberChange = (event) =>{
      setNewNumber(event.target.value);
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newPerson = {name: newName, phoneNumber: newNumber};
        onSubmit(newPerson);
        setNewName('');
    }

    return(
          <Form onSubmit={handleSubmit} className="justify-content-between align-items-center text-bg-secondary p-3">
            <h2>Add a new contact</h2>
            <Form.Group controlId="formName">
          <Form.Label className="mt-4 px-4 py-2">Name</Form.Label >
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={newName}
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formNumber">
          <Form.Label className="mt-4 px-4 py-2">Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4 px-4 py-2">
          Add
        </Button>
        </Form>

    )
}

export default MyForm;