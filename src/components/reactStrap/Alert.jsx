import React from "react";
import { Alert } from "reactstrap";

const Example = props => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <Alert className="c-primary">
                        This is a primary alert — check it out!
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-secondary">
                        This is a secondary alert — check it out!
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-success">
                        This is a success alert — check it out!
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-danger">This is a danger alert — check it out!</Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-warning">
                        This is a warning alert — check it out!
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-info">This is a info alert — check it out!</Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-light">This is a light alert — check it out!</Alert>
                </div>
                
                <div className="col-lg-6">
                    <Alert className="c-dark">This is a dark alert — check it out!</Alert>
                </div>
            </div>
        </div>
    );
};

export default Example;
