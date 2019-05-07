import React from "react";
import MatchPerson from "./MatchPerson";
import "./Matched.css";

class Matched extends React.Component {
    render() {
        let offset = (0 - this.props.current) * 100;
        return (
            <div className="match" style={getStyle(offset)}>
                <ul className="match__list">
                    <MatchPerson />
                    <MatchPerson />
                    <MatchPerson />
                    <MatchPerson />
                </ul>
            </div>
        );
    }
}

const getStyle = offset => {
    if (offset) {
        return {
            transform: `translateX(${offset}%)`,
            opacity: 0,
            visibility: "hidden"
        };
    } else {
        return {
            transform: `translateX(${offset}%)`,
            opacity: 1,
            visibility: "visible"
        };
    }
};

export default Matched;
