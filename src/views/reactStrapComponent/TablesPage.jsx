/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { tablesPageData } from "util/data/reactstrapdata/TablesPage";

export default class TablesPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.tables"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.tables"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={tablesPageData} />
            </div>
        );
    }
}
