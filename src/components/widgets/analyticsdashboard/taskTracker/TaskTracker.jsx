import React from "react";
import { TableWrapper } from "./TaskTracker.style";
import { Progress } from "react-sweet-progress";

const TaskTracker = ({ data, title }) => {
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
                <td className="text-center">
                  {row.field3} %
                  <Progress
                    percent={row.field3}
                    symbolClassName="d-none"
                    theme={{
                      active: {
                        color: `#563c91`
                      }
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TableWrapper>
      </div>
    </div>
  );
};

export default TaskTracker;
