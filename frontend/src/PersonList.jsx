import PersonDetails from "./PersonDetails";
import {Button, ListGroup} from 'react-bootstrap';
const PersonList = ({persons, onDelete}) => {
    console.log(persons);

    
    if(persons.length === 0){
        return (
            <h2>There isnt no numbers yet.</h2>
        )
    }
    return(
        <ListGroup>
            {persons.map(person =>
                <ListGroup.Item key={person.id} className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                    <PersonDetails name={person.name} number={person.phoneNumber} />
                    <Button variant="danger" className="mt-2 mt-md-0" onClick={() => onDelete(person.id)}>Delete</Button>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}
export default PersonList;