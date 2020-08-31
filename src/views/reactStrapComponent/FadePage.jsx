/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { fadePageData } from "util/data/reactstrapdata/FadePage";

export default class FadePage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.fade"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.fade"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={fadePageData} />
            </div>
        );
    }
}
