import React, { useState, useEffect } from 'react';

function Albums() {
    const [albums, setAlbums] = useState([]);

    // Fetching albums from JSONPlaceholder API
    const fetchAlbums = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/albums');
        let data = await res.json();
        setAlbums(data);
    }

    useEffect(() => {
        fetchAlbums();
    }, []); // Fetch only once when the component mounts

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Albums</h1>
                </div>
            </div>
            <div className="row">
                {albums.length > 0 ? (
                    albums.map((album) => ( // Slice to display only one card
                        <div className="col-md-4 mb-4" key={album.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Album ID: {album.id}</h5>
                                    <p className="card-text">Title: {album.title}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No albums available</p>
                )}
            </div>
        </div>
    );
}

export default Albums;
