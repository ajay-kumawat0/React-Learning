import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    const { user } = useContext(UserContext);
    if(!user) return <div>Please login</div>

    return <h1>Welcome {user.username}</h1>
}

export default Profile;
