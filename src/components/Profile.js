import {useState} from "react";
import axios from "axios";
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Profile = (props) => {

    let profileId = props.id;

    let defaultProfile = {
        name: 'Sign In',
        address: '1600 Pennsylvania Ave',
        email: 'johnDoe@example.com',
        mobNo: '555-555-5555',
        roles: 'temp role'
    }
    const [currentProfile, setCurrentProfile] = useState(defaultProfile);
    const [signedIn, setSignedIn] = useState(false);
    const baseUrl = `http://localhost:8081/rest/profile/${profileId}`;


    function getUserInfo(profileId) {
        axios.get(baseUrl)
            .then((response) => {
                setCurrentProfile(response.data);
                setSignedIn(true);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleSignIn = () => {

    }

    const handleSignOut = () => {

    }


    return (
        <div className="profileContainer">
            <div className="profileInfo">
                <span className="accountIcon">{signedIn ? <button name="signOutBtn" disabled={signedIn}><AccountBoxIcon/></button> :
                    <button name="signInBtn" disabled={!signedIn}><AccountBoxOutlinedIcon/></button>}</span>
                {signedIn ? `Hi ${currentProfile.name}` : 'Please sign In'}

            </div>
        </div>
    )
};

export default Profile;