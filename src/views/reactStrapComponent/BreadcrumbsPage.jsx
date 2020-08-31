/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { breadcrumbsPageData } from "util/data/reactstrapdata/BreadcrumbsPage";

export default class BreadcrumbsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.breadcrumbs"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.breadcrumbs"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={breadcrumbsPageData} />
            </div>
        );
    }
}
