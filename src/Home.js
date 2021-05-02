import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First React app', body: 'loreum ipsum ...', author: 'Satyam', id: 0 },
        { title: 'Welcome guide to React', body: 'loreum ipsum ...', author: 'Satyam', id: 1 },
        { title: 'Features of React', body: 'loreum ipsum ...', author: 'Satyam', id: 2 },
        { title: 'Implementation of React', body: 'loreum ipsum ...', author: 'Satyam', id: 3 }
    ])

    return (
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;