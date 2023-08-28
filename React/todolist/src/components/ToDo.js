import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React , {useState} from 'react';

const Todo = (props) => {
    const [isSubscribed, setIsSubscribed] = useState([]);
    const handleChange = e => {
        let updateList = [...isSubscribed];
        if (e.target.checked) {
            updateList = [...isSubscribed , e.target.value]
        } else {
            updateList.splice(isSubscribed.indexOf(e.target.value) , 1)
        }
        setIsSubscribed(updateList);
    };

    const [deletee, setDeletee] = useState(props.lists);
    const handleDelete = e => {
        setDeletee(props.lists.splice(props.lists.indexOf(e.target.i),1))
    };
    return (
        <>
            <ul>
                {props.lists.map((list, i) =>
                    <div key={i}>
                        <li style={isSubscribed.includes(list) ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{list}</li>
                        <input type='checkbox' value={list} onChange={handleChange} />
                        <button onClick={handleDelete} >Delete</button>
                    </div>
                )}
            </ul>
        </>
    );
}
export default Todo;