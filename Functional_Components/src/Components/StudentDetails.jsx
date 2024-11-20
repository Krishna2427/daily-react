import { useState } from "react";

const StudentDetails = () => {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    class: ''
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState(""); // Success/Error message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: name === "age" ? Number(value) : value, // Handle age as a number
    });
  };

  // Form validations
  const validations = () => {
    const newErrors = {};
    if (!student.name) newErrors.name = 'Name is required';
    if (!student.age) newErrors.age = 'Age is required';
    if (!student.class) newErrors.class = 'Class is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validations();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch('http://localhost:5000/addStudent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(student)
        });

        if (response.ok) {
          setSubmitMessage('Student added successfully!');
          setStudent({
            name: '',
            age: '',
            class: ''
          });
          setErrors({});
        } else {
          setSubmitMessage('Failed to add student. Try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitMessage('Error submitting the form. Check the server.');
      }
    }
  };

  return (
    <div className="student-form">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Student Name:</label>
          <input 
            type="text" 
            name="name" 
            value={student.name} 
            onChange={handleChange} 
          />
          {errors.name && <span className="errors">{errors.name}</span>}
        </div>
        <div>
          <label htmlFor="age">Student Age:</label>
          <input 
            type="number" 
            name="age" 
            value={student.age} 
            onChange={handleChange} 
          />
          {errors.age && <span className="errors">{errors.age}</span>}
        </div>
        <div>
          <label htmlFor="class">Student Class:</label>
          <input 
            type="text" 
            name="class" 
            value={student.class} 
            onChange={handleChange} 
          />
          {errors.class && <span className="errors">{errors.class}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitMessage && <p>{submitMessage}</p>} {/* Display submission message */}
    </div>
  );
};

export default StudentDetails;
