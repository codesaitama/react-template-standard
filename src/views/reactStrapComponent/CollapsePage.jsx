/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { collapsePageData } from "util/data/reactstrapdata/CollapsePage";

export default class CollapsePage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.collapse"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.collapse"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={collapsePageData} />
            </div>
        );
    }
}
