/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { buttonPageData } from "util/data/reactstrapdata/ButtonsPage";

export default class ButtonsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.buttons"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.buttons"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={buttonPageData} />
            </div>
        );
    }
}
