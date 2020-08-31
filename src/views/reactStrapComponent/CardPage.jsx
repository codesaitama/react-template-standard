/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { CardPageData } from "util/data/reactstrapdata/CardPage";

export default class CardPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.card"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.card"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={CardPageData} />
            </div>
        );
    }
}
