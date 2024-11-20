import { useReducer, useEffect } from "react"

const initialTodos = [
    {
        id: 1,
        title: "To do 1",
        complete: false
    },
    {
        id: 2,
        title: "To do 2",
        complete: true
    }
];
const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo, complete
                            : !todo.complete
                    };
                } else {
                    return todo;
                }
            });
        default: return state;
    }

}
export const Todos = () => {
    const [todos, dispatch] =
        useReducer(reducer, initialTodos);
    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    }
    useEffect(() => {
        console.log(todos);
    });
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        {todo.title}
                    </label>
                </div>
            ))}
        </>
    )
} 
export default Todos;
