import React, { useMemo, useState, useEffect, useCallback } from "react";
import { dummyData } from "util/data/reactTableData";
import { useTable, useSortBy, usePagination } from "react-table";
import Button from "components/button/Button";
import RoyTooltip from "components/common/RoyTooltip";
import Pagination from "components/common/Pagination";
import { withRouter } from "react-router";
import CustomToast from "components/notifications/CustomToast";
import { connect } from "react-redux";
import ReactTableWrapper from "./reacttbl.style";
import classnames from "classnames";

let debounceTimer;

const initSnackBar = {
  flag: false,
  heading: "",
  description: ""
};

const HeaderComponent = props => {
  let classes = {
    "my-2": true,
    "mx-3": true,
    "-sort-asc": props.isSortedDesc !== undefined && !props.isSortedDesc,
    "-sort-desc": props.isSortedDesc !== undefined && props.isSortedDesc
  };
  return <div className={classnames(classes)}>{props.title}</div>;
};

const ServerSideTable = props => {
  const [snackBar, setSnackBar] = useState(initSnackBar);
  const [tblData, settblData] = useState(dummyData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLength, setPageLength] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [sortObject, setSortObject] = useState({});

  const columns = useMemo(
    () => [
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="FirstName"
            />
          );
        },
        accessor: "firstname"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="LastName"
            />
          );
        },
        accessor: "lastname"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Status"
            />
          );
        },
        disableSortBy: true,
        accessor: "isActive",
        Cell: tableInstance => (
          <div className="react-action-class">
            {tableInstance.row.original.isActive ? (
              <RoyTooltip
                id={`active-${tableInstance.row.original.id}`}
                title={"Click to Deactivate"}
                placement="left"
              >
                <div id={`active-${tableInstance.row.original.id}`}>
                  <Button
                    style={{ minWidth: "125px" }}
                    className="c-btn c-info mr-10"
                    onClick={() =>
                      activeInactiveStatusHandler(tableInstance.row.original)
                    }
                  >
                    <div className="fs-14 medium-text">
                      <i className="fas fa-toggle-off mr-6" /> Active
                    </div>
                  </Button>
                </div>
              </RoyTooltip>
            ) : (
              <RoyTooltip
                id={`deactive-${tableInstance.row.original.id}`}
                title={"Click to Active"}
                placement="left"
              >
                <div id={`deactive-${tableInstance.row.original.id}`}>
                  <Button
                    style={{ minWidth: "125px" }}
                    className="c-btn c-danger mr-10"
                    onClick={() =>
                      activeInactiveStatusHandler(tableInstance.row.original)
                    }
                  >
                    <div className="fs-14 medium-text">
                      <i className="fas fa-toggle-on mr-6" /> InActive
                    </div>
                  </Button>
                </div>
              </RoyTooltip>
            )}
          </div>
        )
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Phone Number"
            />
          );
        },
        accessor: "phone_number"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Email"
            />
          );
        },
        accessor: "email"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Action"
            />
          );
        },
        accessor: "id",
        disableSortBy: true,
        Cell: tableInstance => (
          <div className="react-action-class">
            <Button
              className="c-btn c-success mr-10"
              onClick={() => formAction("edit", tableInstance.row.original)}
            >
              <div className="fs-14 medium-text">
                <i className="fas fa-edit" />
              </div>
            </Button>
            <Button
              className="c-btn c-danger"
              onClick={() => deleteClick(tableInstance.row.original)}
            >
              <div className="fs-14 medium-text">
                <i className="fas fa-trash" />
              </div>
            </Button>
          </div>
        )
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    rows,
    headerGroups,
    state: { sortBy }
  } = useTable(
    {
      data: tblData,
      columns: columns,
      manualSortBy: true,
      initialState: {
        pageSize: pageLength,
        pageIndex: 0
      }
    },
    useSortBy,
    usePagination
  );

  const callApi = useCallback(() => {
    const params = {
      page_number: currentPage,
      page_size: pageLength,
      searchBy: searchText,
      sortBy: sortObject
    };
    setSnackBar({
      flag: true,
      heading: "Call Api",
      description: `You have to call api for server side tbl Your parameters are : ${JSON.stringify(
        params
      )}`
    });
    setTotalPage(10);
    settblData(dummyData);
  }, [currentPage, pageLength, sortObject, searchText]);

  useEffect(() => {
    // Call api here
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      debounceTimer = null;
    }
    debounceTimer = setTimeout(() => {
      setPageLength(10);
      callApi();
    }, 1000);
  }, [currentPage, searchText, sortObject, callApi]);

  useEffect(() => {
    setSortObject({ ...sortBy[0] });
  }, [sortBy]);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const deleteClick = data => {
    // Here you can view the data and delete through API calling
    setSnackBar({
      flag: true,
      heading: "Delete Handler",
      description: `you have to call api and Delete data, Your id is: ${data.id}`
    });
  };

  const formAction = (action, data = null) => {
    // Here you can view the data and make forward action for edit data
    if (action === "add") {
      setSnackBar({
        flag: true,
        heading: "Add Action",
        description: `you have to call your form for adding user`
      });
    } else if (action === "edit") {
      setSnackBar({
        flag: true,
        heading: "Edit Action",
        description: `you have to call your form for Edit user, Your id is: ${data.id}`
      });
    }
  };

  const activeInactiveStatusHandler = data => {
    setSnackBar({
      flag: true,
      heading: "Status Change Action",
      description: `you have to call api to change status, Your id is: ${data.id}`
    });
  };

  return (
    <ReactTableWrapper {...props}>
      <div>
        <div className="roe-card-style mtb-15">
          <div className="roe-card-header module-header">
            <div className="flex-1">
              <span className="hash"># </span> Server Side Table
            </div>
            <div className="mr-10">
              <input
                value={searchText ? searchText : ""}
                onChange={e => setSearchText(e.target.value)}
                type="text"
                placeholder="Search..."
                className="fs-14 medium-text plr-10 form-control react-form-input"
              />
            </div>
            <div>
              <Button
                className="c-btn ma-5 c-primary"
                onClick={() => formAction("add")}
              >
                <i className="fas fa-plus mr-10" />
                Add User
              </Button>
            </div>
          </div>
          <div className="table-container text-center overflow-auto">
            <table
              border={1}
              className="custom-react-table-theme-class"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(header => (
                      <th
                        {...header.getHeaderProps(
                          header.getSortByToggleProps()
                        )}
                      >
                        <div>{header.render("Header")}</div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination
            onPageChange={handlePageChange}
            pages={totalPage}
            page={currentPage}
          />
          <CustomToast
            heading={snackBar.heading}
            width={400}
            show={snackBar.flag}
            transition
            position="top-middle"
            className="c-success break-word"
            message={snackBar.description}
            onCloseCLick={() => setSnackBar(initSnackBar)}
          />
        </div>
      </div>
    </ReactTableWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state.themeChanger
  };
};

export default connect(mapStateToProps, null)(withRouter(ServerSideTable));
