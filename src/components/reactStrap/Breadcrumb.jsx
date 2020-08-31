import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Example = () => {
    return (
        <div className="reactstrap-breadcrumb-block">
            <Breadcrumb>
                <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>

            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Library</BreadcrumbItem>
                <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
};

export default Example;
