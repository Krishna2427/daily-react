import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const handlePhotos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await res.json();
      setPhotos(data);
    }
    handlePhotos();
    console.log(photos);

  }, []);
  return (
    <div>
      <h3>Photos :{photos.length}</h3>
      {/* <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
          {photos.length > 0 && photos.map((photo)=>(
            <div key={photo.id} style={{width:'400px', height:'400px'}}>
                 <img src={photo.ulr}
                      alt={photo.title}
                 />
            </div>
          ))}
      </div> */}
      <div className='container'>
          <div className="card grid grid-cols-1 md:grid-cols-3 gap-4" style={{ "width": "18rem" }}>
            {photos.length > 0 && photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.url} className="card-img-top" alt={photo.title} />
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Photos