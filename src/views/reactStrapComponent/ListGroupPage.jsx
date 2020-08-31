/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { listGroupPageData } from "util/data/reactstrapdata/ListGroupPage";

export default class ListGroupPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.listgroup"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.listgroup"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={listGroupPageData} />
            </div>
        );
    }
}
