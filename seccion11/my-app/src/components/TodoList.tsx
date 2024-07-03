import React from "react";
import { List, Icon, Button } from "semantic-ui-react";

interface TodoListProps {
    items : {id : string; text : string}[];
    onDeleteTodo : (id : string) => void
}

const TodoList : React.FC<TodoListProps> = props => {
    return (
        <List>
            {props.items.map(todo => (
                <List.Item key={todo.id}>
                    <Button onClick={props.onDeleteTodo.bind(null, todo.id)} circular size="mini" icon>
                        <Icon color="red" name="cancel"></Icon>
                    </Button>
                    {todo.text} 
                </List.Item>
            ))}
        </List>
    )
}

export default TodoList;