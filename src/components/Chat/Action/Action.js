import React from "react";
import "./Action.css";

class Action extends React.Component {
    render() {
        return (
            <section className="action">
                <div className="action__info">
                    <h2 className="action__person-name">Trần Đức Hiếu</h2>
                    <h4 className="action__person-status">
                        <span />
                        Active now
                    </h4>
                </div>

                <div className="action__group">
                    <div className="action__video-call">
                        <i className="fa fa-video-camera" aria-hidden="true" />
                    </div>
                    <div className="action__phone-call">
                        <i className="fa fa-phone" aria-hidden="true" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Action;
