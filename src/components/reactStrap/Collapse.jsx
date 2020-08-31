import React, { useState } from "react";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const Example = () => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div>
            <Button
                className="c-primary"
                onClick={() => setCollapse(!collapse)}
                style={collapse ? { marginBottom: "1rem" } : {}}
            >
                Toggle
            </Button>
            <Collapse isOpen={collapse}>
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
