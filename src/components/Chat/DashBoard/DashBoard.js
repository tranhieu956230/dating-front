import React from "react";
import OtherMsg from "./OtherMsg";
import MyMsg from "./MyMsg";
import ChatInput from "./ChatInput";
import "./DashBoard.css";

class DashBoard extends React.Component {
    render() {
        return (
            <section className="dashboard">
                <OtherMsg />
                <MyMsg />
                <MyMsg />
                <MyMsg />
                <MyMsg />
                <OtherMsg />
                <OtherMsg />
                <OtherMsg />
                <OtherMsg />
                <MyMsg />
                <OtherMsg />

                <ChatInput />
            </section>
        );
    }
}

export default DashBoard;
