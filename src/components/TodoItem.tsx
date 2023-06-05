import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text: string, onRemoveTodo: () => void}> = (props) => {
    return <li  className={classes.item}>{props.text} <span className={classes.close} onClick={props.onRemoveTodo}>x</span></li>
}

export default TodoItem;
