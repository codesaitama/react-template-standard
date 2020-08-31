import React from "react";
import { Progress } from "reactstrap";

const Example = () => {
    return (
        <div className="progress-block">
            <Progress value={2 * 5} />
            <Progress className="c-success" value="25" />
            <Progress className="c-info" value={50} />
            <Progress className="c-warning" value={75} />
            <Progress className="c-danger" value="100" />
        </div>
    );
};

export default Example;
