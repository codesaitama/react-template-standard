/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { navssPageData } from "util/data/reactstrapdata/NavsPage";

export default class NavssPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.nav"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.nav"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={navssPageData} />
            </div>
        );
    }
}
