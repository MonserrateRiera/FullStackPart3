import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
      
        <Form onSubmit={handleSubmit}>
          <h2>Add a new contact</h2>
          <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={handleNameChange}
        />
      </Form.Group>
      <Form.Group controlId="formNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter number"
          value={newNumber}
          onChange={handleNumberChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
      </Form>
    )
}

export default MyForm;