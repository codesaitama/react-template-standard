import React from "react";
import { Media } from "reactstrap";
import { media2, media3 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-media">
            <Media>
                <Media left href="#">
                    <Media
                        object
                        src={media2}
                        alt="Generic placeholder image"
                    />
                </Media>
                <Media body className="doc-description">
                    <Media heading className="doc-title">Media heading</Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                    <Media>
                        <Media left href="#">
                            <Media
                                object
                                src={media3}
                                alt="Generic placeholder image"
                            />
                        </Media>
                        <Media body className="doc-description">
                            <Media heading className="doc-title">Nested media heading</Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla
                            vel metus scelerisque ante sollicitudin commodo.
                            Cras purus odio, vestibulum in vulputate at, tempus
                            viverra turpis. Fusce condimentum nunc ac nisi
                            vulputate fringilla. Donec lacinia congue felis in
                            faucibus.
                        </Media>
                    </Media>
                </Media>
            </Media>
        </div>
    );
};

export default Example;
