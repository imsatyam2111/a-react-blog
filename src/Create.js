import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Satyam")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('blog added');
            setIsPending(false);
            // history.go(-1)
            history.push('/');
        }) 

    }

    return (
        <div className="create">
            <h2>Add a Blog!</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                    type="text"
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value)}
                    required 
                />
                <label>Blog body:</label>
                <textarea
                    rows="8"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value)}
                >
                    <option value="Satyam">Satyam</option>
                    <option value="Saurabh">Saurabh</option>
                </select>
                { !isPending ? <button>Add Post</button>:<button disabled>Adding Blog...</button> }
            </form>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </div>
    );
}
 
export default Create;