import React from "react";
import classNames from "classnames";

const SimpleTable = props => {
    const {
        data,
        column,
        dark,
        headerDark,
        striped,
        bordered,
        borderless,
        hover,
        small,
        className
    } = props;

    return (
        <div className="table-responsive">
            <table
                className={classNames(
                    "table",
                    dark && "table-dark",
                    striped && "table-striped",
                    bordered && "table-bordered",
                    borderless && "table-borderless",
                    hover && "table-hover",
                    small && "table-sm",
                    className
                )}
            >
                {/* {caption && <caption>{caption ? caption : ""}</caption>} */}
                <thead className={classNames(headerDark && "thead-dark")}>
                    <tr>
                        {column &&
                            column.map((e, i) => {
                                return <th key={i}>{e.column}</th>;
                            })}
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.map((e, i) => {
                            return (
                                <tr key={i}>
                                    {column &&
                                        column.map((f, i) => {
                                            return (
                                                <td key={i}>
                                                    {e[`${f.index}`]}
                                                </td>
                                            );
                                        })}
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default SimpleTable;
