import React, { useMemo, useState, useRef, useEffect } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import orderBy from "lodash/orderBy";
import groupBy from "lodash/groupBy";
import { Popover, PopoverBody } from "reactstrap";
import CardTask from "./CardTask";
import { taskObject } from "components/scrumboard/boardHelper";
import classNames from "classnames";

const BoardCard = props => {
    const [cardMenu, setCardMenu] = useState(false);
    const [addCardFlag, setAddCardFlag] = useState(false);
    const [cardTitleInput, setCardTitleInput] = useState("");
    const textArea = useRef(null);
    const scrollRef = useRef(null);

    const {
        card,
        droppableId,
        tasks,
        index,
        addNewTaskHandler,
        openTaskDialogHandler,
        deleteTaskHandler,
        deleteCardHandler,
        deleteAllTaksFromCardHandler
    } = props;
    const visibility = "active";

    const filteredTasks = useMemo(() => {
        const taskGroup = groupBy(tasks, "completed");
        let key;

        switch (visibility) {
            case "active":
                key = false;
                break;
            default:
                key = true;
                break;
        }

        return orderBy(taskGroup[key], ["sequence"]);
    }, [tasks]);

    useEffect(() => {
        if (addCardFlag) {
            scrollToBottom();
        }
    }, [addCardFlag]);

    const scrollToBottom = () => {
        let element = scrollRef.current;
        element.scrollTop = element.scrollHeight - element.clientHeight;
    };

    const addNewTask = () => {
        const obj = {
            ...taskObject,
            title: cardTitleInput,
            card_id: card.id
        };

        addNewTaskHandler(obj, () => {
            setCardTitleInput("");
            textArea.current.focus();
            setTimeout(() => {
                scrollToBottom();
            }, 200);
        });
    };

    const closeAddingTask = () => {
        if (cardTitleInput === "") {
            setAddCardFlag(!addCardFlag);
        }
    };

    return (
        <Draggable draggableId={droppableId} index={index} type="card">
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className="board-card roe-box-shadow"
                >
                    <div {...provided.dragHandleProps}>
                        <div className="column-title">
                            <div
                                title={card.title}
                                className="title fs-16 bold-text"
                            >
                                {card.title}
                            </div>
                            <div className="more_icon">
                                <i
                                    className="fas fa-ellipsis-h"
                                    id={"card-" + card.id}
                                ></i>
                                <Popover
                                    trigger="legacy"
                                    className="roy-menu"
                                    innerClassName="roy-inner-content"
                                    placement="bottom-end"
                                    isOpen={cardMenu}
                                    target={"card-" + card.id}
                                    toggle={() => setCardMenu(!cardMenu)}
                                >
                                    <PopoverBody>
                                        <div
                                            className="roy-menu-list"
                                            onClick={() =>
                                                deleteAllTaksFromCardHandler(
                                                    card.id
                                                )
                                            }
                                        >
                                            Delete All Task
                                        </div>
                                        <div
                                            className="roy-menu-list"
                                            onClick={() =>
                                                deleteCardHandler(card.id)
                                            }
                                        >
                                            Delete Card
                                        </div>
                                    </PopoverBody>
                                </Popover>
                            </div>
                        </div>
                    </div>
                    <Droppable
                        droppableId={droppableId}
                        type="task"
                        direction="vertical"
                    >
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}>
                                <div
                                    ref={scrollRef}
                                    style={{ padding: "0 8px", width: 250 }}
                                    className={classNames(
                                        "board-card-scroll",
                                        addCardFlag && "board-card-height"
                                    )}
                                >
                                    {filteredTasks && filteredTasks.length ? (
                                        filteredTasks.map((task, index) => {
                                            return (
                                                <CardTask
                                                    index={index}
                                                    key={task.id}
                                                    task={task}
                                                    tasks={tasks}
                                                    openTaskDialogHandler={
                                                        openTaskDialogHandler
                                                    }
                                                    deleteTaskHandler={
                                                        deleteTaskHandler
                                                    }
                                                />
                                            );
                                        })
                                    ) : (
                                        <div
                                            style={{ minHeight: "25px" }}
                                        ></div>
                                    )}
                                    {provided.placeholder}
                                </div>
                            </div>
                        )}
                    </Droppable>
                    {!addCardFlag ? (
                        <div
                            className="add-task-block fs-14 demi-bold-text"
                            onClick={() => setAddCardFlag(true)}
                        >
                            <i className="fas fa-plus"></i>Add a new Task
                        </div>
                    ) : (
                        <div className="add-card-input-block">
                            <textarea
                                ref={textArea}
                                value={cardTitleInput}
                                autoFocus
                                className="add-card-input"
                                name="taskTitle"
                                rows="2"
                                onChange={e =>
                                    setCardTitleInput(e.target.value)
                                }
                                onBlur={closeAddingTask}
                                onKeyPress={event => {
                                    if (event.key === "Enter") {
                                        if (!event.shiftKey) {
                                            event.preventDefault();
                                            addNewTask();
                                        }
                                    }
                                }}
                            ></textarea>
                            <div className="action">
                                <button
                                    className="c-btn c-success mr-10"
                                    onClick={addNewTask}
                                >
                                    Add Card
                                </button>
                                <button
                                    className="c-btn c-danger"
                                    onClick={() => setAddCardFlag(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </Draggable>
    );
};

export default BoardCard;
