import React from "react";
import RecentPerson from "./RecentPerson";
import "./Recent.css";

class Recent extends React.Component {
    render() {
        let offset = (1 - this.props.current) * 100;
        return (
            <div className="recent" style={getStyle(offset)}>
                <ul className="recent__list">
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
                    <RecentPerson />
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

export default Recent;
