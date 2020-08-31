import React from "react";
import { Progress } from "reactstrap";

const Example = () => {
    return (
        <div className="progress-block">
            <Progress striped value={2 * 5} />
            <Progress striped className="c-success" value="25" />
            <Progress striped className="c-info" value={50} />
            <Progress striped className="c-warning" value={75} />
            <Progress striped className="c-danger" value="100" />
            <Progress multi>
                <Progress striped bar value="10" />
                <Progress striped bar className="c-success" value="30" />
                <Progress striped bar className="c-warning" value="20" />
                <Progress striped bar className="c-danger" value="20" />
            </Progress>
        </div>
    );
};

export default Example;
