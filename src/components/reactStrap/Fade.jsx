import React, { useState } from "react";
import { Button, Fade } from "reactstrap";

const Example = () => {
    const [fadeIn, setFadeIn] = useState(true);

    return (
        <div>
            <Button className="c-primary" onClick={() => setFadeIn(!fadeIn)}>
                Toggle Fade
            </Button>
            <Fade in={fadeIn} tag="h5" className="mt-3 doc-description">
                This content will fade in and out as the button is pressed
            </Fade>
        </div>
    );
};
export default Example;
