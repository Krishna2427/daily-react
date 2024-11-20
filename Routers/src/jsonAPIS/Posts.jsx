import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const handlePosts = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        };

        handlePosts();
    }, []); // Add empty dependency array to run only once on mount

    const headers = posts.length > 0 ? Object.keys(posts[0]) : [];

    return (
        <div>
            <h3>Posts Data: {posts.length}</h3>
            <div>
                {posts.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => ( // Map over posts to create rows
                                <tr key={post.id}>
                                    {headers.map((header) => (
                                        <td key={header}>{post[header]}</td> // Access post data
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Posts;