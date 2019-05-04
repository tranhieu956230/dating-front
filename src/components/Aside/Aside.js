import React from "react";
import ChatList from "./ChatList/ChatList";
import "./Aside.css";
import userImage from "../../images/profile.jpg";

class Aside extends React.Component {
    render() {
        return (
            <section className="aside">
                <div className="profile">
                    <figure className="profile__figure">
                        <img
                            src={userImage}
                            alt=""
                            className="profile__image"
                        />
                        <figcaption className="profile__name">
                            Trần Đức Hiếu
                        </figcaption>
                    </figure>
                </div>
                <ChatList />
            </section>
        );
    }
}

export default Aside;
