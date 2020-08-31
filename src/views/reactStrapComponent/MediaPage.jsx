/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { mediaPageData } from "util/data/reactstrapdata/MediaPage";
import PageTitle from "components/common/PageTitle";

export default class MediaPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.media"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.media"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={mediaPageData} />
            </div>
        );
    }
}
