import React from "react";
import ChatList from "./ChatList/ChatList";
import "./Aside.css";
import userImage from "../../images/profile.jpg";

class Aside extends React.Component {
    render() {
        let userInfo = this.props.userInfo;
        return (
            <section className="aside">
                <div className="profile">{getProfile(userInfo)}</div>
                <ChatList />
            </section>
        );
    }
}

function getProfile(userInfo) {
    if (userInfo) {
        return (
            <figure className="profile__figure">
                <img
                    src={userInfo.profile_picture}
                    alt="profile picture"
                    className="profile__image"
                />
                <figcaption className="profile__name">
                    {userInfo.name}
                </figcaption>
            </figure>
        );
    }
    return (
        <figure className="profile__figure">
            <img
                src={userImage}
                alt="profile picture"
                className="profile__image"
            />
            <figcaption className="profile__name">&nbsp;</figcaption>
        </figure>
    );
}

export default Aside;
