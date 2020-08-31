/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import CodeLooker from "components/common/CodeLooker";
import { Spinner } from "reactstrap";
import PageTitle from "components/common/PageTitle";
import SectionTitle from "components/common/SectionTitle";
import SpinnerExample from "components/reactStrap/Spinner";
import SpinnerGrowerExample from "components/reactStrap/SpinnerGrower";

const SpinnerExampleSource = require("!!raw-loader!components/reactStrap/Spinner");
const SpinnerGrowerExampleSource = require("!!raw-loader!components/reactStrap/SpinnerGrower");

export default class SpinnersPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.spinners"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.spinners"
                        }
                    ]}
                />
                <div className="docs-example">
                    <SpinnerExample />
                </div>
                <pre>
                    <CodeLooker Code={SpinnerExampleSource} />
                </pre>
                <SectionTitle>Properties</SectionTitle>
                <pre>
                    <CodeLooker
                        Code={`Spinner.propTypes = {
  type: PropTypes.string, // default: 'border'
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string, // default: 'Loading...'
};
`}
                    />
                </pre>
                <SectionTitle>Growing Spinner</SectionTitle>
                <div className="docs-example">
                    <SpinnerGrowerExample />
                </div>
                <pre>
                    <CodeLooker Code={SpinnerGrowerExampleSource} />
                </pre>
                <SectionTitle>Sizes</SectionTitle>
                <div className="docs-example">
                    <Spinner size="sm" color="primary" />{" "}
                    <Spinner size="sm" color="secondary" />
                </div>
                <pre>
                    <CodeLooker
                        Code={`<Spinner size="sm" color="primary" />{' '}
<Spinner size="sm" color="secondary" />`}
                    />
                </pre>
                <div className="docs-example">
                    <Spinner style={{ width: "3rem", height: "3rem" }} />{" "}
                    <Spinner
                        style={{ width: "3rem", height: "3rem" }}
                        type="grow"
                    />
                </div>
                <pre>
                    <CodeLooker
                        Code={`<Spinner style={{ width: '3rem', height: '3rem' }} />{' '}
<Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />`}
                    />
                </pre>
            </div>
        );
    }
}
