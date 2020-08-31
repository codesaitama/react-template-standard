import React, { useState, useMemo, useCallback } from "react";
import { rowData } from "util/data/reactTableData";
import { remove } from "lodash";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import classnames from "classnames";
import Pagination from "components/common/Pagination";
import ReactTableWrapper from "./reacttbl.style";

const HeaderComponent = props => {
  let classes = {
    "my-2": true,
    "mx-3": true,
    "-sort-asc": props.isSortedDesc !== undefined && !props.isSortedDesc,
    "-sort-desc": props.isSortedDesc !== undefined && props.isSortedDesc
  };
  return <div className={classnames(classes)}>{props.title}</div>;
};

const ClientSideTable = props => {
  const [dummyData, setDummyData] = useState(rowData);

  const deleteClick = useCallback(
    data => {
      // Here you can view the data and delete through API calling
      const array = dummyData;
      remove(array, function(n) {
        return n.id === data.id;
      });
      setDummyData([...array]);
    },
    [dummyData]
  );

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
        Filter: FilterComponent,
        placeholder: "First Name",
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
        Filter: FilterComponent,
        placeholder: "Last Name",
        accessor: "lastname"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="City"
            />
          );
        },
        Filter: FilterComponent,
        placeholder: "city",
        accessor: "address.city"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="State"
            />
          );
        },
        Filter: FilterComponent,
        placeholder: "state",
        accessor: "address.state"
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Country"
            />
          );
        },
        accessor: "address.country",
        placeholder: "country",
        disableFilters: true
      },
      {
        Header: tableInstance => {
          return (
            <HeaderComponent
              isSortedDesc={tableInstance.column.isSortedDesc}
              title="Postal Code"
            />
          );
        },
        accessor: "address.postelcode",
        placeholder: "postal code",
        disableFilters: true
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
        disableFilters: true,
        Cell: tableInstance => {
          return (
            <div className="react-action-class wide-cell">
              <button
                className="react-table-view-button"
                onClick={() => viewClick(tableInstance.row.original)}
              >
                <i className="fas fa-eye" />
              </button>
              <button
                className="react-table-edit-button"
                onClick={() => editClick(tableInstance.row.original)}
              >
                <i className="fas fa-edit" />
              </button>
              <button
                className="react-table-delete-button"
                onClick={() => deleteClick(tableInstance.row.original)}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          );
        }
      }
    ],
    [deleteClick]
  );

  const viewClick = data => {
    // Here you can view the data and make forward action for view data
    alert(JSON.stringify(data));
  };

  const editClick = data => {
    // Here you can view the data and make forward action for edit data
    alert(JSON.stringify(data));
  };

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,
    headerGroups,
    pageCount,
    gotoPage,
    state: { pageIndex }
  } = useTable(
    {
      data: dummyData,
      columns: columns,
      initialState: {
        pageSize: 10,
        pageIndex: 0
      }
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <ReactTableWrapper {...props}>
      <div className="roe-card-style mt-15 mb-30">
        <div className="roe-card-header">
          <span className="hash"># </span> Client Side Table
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
                      {...header.getHeaderProps(header.getSortByToggleProps())}
                    >
                      <div>{header.render("Header")}</div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(header => {
                    return (
                      <td
                        {...header.getHeaderProps(
                          header.getSortByToggleProps()
                        )}
                      >
                        <div>
                          {header.canFilter ? header.render("Filter") : null}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
              {page.map(row => {
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
          onPageChange={gotoPage}
          pages={pageCount}
          page={pageIndex}
        />
      </div>
    </ReactTableWrapper>
  );
};

const FilterComponent = tableInstance => {
  const { filterValue, setFilter } = tableInstance.column;
  return (
    <input
      type="text"
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      className="tabl-search react-form-input"
      placeholder={`Search ${tableInstance.column.placeholder}`}
      onClick={e => e.stopPropagation()}
    />
  );
};

export default ClientSideTable;
