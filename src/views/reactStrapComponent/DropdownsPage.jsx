/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { dropdownPageData } from "util/data/reactstrapdata/DropdownsPage";

export default class DropdownPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggleExample2 = this.toggle.bind(this);
        this.state = {
            example2: false
        };
    }

    toggle() {
        this.setState({
            example2: !this.state.example2
        });
    }

    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.dropdowns"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.dropdowns"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={dropdownPageData} />
            </div>
        );
    }
}
