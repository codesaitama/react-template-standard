/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { paginationPageData } from "util/data/reactstrapdata/PaginationPage";

export default class PaginationPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.pagination"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.pagination"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={paginationPageData} />
            </div>
        );
    }
}
