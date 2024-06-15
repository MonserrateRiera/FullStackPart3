const PersonDetails = ({name, number}) =>{

    return (
        <div className="mb-2">

                <strong className="me-2">Name:</strong> 
                <span className="me-3">{name}</span>
                <strong className="me-2">Number:</strong> 
                <span>{number}</span>

        </div>
    )
}

export default PersonDetails;