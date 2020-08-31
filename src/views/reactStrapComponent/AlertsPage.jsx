import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { alertPageData } from "util/data/reactstrapdata/AlertPage";

export default class AlertsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.alerts"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.alerts"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={alertPageData} />
            </div>
        );
    }
}
