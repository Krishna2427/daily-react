import { useState } from "react"

const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default FormComponent;