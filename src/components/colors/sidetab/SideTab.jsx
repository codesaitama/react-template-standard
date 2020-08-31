import React from "react";
import SideTabWrapper from "./sidetab.style";

const SideTab = ({ colors, ActiveColorTab, activeTabColor }) => {
    const activeTabStyle = {
        backgroundColor: "#DCE8F0"
    };

    return (
        <SideTabWrapper>
            <div className="color-sidebar">
                {colors.map((e, i) => {
                    return (
                        <div
                            className="tab-name text-center"
                            key={i}
                            onClick={() => activeTabColor(e)}
                            style={
                                ActiveColorTab.name === e.name
                                    ? activeTabStyle
                                    : {}
                            }
                        >
                            <div
                                className="color"
                                style={{
                                    backgroundColor: e.colors[6]
                                        ? e.colors[6].color
                                        : e.colors[0].color
                                }}
                            />
                            <div className="color-name">{e.name}</div>
                        </div>
                    );
                })}
            </div>
        </SideTabWrapper>
    );
};

export default SideTab;
