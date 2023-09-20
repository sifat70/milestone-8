import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    const {id, title, body} = post;
    const navigate = useNavigate();


    console.log(postId);
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Post Id: {id}</h1>
            <p>{title}</p>
            <h5>{body}</h5>
            <button onClick={handleGoBack}>Back</button>
        </div>
    );
};

export default PostDetails;