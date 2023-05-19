import {useContext, useEffect} from "react";
import SignInModal from "./SignInModal";
import {UserContext} from "./AudioPlayer";

const Profile = () => {

    const [loggedIn, setLoggedIn] = useContext(UserContext);
    const profile = loggedIn["profile"];
    //const [currentProfile, setCurrentProfile] = useState(loggedIn);

    useEffect(() => {
        console.log(loggedIn["signedIn"]);
    }, []);


    return (
        <div className="profileContainer">
            <div className="profileInfo">
                <SignInModal/>
                {loggedIn.signedIn ? <h3 className="signedInUser"><p> Hi {profile.name}</p></h3> :
                    <h3 className="signedInUser"><p> Sign In </p></h3>}


            </div>
        </div>
    )
};

export default Profile;