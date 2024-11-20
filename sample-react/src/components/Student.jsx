const Student = ({ student }) => {
    console.log(student)
    if(!student) return null;
    return (
        <>
            <td className="border border-gray-300 p-2">{student.name}</td>
            <td className="border border-gray-300 p-2">{student.age}</td>
            <td className="border border-gray-300 p-2">{student.marks.join(',')}</td>
            <td className="border border-gray-300 p-2">
                {student.marks.reduce((total, mark) => total + mark)}
            </td>
        </>
    )
}
export default Student;