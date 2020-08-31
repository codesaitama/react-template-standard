import React from "react";
import { Alert } from "reactstrap";

const Example = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <Alert className="c-outline-primary">
                        This is a primary alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-secondary">
                        This is a secondary alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-success">
                        This is a success alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-danger">
                        This is a danger alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-warning">
                        This is a warning alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-info">
                        This is a info alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-light">
                        This is a light alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>

                <div className="col-lg-6">
                    <Alert className="c-outline-alternate">
                        This is a dark alert with{" "}
                        <a href="/alerts" className="alert-link">
                            an example link
                        </a>
                        . Give it a click if you like.
                    </Alert>
                </div>
            </div>
        </div>
    );
};

export default Example;
