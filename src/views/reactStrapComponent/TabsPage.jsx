/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { tabsPageData } from "util/data/reactstrapdata/TabsPage";

export default function TabsPage() {
    return (
        <div className="react-strap-doc">
            <PageTitle
                title="sidebar.tabs"
                breadCrumb={[
                    {
                        name: "sidebar.reactstrapcomponents"
                    },
                    {
                        name: "sidebar.tabs"
                    }
                ]}
            />
            <ReactStrapDocumenter pageData={tabsPageData} />
        </div>
    );
}
