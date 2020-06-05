import React, { useState } from 'react'


const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => setInput(e.target.value)

    return (
        <form onSubmit={(e) => props.submit(input, e)}>
            <input className='task' type="text" name='input' onChange={(e)=>handleChange(e)} placeholder='New Task' />
            <input className='task' type="submit" value='Submit'/>
        </form>
    )
}

export default TodoForm;

