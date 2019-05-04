import React from "react";
import Chat from "./Chat/Chat";
import Aside from "./Aside/Aside";
import "./App.css";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Aside />
                <Chat />
            </div>
        );
    }
}

export default App;
