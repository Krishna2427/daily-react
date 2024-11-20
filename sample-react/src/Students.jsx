import Student from "./components/Student";

const Students = ({students}) => {
    
    if(!students || students.length === 0){
        return <p>No Student Avalable</p>
    }
    // totalMarks = students.reduce((m,i)=> { m + i })
    return (
        <div className="text-center">
            <h1>Student Info</h1>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Sno</th>
                        <th className="border border-gray-300 p-2">Sname</th>
                        <th className="border border-gray-300 p-2">Age</th>
                        <th className="border border-gray-300 p-2">Marks</th>
                        <th className="border border-gray-300 p-2">Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index} className=" hover:bg-gray-400">
                            <td className="border border-gray-300 p-2">{index + 1}</td>
                            <Student student ={student}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Students;