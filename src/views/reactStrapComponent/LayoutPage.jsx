/* eslint import/no-webpack-loader-syntax: off */
import React from "react";
import CodeLooker from "components/common/CodeLooker";
import PageTitle from "components/common/PageTitle";
import SectionTitle from "components/common/SectionTitle";
import LayoutExample from "components/reactStrap/Layout";
import ReactStrapDocumenter from "components/common/ReactStrapDocumenter";
import { layoutsPageData } from "util/data/reactstrapdata/LayoutsPage";

const LayoutExampleSource = require("!!raw-loader!components/reactStrap/Layout");

export default class LayoutsPage extends React.Component {
    render() {
        return (
            <div className="react-strap-doc">
                <PageTitle
                    title="sidebar.layout"
                    breadCrumb={[
                        {
                            name: "sidebar.reactstrapcomponents"
                        },
                        {
                            name: "sidebar.layout"
                        }
                    ]}
                />
                <ReactStrapDocumenter pageData={layoutsPageData} />
                <div className="docs-example">
                    <LayoutExample />
                </div>
                <pre>
                    <CodeLooker Code={LayoutExampleSource} />
                </pre>
                <SectionTitle>Container Properties</SectionTitle>
                <pre>
                    <CodeLooker
                        Code={`Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}`}
                    />
                </pre>
                <SectionTitle>Row Properties</SectionTitle>
                <pre>
                    <CodeLooker
                        Code={`Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
}`}
                    />
                </pre>
                <SectionTitle>Col Properties</SectionTitle>
                <pre>
                    <CodeLooker
                        Code={`const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-\`width\`-12
    // auto => col-auto or col-\`width\`-auto
    // true => col or col-\`width\`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}`}
                    />
                </pre>
            </div>
        );
    }
}
