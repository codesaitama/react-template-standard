/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { jumbotronPageData } from "util/data/reactstrapdata/JumbotronPage";

export default class JumbotronPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.jumbotron"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.jumbotron"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={jumbotronPageData} />
            </div>
        );
    }
}
