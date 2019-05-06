import React from "react";
import Action from "./Action/Action";
import DashBoard from "./DashBoard/DashBoard";
import "./Chat.css";

class Chat extends React.Component {
    render() {
        return (
            <section className="chat">
                <Action />
                <DashBoard />
            </section>
        );
    }
}

export default Chat;
