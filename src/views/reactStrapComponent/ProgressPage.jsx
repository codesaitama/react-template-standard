/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { progressPageData } from "util/data/reactstrapdata/ProgressPage";
import PageTitle from "components/common/PageTitle";

export default class ProgressPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.progress"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.progress"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={progressPageData} />
            </div>
        );
    }
}
