import React, { useState } from "react";
import { Popover, PopoverBody } from "reactstrap";
import Button from "components/button/Button";

const BoardList = ({
    board,
    gotoBoard,
    unique,
    editBoardHandler,
    deleteBoardHandler,
    toggleFavBoardHandler
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [optionMenu, setOptionMenu] = useState(false);
    const [boardInput, setBoardInput] = useState("");

    const closeAddingBoard = () => {
        if (boardInput === "") {
            setIsEdit(!isEdit);
        }
    };

    const activeEdit = e => {
        e.stopPropagation();
        setIsEdit(true);
        setOptionMenu(!optionMenu);
        setBoardInput(board.title);
    };

    const editBoard = () => {
        if (boardInput !== "") {
            const obj = {
                id: board.id,
                title: boardInput
            };
            editBoardHandler(obj);
            setBoardInput("");
            setIsEdit(false);
        }
    };

    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-15">
            <div
                className="whitelight pa-24 cursor-pointer with-transition roe-box-shadow pos-relative board-grid"
                onClick={() => {
                    if (!isEdit) {
                        gotoBoard(board.id);
                    }
                }}
            >
                <div className="more_icon board-more-option">
                    <button
                        id={`board-${unique}-${board.id}`}
                        onClick={e => e.stopPropagation()}
                        className="transparent-button"
                    >
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                    <Popover
                        trigger="legacy"
                        className="roy-menu"
                        innerClassName="roy-inner-content"
                        placement="bottom-end"
                        target={`board-${unique}-${board.id}`}
                        isOpen={optionMenu}
                        toggle={() => setOptionMenu(!optionMenu)}
                    >
                        <PopoverBody>
                            <div className="roy-menu-list" onClick={activeEdit}>
                                Edit Board
                            </div>
                            <div
                                className="roy-menu-list"
                                onClick={e => {
                                    e.stopPropagation();
                                    deleteBoardHandler(board.id);
                                }}
                            >
                                Delete Board
                            </div>
                            <div
                                className="roy-menu-list"
                                onClick={e => {
                                    e.stopPropagation();
                                    toggleFavBoardHandler(board.id);
                                }}
                            >
                                {board.isFav
                                    ? "Remove Favourite"
                                    : "Add Favourite"}
                            </div>
                        </PopoverBody>
                    </Popover>
                </div>
                <div className="board">
                    <div className="overlay flex-x center">
                        <div className="text-center">
                            {/* <div className="fs-20 bold-text px15 text-center" style={{ wordBreak: 'break-all', padding: '0px 15px' }}>
                                {board.title}
                            </div> */}
                            {isEdit ? (
                                <div>
                                    <input
                                        autoFocus
                                        value={boardInput}
                                        onChange={e =>
                                            setBoardInput(e.target.value)
                                        }
                                        className="board-name-input fs-14 demi-bold-text"
                                        type="text"
                                        placeholder="Add Board Name"
                                        onBlur={closeAddingBoard}
                                        onKeyPress={event => {
                                            if (event.key === "Enter") {
                                                if (!event.shiftKey) {
                                                    event.preventDefault();
                                                    editBoard();
                                                }
                                            }
                                        }}
                                    />
                                    <Button
                                        className="c-btn ma-5 c-success whitelight--text fs-14 demi-bold-text mt-10"
                                        onClick={editBoard}
                                    >
                                        Edit
                                    </Button>
                                </div>
                            ) : (
                                <div
                                    className="fs-20 bold-text px15 board-list-title"
                                    style={{
                                        wordBreak: "break-all",
                                        padding: "0px 15px"
                                    }}
                                >
                                    <div>
                                        <i className="fas fa-chalkboard fs-30 taskboardicons--text"></i>
                                    </div>
                                    {board.title}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoardList;
