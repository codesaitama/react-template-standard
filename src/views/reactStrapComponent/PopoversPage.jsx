/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { popoversPageData } from "util/data/reactstrapdata/PopoversPage";

export default class PopoversPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.popovers"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.popovers"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={popoversPageData} />
            </div>
        );
    }
}
