import { useState } from "react";

function Todos() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [submittedData, setSubmittedData] = useState([]); // Stores multiple name entries

    // Handles input changes for first name
    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    // Handles input changes for last name
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Add new name entry to submittedData array
        setSubmittedData([...submittedData, { firstName, lastName }]);

        // Clear the input fields after submission
        setFirstName('');
        setLastName('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    placeholder="Enter your first name"
                />
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    placeholder="Enter your last name"
                />
                <button type="submit">Submit</button>
            </form>

            {/* Display the data in table format */}
            {submittedData.length > 0 && (
                <table border="1" style={{ marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Todos;
