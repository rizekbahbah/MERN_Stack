import React, {useState} from 'react';

const TodoList = (props) => {

    const [list, setList] = useState("");
    
    const handleAdd = (e) => {
        e.preventDefault();
        props.lists.push(list);
        props.setCrtList(list);
        console.log(props.lists)
    };

    return (
        <form onSubmit={handleAdd}>
            <h1>Add to List</h1>
            <input type="text" onChange={(e)=> setList(e.target.value)} value={list} />
            <input type="submit" value="Add"/>
        </form>

    );

};

export default TodoList;