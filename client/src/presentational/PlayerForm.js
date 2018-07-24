import React from 'react'; 


const PlayerForm = ({player= {},changeValue, formAction}) => (
    <form id="todoform" onSubmit={(e)=>formAction(e)}>
        <input type="text" className="form-control" value={player}/>
        <input type="text" className="form-control" value={value}/>
        <input type="text" className="form-control" value={value}/>
        <input type="text" className="form-control" value={value}/>
        <input type="text" className="form-control" value={value}/>

        <input type="submit" className="btn btn-primary" value="Add todo" /> 
    </form>
)

export default PlayerForm;