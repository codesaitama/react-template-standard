import React from "react";
import { UncontrolledPopover, PopoverBody } from "reactstrap";
import classNames from "classnames";

const AddMember = props => {
    const { members, selectedMembers, selectMemberHandler } = props;
    const ids = selectedMembers.map(a => a.id);
    return (
        <div>
            <div className="dialog-chip" id="addmember">
                Add Members
            </div>
            <UncontrolledPopover
                trigger="legacy"
                className="roy-menu"
                innerClassName="roy-inner-content add-member-content"
                placement="bottom-end"
                target="addmember"
            >
                <PopoverBody style={{ minWidth: "170px" }}>
                    {members &&
                        members.map((member, i) => {
                            return (
                                <div className="roy-menu-list" key={i}>
                                    <div
                                        className="add-member-list"
                                        onClick={() =>
                                            selectMemberHandler(member)
                                        }
                                    >
                                        <div className="member-pics">
                                            <img src={member.pics} alt="" />
                                        </div>
                                        <div className="flex-1">
                                            {member.first + " " + member.last}
                                        </div>
                                        {ids.includes(member.id) && (
                                            <div>
                                                <i
                                                    className={classNames(
                                                        "fas fa-check-double",
                                                        "ml-15"
                                                    )}
                                                ></i>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </PopoverBody>
            </UncontrolledPopover>
        </div>
    );
};

export default AddMember;
