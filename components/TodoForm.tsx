import React, {useState} from 'react';
import {FormControl, Input, InputLabel} from '@material-ui/core';

type TodoFormProps = {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && title !== '') {
            props.onAdd(title);
            setTitle('');
        }
    }

    return (
        <FormControl fullWidth className='mt2'>
            <InputLabel htmlFor="title">Add Todos</InputLabel>
            <Input
                id="title"
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
            />
        </FormControl>
    )

}