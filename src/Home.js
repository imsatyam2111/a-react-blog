import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            { error && <div> { error } </div>}
            { isPending && <div>Loading...</div>}
            {/* And operator is used because react will evaluate it and as blogs is null it will 
                leave the next LOC and this how we can avoid the error and as soon the
                api is fetched and blogs got its value the data will get rendered.
            */}
            {blogs && <BlogList blogs={ blogs } title="All Blogs!" />}
            {blogs &&<BlogList blogs={ blogs.filter((blog) => blog.author === 'Satyam' ) } title="Satyam's Blogs" />} 
        </div>
    );
}
 
export default Home;