const Emp = ({emp}) => {
    return (
        <>
            <td className="border border-gray-300 p-2">{emp.eid}</td>
            <td className="border border-gray-300 p-2">{emp.ename}</td>
            <td className="border border-gray-300 p-2">{emp.salary}</td>
        </>
    )
}
export default Emp