import React from "react";
import photo from "../../../../images/profile.jpg";

class RecentPerson extends React.Component {
    render() {
        return (
            <li className="recent-person">
                <img src={photo} alt="" className="recent-person__image" />
                <p className="recent-person__recent-msg">Hello</p>
            </li>
        );
    }
}

export default RecentPerson;
