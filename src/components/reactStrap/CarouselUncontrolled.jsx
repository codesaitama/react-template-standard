import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import { media2, media3, media4 } from "helper/constant";

const items = [
    {
        src: media2,
        altText: "Slide 1",
        caption: "Slide 1",
        header: "Slide 1 Header"
    },
    {
        src: media3,
        altText: "Slide 2",
        caption: "Slide 2",
        header: "Slide 2 Header"
    },
    {
        src: media4,
        altText: "Slide 3",
        caption: "Slide 3",
        header: "Slide 3 Header"
    }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
