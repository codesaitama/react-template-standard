import React from "react";
import RoyTooltip from "components/common/RoyTooltip";

const Member = ({ member }) => {
    return (
        <RoyTooltip
            id={`member-${member.id}`}
            title={member.first + " " + member.last}
        >
            <div id={`member-${member.id}`} className="member">
                <img src={member.pics} alt="member" />
            </div>
        </RoyTooltip>
    );
};

export default Member;
