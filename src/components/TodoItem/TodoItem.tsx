import React, { FC } from 'react';
import { Checkbox } from 'antd';

import './style.scss';
import { ITodoItem } from '../../types/types';
interface ITodoItemProps {
    item: ITodoItem;
    onChange: (item: ITodoItem) => void;
}

const TodoItem: FC<ITodoItemProps> = ({ item, onChange }) => {
    const handleChange = () => {
        onChange(item);
    };

    const isDoneStyle = item.isDone ? 'todo-item_is-done' : '';

    return (
        <div className={`todo-item ${isDoneStyle}`} onClick={handleChange}>
            <p className={`todo-item__title ${isDoneStyle}`}>{item.title}</p>
            <Checkbox checked={item.isDone} />
        </div>
    );
};

export default TodoItem;
