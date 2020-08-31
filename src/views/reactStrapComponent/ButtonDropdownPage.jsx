/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { buttonDropdownPageData } from "util/data/reactstrapdata/ButtonDropdownPage";

export default class ButtonDropdownPage extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.buttondropdown"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.buttondropdown"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={buttonDropdownPageData} />
            </div>
        );
    }
}
