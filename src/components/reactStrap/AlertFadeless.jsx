import React, { useState } from "react";
import { Alert } from "reactstrap";

const AlertFadeless = () => {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            <Alert
                className="c-primary"
                isOpen={visible}
                toggle={() => setVisible(false)}
                fade={false}
            >
                I am a primary alert and I can be dismissed without animating!
            </Alert>
        </div>
    );
};

export default AlertFadeless;
