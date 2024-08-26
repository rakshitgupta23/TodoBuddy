import React, { useState } from 'react'

function TodoInput(props) {
    const { handleAddTodos ,todoValue,setTodoValue} = props
    return (
        <header>
            <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} type="text" placeholder='Enter text...' />
            <button onClick={(e) => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}

export default TodoInput