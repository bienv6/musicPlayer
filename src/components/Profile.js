import {useEffect, useState} from "react";
import axios from "axios";

const Profile = (props) => {
    console.log(`Signed In user id: ${props.id}`)

    let profileId = props.id;

    let defaultProfile = {
        name: 'Sign In',
        address: '1600 Pennsylvania Ave',
        email: 'johnDoe@example.com',
        mobNo: '555-555-5555',
        roles: 'temp role'
    }
    const [currentProfile, setCurrentProfile] = useState(defaultProfile);
    const baseUrl = `http://localhost:8081/rest/profile/${profileId}`;


    useEffect(() => {
        axios.get(baseUrl)
            .then((response) => {
                setCurrentProfile(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [props.id, baseUrl]);


    return (
        <div className="profileContainer">
            <div className="profileIcon"><p>insert profile pic here</p></div>
            <div className="profileInfo">
                <ul>
                    <li>${currentProfile.name}</li>
                    <li>${currentProfile.email}</li>
                    <li>${currentProfile.mobNo}</li>
                    <li>${currentProfile.address}</li>
                </ul>
            </div>
        </div>
    )
};

export default Profile;