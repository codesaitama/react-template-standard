import React from "react";
import { connect } from "react-redux";
import { regularTableCode } from "util/data/apiCodeFormate";
import {
    regularTabelData,
    regularTabelColumns,
    regularTablesList
} from "util/data/regularTableData";
import ReactRegularTable from "components/tables/regulartable/ReactRegularTable";
import CodeLooker from "components/common/CodeLooker";
import PageTitle from "components/common/PageTitle";

const RegularTables = () => {
    return (
        <div>
            <PageTitle
                title="sidebar.regulartabels"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.tables"
                    },
                    {
                        name: "sidebar.regulartabels"
                    }
                ]}
            />
            <div className="row ma-0">
                {regularTablesList &&
                    regularTablesList.map((e, i) => {
                        return (
                            <div className="col-sm-12 pb-30" key={i}>
                                <div className="roe-card-style">
                                    <div className="roe-card-header">
                                        <span className="hash"># </span>{" "}
                                        {e.title}
                                    </div>
                                    <div className="roe-card-body">
                                        <div className="my-table-custom-class">
                                            <ReactRegularTable
                                                data={regularTabelData}
                                                column={regularTabelColumns}
                                                caption={e.caption}
                                                dark={e.dark}
                                                headerDark={e.headerDark}
                                                striped={e.striped}
                                                bordered={e.bordered}
                                                borderless={e.borderless}
                                                hover={e.hover}
                                                small={e.small}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                <div className="col-sm-12">
                    <div className="roe-card-style mb-15">
                        <div className="roe-card-header">
                            <span className="hash"># </span> API
                        </div>
                        <div
                            className="roe-card-body"
                            style={{ marginTop: "-1rem" }}
                        >
                            <CodeLooker Code={regularTableCode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger
    };
};

export default connect(
    mapStateToProps,
    null
)(RegularTables);
