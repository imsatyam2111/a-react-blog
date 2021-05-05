import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First React app', body: 'loreum ipsum ...', author: 'Satyam', id: 0 },
        { title: 'Welcome guide to React', body: 'loreum ipsum ...', author: 'Saurabh', id: 1 },
        { title: 'Features of React', body: 'loreum ipsum ...', author: 'Satyam', id: 2 },
        { title: 'Implementation of React', body: 'loreum ipsum ...', author: 'Saurabh', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }    

    useEffect(() => {
        console.log('use Effec ran');
        console.log(blogs);
    }, []);

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs!" handleDelete={ handleDelete } />
            <BlogList blogs={ blogs.filter((blog) => blog.author === 'Satyam' ) } title="Satyam's Blogs" /> 
        </div>
    );
}
 
export default Home;