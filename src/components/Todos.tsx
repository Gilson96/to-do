import React from 'react'
import Todo from '../todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'

// generic type feature to use props
const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
    return (

        <ul className={classes.todos}>
            {props.items.map(item =>
                <TodoItem 
                    key={item.id} 
                    text={item.text}
                    // .bind allows to pre-configure a function for future execution
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            )}
        </ul>
    )
}

export default Todos; 
