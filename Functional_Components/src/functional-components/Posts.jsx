import { useState, useEffect } from "react";

const Posts = () => {
    const [data, setData] = useState([]);

    const fetchData = async (val) => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/${val}`);
        let data = await res.json();
        setData(await data);
    };
    // useEffect(() => {
    //     fetchData();
    // }, []);

    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    const selectedChangeHandler = (event) => {
        fetchData(event.target.value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Sample Projecct</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <label htmlFor="selectOption">Select Option</label>
                    <select onChange={selectedChangeHandler}>
                        <option value="k">select one option</option>
                        <option value="posts">posts</option>
                        <option value="photos">photos</option>
                        <option value="albums">albums</option>
                        <option value="comments">comments</option>
                        <option value="users">users</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h1>{data.length}</h1>
                </div>
                {data.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                {headers.map((header, index) =>
                                    <th key={index}>{header.toUpperCase()}</th>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    {headers.map((header, index) => (
                                        <td key={index}>{getNestedValue(row[header])}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    "No data"
                )}
            </div>
            
        </div>
    );
};

export default Posts;

//recursive function to extract values from deeply nested objects

const getNestedValue = (obj) => {
    if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).map(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                //Recursively go deeper if the value is also an object
                return `${key}: {$ {getNested(Value)}}`;
            }
            return `${key}: ${value}`;
        }).join('. ');
    }
    return obj;
};