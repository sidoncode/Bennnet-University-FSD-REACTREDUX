import React from "react";
import PropTypes from "prop-types";
import todos from "./Todos";

const TodosList = ({todos,onTodoClick}) => (

    <ul>

        {todos.map(todos,index) => (

            <Todo key = {index} {...todos} onclick={onTodoClick(index)} />
        ))
    </ul>
    
    TodosList.prototype = {

        todos.PropTypes.arrayOf(
            PropTypes.shape({
                id:PropType.number.isRequired,
                completed:PropTypes.bool.isRequired,
                text:PropTypes.string.isRequired
            }).isRequired
        ).isRequired
    }
    onTodoClick.prototype.func.isRequired


)
export default TodosList;