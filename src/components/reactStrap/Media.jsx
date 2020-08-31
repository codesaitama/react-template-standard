import React from "react";
import { Media } from "reactstrap";
import { media1 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-media">
            <Media>
                <Media left href="#">
                    <Media
                        object
                        src={media1}
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
                </Media>
            </Media>
        </div>
    );
};

export default Example;
