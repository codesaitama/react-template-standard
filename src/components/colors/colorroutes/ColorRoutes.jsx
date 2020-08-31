import React from "react";
import ColorRoutesWrapper from "./colorRoutes.style";

const ColorRoutes = ({ ActiveColorTab }) => {
    return (
        <ColorRoutesWrapper>
            {ActiveColorTab &&
                ActiveColorTab.colors.map((e, i) => {
                    return (
                        <div
                            className="color-detail-card"
                            key={i}
                            style={{
                                backgroundColor: e.color,
                                color: e.textColor
                            }}
                        >
                            <div className="opacity">{e.name}</div>
                            <div className="hash-color">{e.color}</div>
                        </div>
                    );
                })}
        </ColorRoutesWrapper>
    );
};

export default ColorRoutes;
