import React from "react";
import { connect } from "react-redux";
import PageTitle from "components/common/PageTitle";
import ReactRegularTable from "components/tables/regulartable/ReactRegularTable";
import { regularTabelData, regularTabelColumns, regularTablesList } from "util/data/regularTableData";
import Button from "components/button/Button";

const EmployeeInsert = ({ sidebarTheme, layoutTheme }) => {
  return (
    <div>
            <PageTitle
                title="header.create_employee"
                className="plr-15"
                breadCrumb={[
                    {
                        name: "sidebar.employee"
                    },
                    {
                        name: "header.create_employee"
                    }
                ]}
            />
            <div className="row ma-0">
                {regularTablesList &&
                    regularTablesList.filter(x => x.title === 'Table head Dark').map((e, i) => {
                        e.title = 'Create Employee'
                        return (
                            <div className="col-sm-12 pb-30" key={i}>
                                <div className="roe-card-style">
                                    <div className="roe-card-header">
                                        <span className="hash"># </span>{" "}
                                        {e.title}
                                        <Button
                                            className="c-btn c-info ma-5 footer-purchase-button"
                                            onClick={() => window.open( "https://themeforest.net/item/roe-reactjs-admin-dashboard-template/23764691", "_blank" ) }
                                            dataStyle="expand-left"
                                        >
                                            <span className="fs-14 demi-bold-text">Purchase ROE</span>
                                        </Button>
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
                
            </div>
        </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(EmployeeInsert);
