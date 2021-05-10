const BlogList = ( { blogs, title } ) => {
    // Alternative to passing props in the parenthesis and destructuring it later
    // We can Destructure props object within the parenthesis like
    // const blogs = props.blogs is similar to ( { blogs } )
    
    // const blogs = props.blogs;
    // const blogs = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;