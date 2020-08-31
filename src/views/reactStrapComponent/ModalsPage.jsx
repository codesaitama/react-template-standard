/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { modalsPageData } from "util/data/reactstrapdata/ModalsPage";

const ModalsPage = () => {
    return (
        <div className="react-strap-doc">
            <PageTitle
                title="sidebar.modals"
                breadCrumb={[
                    {
                        name: "sidebar.reactstrapcomponents"
                    },
                    {
                        name: "sidebar.modals"
                    }
                ]}
            />
            <ReactStrapDocumenter pageData={modalsPageData} />
        </div>
    );
};

export default ModalsPage;
