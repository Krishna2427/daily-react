import { Component } from "react";

class Employee extends Component{
    constructor(){
        super();
    }
    render(){
        const {emp} = this.props;
        return(
            <div>
                <h1>Class Component</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>eid</th>
                            <th>ename</th>
                            <th>salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emp.map((employee, index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{employee.eid}</td>
                                <td>{employee.ename}</td>
                                <td>{employee.salary}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Employee;