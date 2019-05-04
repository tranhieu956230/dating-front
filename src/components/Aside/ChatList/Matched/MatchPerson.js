import React from "react";
import photo from "../../../../images/profile.jpg";

class MatchPerson extends React.Component {
    render() {
        return (
            <li className="match-person">
                <img src={photo} alt="" className="match-person__image" />
                <div className="match-person__right">
                    <h3 className="match-person__name">
                        Tran Duc Hieu
                        <span className="match-person__status" />
                    </h3>
                    <p className="match-person__recent-msg">Hello</p>
                </div>
            </li>
        );
    }
}

export default MatchPerson;
