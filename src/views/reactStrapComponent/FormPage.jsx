/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { formPageData } from "util/data/reactstrapdata/FormPage";
import PageTitle from "components/common/PageTitle";

export default class FormPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.form"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.form"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={formPageData} />
            </div>
        );
    }
}
