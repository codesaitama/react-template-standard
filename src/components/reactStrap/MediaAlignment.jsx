import React from "react";
import { Media } from "reactstrap";
import { media4, media5, media6 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-media">
            <Media>
                <Media left top href="#">
                    <Media
                        object
                        src={media4}
                        alt="Generic placeholder image"
                    />
                </Media>
                <Media body className="doc-description">
                    <Media heading className="doc-title">
                        Top aligned media
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left middle href="#">
                    <Media
                        object
                        src={media5}
                        alt="Generic placeholder image"
                    />
                </Media>
                <Media body className="doc-description">
                    <Media heading className="doc-title">
                        Middle aligned media
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                </Media>
            </Media>
            <Media className="mt-1">
                <Media left bottom href="#">
                    <Media
                        object
                        src={media6}
                        alt="Generic placeholder image"
                    />
                </Media>
                <Media body className="doc-description">
                    <Media heading className="doc-title">
                        Bottom aligned media
                    </Media>
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
