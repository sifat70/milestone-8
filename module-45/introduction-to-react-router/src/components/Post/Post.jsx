import { Link, useNavigate } from "react-router-dom";

 

const Post = ({ post }) => {
    const { id, title } = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }


    const handleShowDetail = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post id: {id}</h4>
            <p>Post Title: {title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Click me</button></Link>
            <button onClick={handleShowDetail}>Show Details post</button>
        </div>
    );
};

export default Post;