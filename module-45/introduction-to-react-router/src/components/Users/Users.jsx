import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();

    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set --> set state

    return (
        <div>
            <h1>Our Users: {users.length}</h1>
            <h3>Our users very fantastic</h3>

           <div className="users">
           {
                users.map(user => <User key={user.id} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;