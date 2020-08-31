import React from "react";
import { Progress } from "reactstrap";

const Example = () => {
    return (
        <div className="progress-block">
            <Progress animated value={2 * 5} />
            <Progress animated className="c-success" value="25" />
            <Progress animated className="c-info" value={50} />
            <Progress animated className="c-warning" value={75} />
            <Progress animated className="c-danger" value="100" />
            <Progress multi>
                <Progress animated bar value="10" />
                <Progress animated bar className="c-success" value="30" />
                <Progress animated bar className="c-warning" value="20" />
                <Progress animated bar className="c-danger" value="20" />
            </Progress>
        </div>
    );
};

export default Example;
