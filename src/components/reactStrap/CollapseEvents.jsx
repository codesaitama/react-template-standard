import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Example = () => {
    const [collapse, setCollapse] = useState(false);
    const [status, setStatus] = useState("Closed");

    return (
        <div>
            <Button
                className="c-primary"
                onClick={() => setCollapse(!collapse)}
                style={{ marginBottom: "1rem" }}
            >
                Toggle
            </Button>
            <h5 className="mb-3 doc-title">Current state: {status}</h5>
            <Collapse
                isOpen={collapse}
                onEntering={() => setStatus("Opening")}
                onEntered={() => setStatus("Opened")}
                onExiting={() => setStatus("Closing")}
                onExited={() => setStatus("Closed")}
            >
                <Card>
                    <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
};

export default Example;
