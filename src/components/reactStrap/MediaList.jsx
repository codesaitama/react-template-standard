import React from "react";
import { Media } from "reactstrap";
import { media5, media6, media7, media8, media9 } from "helper/constant";

const Example = () => {
    return (
        <div className="reactstrap-media">
            <Media list>
                <Media tag="li">
                    <Media left href="#">
                        <Media
                            object
                            src={media5}
                            alt="Generic placeholder image"
                        />
                    </Media>
                    <Media body className="doc-description">
                        <Media heading className="doc-title">
                            Media heading
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        <Media>
                            <Media left href="#">
                                <Media
                                    object
                                    src={media6}
                                    alt="Generic placeholder image"
                                />
                            </Media>
                            <Media body className="doc-description">
                                <Media heading className="doc-title">
                                    Nested media heading
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin
                                commodo.
                                <Media>
                                    <Media left href="#">
                                        <Media
                                            object
                                            src={media7}
                                            alt="Generic placeholder image"
                                        />
                                    </Media>
                                    <Media body className="doc-description">
                                        <Media heading className="doc-title">
                                            Nested media heading
                                        </Media>
                                        Cras sit amet nibh libero, in gravida
                                        nulla. Nulla vel metus scelerisque ante
                                        sollicitudin commodo.
                                    </Media>
                                </Media>
                            </Media>
                        </Media>
                        <Media>
                            <Media left href="#">
                                <Media
                                    object
                                    src={media8}
                                    alt="Generic placeholder image"
                                />
                            </Media>
                            <Media body className="doc-description">
                                <Media heading className="doc-title">
                                    Nested media heading
                                </Media>
                                Cras sit amet nibh libero, in gravida nulla.
                                Nulla vel metus scelerisque ante sollicitudin
                                commodo. Cras purus odio, vestibulum in
                                vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla.
                                Donec lacinia congue felis in faucibus.
                            </Media>
                        </Media>
                    </Media>
                </Media>
                <Media tag="li">
                    <Media body className="doc-description">
                        <Media heading className="doc-title">
                            Media heading
                        </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                    </Media>
                    <Media right href="#">
                        <Media
                            object
                            src={media9}
                            alt="Generic placeholder image"
                        />
                    </Media>
                </Media>
            </Media>
        </div>
    );
};

export default Example;
