import React, { Fragment, useState, useEffect, useRef } from "react";
import PageTitle from "components/common/PageTitle";
import { connect } from "react-redux";
import ScrumboardWrapper from "components/scrumboard/scrumboard.style";
import { boardsData } from "util/data/boardData";
import Button from "components/button/Button";
import { boardObject } from "components/scrumboard/boardHelper";
import { randomUUID } from "helper/methods";
import scrumActions from "redux/scrumboard/actions";
import BoardList from "components/scrumboard/BoardList";

const { updateBoards } = scrumActions;

const Scrumboard = props => {
    const [isAddBoard, setIsAddBoard] = useState(false);
    const [boardInput, setBoardInput] = useState("");
    const textArea = useRef(null);

    const { boards } = props;

    const FavouriteBoard = boards.filter(b => b.isFav);

    useEffect(() => {
        if (boards && boards.length === 0) {
            props.updateBoards(boardsData);
        }
    }, [boards, props]);

    const addNewBoard = () => {
        boardObject["id"] = randomUUID();
        boardObject["title"] = boardInput;
        const board = {...boardObject}
        board.cards[0]['board_id'] = boardObject.id
        board.cards[1]['board_id'] = boardObject.id
        board.cards[2]['board_id'] = boardObject.id
        const allboards = [...boards, { ...board }];
        console.log('allboards', allboards)
        props.updateBoards(allboards);
        setBoardInput("");
        textArea.current.focus();
    };

    const closeAddingBoard = () => {
        if (boardInput === "") {
            setIsAddBoard(!isAddBoard);
        }
    };

    const gotoBoard = id => {
        props.history.push(`/scrumboard/board/${id}`);
    };

    const editBoardHandler = obj => {
        const boardList = boards;
        let index = boardList.findIndex(board => board.id === obj.id);
        const updatedData = {
            ...boardList[index],
            ...obj
        };
        boardList.splice(index, 1, updatedData);
        props.updateBoards(boardList);
    };

    const deleteBoardHandler = id => {
        const newList = boards.filter(board => board.id !== id);
        props.updateBoards(newList);
    };

    const toggleFavBoardHandler = id => {
        const boardList = boards;
        let index = boardList.findIndex(board => board.id === id);
        const updatedData = {
            ...boardList[index],
            isFav: !boardList[index].isFav
        };
        boardList.splice(index, 1, updatedData);
        props.updateBoards(boardList);
    };

    return (
        <ScrumboardWrapper {...props}>
            <div>
                <PageTitle
                    title="sidebar.scrumboard"
                    className="plr-15"
                    breadCrumb={[
                        {
                            name: "sidebar.app"
                        },
                        {
                            name: "sidebar.scrumboard"
                        }
                    ]}
                />
                <div>
                    {(FavouriteBoard && FavouriteBoard.length) ? (
                        <Fragment>
                            <div className="fs-20 bold-text ml-15 pb-15 board-type-head" style={{marginTop: '-15px'}}>
                                Favourite Boards
                            </div>
                            <div className="row ma-0">
                                {FavouriteBoard.map((board, i) => {
                                    return (
                                        <BoardList
                                            key={i}
                                            unique="fav"
                                            gotoBoard={gotoBoard}
                                            board={board}
                                            editBoardHandler={editBoardHandler}
                                            deleteBoardHandler={
                                                deleteBoardHandler
                                            }
                                            toggleFavBoardHandler={
                                                toggleFavBoardHandler
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </Fragment>
                    ): <div></div> }

                    <div className="fs-20 bold-text ml-15 pb-15 board-type-head">
                        Personal Boards
                    </div>
                    <div className="row ma-0">
                        {boards.map((board, i) => {
                            return (
                                <BoardList
                                    key={i}
                                    unique="personal"
                                    gotoBoard={gotoBoard}
                                    board={board}
                                    editBoardHandler={editBoardHandler}
                                    deleteBoardHandler={deleteBoardHandler}
                                    toggleFavBoardHandler={
                                        toggleFavBoardHandler
                                    }
                                />
                            );
                        })}
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-15 ">
                            <div className="whitelight pa-24 cursor-pointer with-transition roe-box-shadow">
                                <div className="board">
                                    <div className="overlay flex-x center">
                                        <div>
                                            <div className="text-center">
                                                {isAddBoard ? (
                                                    <div>
                                                        <input
                                                            ref={textArea}
                                                            autoFocus
                                                            value={boardInput}
                                                            onChange={e =>
                                                                setBoardInput(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            className="board-name-input fs-14 demi-bold-text"
                                                            type="text"
                                                            placeholder="Add Board Name"
                                                            onBlur={
                                                                closeAddingBoard
                                                            }
                                                            onKeyPress={event => {
                                                                if (
                                                                    event.key ===
                                                                    "Enter"
                                                                ) {
                                                                    if (
                                                                        !event.shiftKey
                                                                    ) {
                                                                        event.preventDefault();
                                                                        addNewBoard();
                                                                    }
                                                                }
                                                            }}
                                                        />
                                                        <Button
                                                            className="c-btn ma-5 c-success whitelight--text fs-14 demi-bold-text mt-10"
                                                            onClick={
                                                                addNewBoard
                                                            }
                                                        >
                                                            Add Board
                                                        </Button>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="fs-20 bold-text board-list-title"
                                                        onClick={() =>
                                                            setIsAddBoard(true)
                                                        }
                                                    >
                                                        <i className="fas fa-plus"></i>{" "}
                                                        New Board
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrumboardWrapper>
    );
};

const mapStateToProps = state => {
    return {
        ...state.themeChanger,
        boards: state.scrumboard.boards
    };
};

export default connect(
    mapStateToProps,
    {
        updateBoards
    }
)(Scrumboard);
