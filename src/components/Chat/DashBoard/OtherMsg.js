import React from "react";
import photo from "../../../images/profile.jpg";

class OtherMsg extends React.Component {
    render() {
        return (
            <div className="other-msg">
                <img src={photo} alt="" className="other-msg__image" />
                <div className="other-msg__main">
                    <div className="other-msg__info">
                        <span className="other-msg__name">Hieu </span>
                        <span className="other-msg__timestamp">1:52 PM</span>
                    </div>
                    <p className="other-msg__message">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ex quaerat quam autem. Est, id tenetur.
                    </p>
                </div>
            </div>
        );
    }
}

export default OtherMsg;
