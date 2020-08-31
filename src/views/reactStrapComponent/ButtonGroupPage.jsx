/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { buttonGroupPageData } from "util/data/reactstrapdata/ButtonGroupPage";
import PageTitle from "components/common/PageTitle";

export default class ButtonGroupPage extends React.Component {
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
                    title="sidebar.buttongroup"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.buttongroup"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={buttonGroupPageData} />
            </div>
        );
    }
}
