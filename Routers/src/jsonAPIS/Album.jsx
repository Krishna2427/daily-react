import React, { useEffect, useState } from 'react'

const Album = () => {
  const [album, setAlbum] = useState([]);

  // const handleAlbum = async()=>{
  //   const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  //   const data =  await res.json();
  //   setAlbum(...Album, data);
  //   console.log(album)
  // }
  useEffect(() => {
    const handleAlbum = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await res.json();
      setAlbum(data);
    }
    handleAlbum();

  }, []);

  // const headers = album.length > 0 ? Object.keys(album[0]) : [];
  return (
    <div>
      <div>
        <h3>album:{album.length}</h3>
        {album.length > 0 && (
          <div>
            <ul>
              <li><strong>{Object.keys(album[0]).join(' | ')}</strong></li>
              {album.map((alb) => (
                <li key={alb.id}>
                  {Object.values(alb).join(' | ')}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Album