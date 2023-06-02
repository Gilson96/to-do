import { useRef } from 'react';
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {

    const todotextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const enteredText = todotextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todotextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;