import React from 'react'

const ApiData = ({ data }) => {
    // Correct the typo 'lenght' to 'length'
    const headers = data.length > 0 ? Object.keys(data[0]) : [];
    // console.log(headers)
    // console.log(data)
    return (
        <div className='container'>
            <h1>{data.length}</h1> {/* Correct the typo here */}
            if ({data === 'photos'}) {
                <p>No photo cards designed</p>
            }else if({data == 'albums'}){
                <div className='d-flex flex-wrap justify-content-between row'>
                    {data.map((item, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                    {headers.map((header, idx) => (
                                        <p key={idx}>
                                            <strong>{header.toUpperCase()}:</strong> {JSON.stringify(item[header])}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default ApiData;
