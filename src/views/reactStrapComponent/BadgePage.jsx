/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { badgePageData } from "util/data/reactstrapdata/BadgePage";
import PageTitle from "components/common/PageTitle";

export default class BadgesPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.badges"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.badges"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={badgePageData} />
            </div>
        );
    }
}
