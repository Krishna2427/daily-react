import React, { useEffect, useState } from 'react'

const AlbulCard = () => {
    const [album, setAlbum] = useState([]);

    const fetchDataAlbum= async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await res.json();
        setAlbum(data);
    }
    useEffect(()=>{
        fetchDataAlbum()
    }, []);
  return (
    <div className='container'>
          <div className='row'>
               {album.length > 0 ? (
                <>
                   <div className='col-12 mb-4'>
                        <table className='table table-bordered'>
                             <thead>
                                <tr>
                                    {Object.keys(album[0]).map((key)=>(
                                        <th>{key.toUpperCase()}</th>
                                    ))}
                                </tr>
                             </thead>
                             <tbody>
                                {album.map((album)=>(
                                    <tr key={album.id}>
                                         {Object.entries(album).map((value, index)=>(
                                            <td key={index}>{value}</td>
                                         ))}
                                    </tr>
                                ))}
                             </tbody>
                        </table>
                   </div>
                </>
               ):(
                 <p>Loading...</p>
               )}
          </div>
    </div>
  )
}
export default AlbulCard;
