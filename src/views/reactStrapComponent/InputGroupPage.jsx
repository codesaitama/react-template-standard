/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import PageTitle from "components/common/PageTitle";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { inputGroupPageData } from "util/data/reactstrapdata/InputGroupPage";

export default class InputGroupPage extends React.Component {
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
                    title="sidebar.inputgroup"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.inputgroup"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={inputGroupPageData} />
            </div>
        );
    }
}
