import React from "react";
import photo from "../../../images/profile.jpg";

class MyMsg extends React.Component {
    render() {
        return (
            <div className="my-msg">
                <div className="my-msg__main">
                    <div className="my-msg__info">
                        <span className="my-msg__timestamp">1:50 PM</span>
                    </div>
                    <p className="my-msg__message">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Nisi, modi.
                    </p>
                </div>
            </div>
        );
    }
}

export default MyMsg;
