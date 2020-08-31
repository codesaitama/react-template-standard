/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { navbarPageData } from "util/data/reactstrapdata/NavbarPage";

export default class NavsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.navbar"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.navbar"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={navbarPageData} />
            </div>
        );
    }
}
