import React, { Component } from "react";
import Notifications from "./notification";
import ProjectList from '../project/projectList';

class DashBoard extends Component {
    render() {
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

export default DashBoard;