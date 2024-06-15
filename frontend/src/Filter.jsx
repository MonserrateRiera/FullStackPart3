

const Filter = ({onChange}) =>{
    const changeHandler = (event) =>{
        //setFilter(event.target.value);
        onChange(event.target.value);
    }


    return (
        <div className="my-3">
        <label className="form-label">Filter shown with: </label>
        <input type="text" onChange={changeHandler} className="form-control" />
        </div>
        
        
    )
}

export default Filter;