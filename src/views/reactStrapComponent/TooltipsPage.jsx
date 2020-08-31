/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { tooltipsPageData } from "util/data/reactstrapdata/TooltipsPage";
import PageTitle from "components/common/PageTitle";

export default class TooltipsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.tooltips"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.tooltips"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={tooltipsPageData} />
            </div>
        );
    }
}
