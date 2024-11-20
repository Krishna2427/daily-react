import React, { useEffect, useState } from 'react'
import ApiData from './ApiData'

const AllApis = () => {
    const [data, setData] = useState([]);
    const [optionApi, setOptionApi] = useState('');

    // Function to fetch data
    const fetchData = async (api) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${api}`);
        const data = await res.json();
        setData(data);
    };

    // Fetch data whenever optionApi changes
    useEffect(() => {
        if (optionApi) {  // Only fetch data if optionApi is set
            fetchData(optionApi);
        }
    }, [optionApi]);

    const handleSelectedChange = (e) => {
        setOptionApi(e.target.value);
    };

    return (
        <div>
            <h1>AllApis</h1>
            <div>
                <label htmlFor="data-type">Select API: </label>
                <select id='data-type' onChange={handleSelectedChange} value={optionApi}>
                    <option value="">Choose APIs</option>
                    <option value="photos">Photos</option>
                    <option value="albums">Albums</option>
                    <option value="users">Users</option>
                    <option value="comments">Comments</option>
                </select>
            </div>

            {data.length > 0 ? (
                <ApiData data={data} />
            ) : (
                <p>Please select an API to fetch data</p>
            )}
        </div>
    )
}

export default AllApis;
