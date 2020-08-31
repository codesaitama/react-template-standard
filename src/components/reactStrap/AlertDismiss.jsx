import React, { useState } from "react";
import { Alert } from "reactstrap";

const AlertExample = () => {
    const [visible, setVisible] = useState(true);

    return (
        <Alert className="c-info" isOpen={visible} toggle={() => setVisible(false)}>
            I am an alert and I can be dismissed!
        </Alert>
    );
};

export default AlertExample;
