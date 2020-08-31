/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { carouselPageData } from "util/data/reactstrapdata/CarouselPage";

export default class CarouselPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.carousel"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.carousel"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={carouselPageData} />
            </div>
        );
    }
}
