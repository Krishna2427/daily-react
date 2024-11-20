import { useEffect, useState } from "react"

const Todos = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodo(data))
            .then(error => console.error("Errors fetching data", error),
            )
    })
    return (
        <div className="container">
            <h3>Todos Data</h3>
            {todo.map((td, index) => (
                <table className="table-secondary">
                    <tr key={index + 1}>
                        <thead>
                            <th>userID</th>
                            <th>id</th>
                            <th>title</th>
                            <th>completed</th>
                        </thead>
                        <tbody>
                            <td>{td.userId}</td>
                            <td>{td.id}</td>
                            <td>{td.title}</td>
                            <td>{td.completed}</td>
                        </tbody>

                    </tr>
                </table>
            ))}
        </div>
    )
}
export default Todos;