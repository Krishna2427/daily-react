import Emp from "./Emp";

const Employees = ({employee})=>{
    return(
        <div>
            <h1>Employees List</h1>
            <table className="border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Sno</th>
                        <th className="border border-gray-300 p-2">eid</th>
                        <th className="border border-gray-300 p-2">EName</th>
                        <th className="border border-gray-300 p-2">salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((emp, index)=>(
                        <tr key={index}>
                            <td className="border border-gray-300 p-2">{index + 1}</td>
                            <Emp emp={emp}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Employees;