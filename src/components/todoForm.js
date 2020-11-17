function TodoForm(props){

    let state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
    }

    function handleInput(e){
        const {value, name} = e.target;
        /* let chage ={
            [name]:value
        }
        state = chage; */
        state.[name] = value;
        console.log(state);
    }

    function handleSubmit(e){
        e.preventDefault();
        props.onAddTodo(state);
        console.log( props.onAddTodo)
        console.log('sending the data...', state);
    }

    return(
        <div className="card">
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        name="responsible"
                        className="form-control"
                        placeholder="Responsible"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={handleInput}
                    />
                </div>
                <div className="form-group">
                    <select
                        name="priority"
                        className="form-control"
                        onChange={handleInput}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default TodoForm;