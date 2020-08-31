import React from "react";
import { TableWrapper } from "./IncomeTable.style";

const IncomeTable = ({ data, title }) => {
  return (
    <div className="roe-shadow-2 pa-25 whitelight table-responsive">
      <div className="fs-18 header">{title}</div>
      <div className="overflow-auto">
        <TableWrapper className="table table-hover">
          <thead>
            <tr>
              {data.headerFields.map(field => (
                <th key={field}>{field}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rowData.map((row, i) => (
              <tr key={i}>
                <td>{row.field1}</td>
                <td>{row.field2}</td>
                <td>{row.field3}</td>
                <td>{row.field4}</td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </div>
  );
};

export default IncomeTable;
