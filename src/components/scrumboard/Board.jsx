import React, { useState, useMemo, useEffect } from "react";
import BoardCard from "components/scrumboard/BoardCard";
import ScrumboardWrapper from "components/scrumboard/scrumboard.style";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { boardsData } from "util/data/boardData";
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";
import groupBy from "lodash/groupBy";
import {
    cardSequenceGenerator,
    taskSequenceGenerator,
    addNewTaskSequence,
    newCardSequence,
    cardObject
} from "components/scrumboard/boardHelper";
import { randomUUID } from "helper/methods";
import TaskDialog from "components/scrumboard/TaskDialog";
import BoardCardAdder from "components/scrumboard/BoardCardAdder"
import scrumActions from "redux/scrumboard/actions";

const { updateBoards } = scrumActions;


const Board = (props) => {
    const [activeBoard, setActiveBoard] = useState(null)
    const [tasks, setTasks] = useState(boardsData[0].tasks);
    const [cards, setCards] = useState(boardsData[0].cards);
    const [taskModel, setTaskModel] = useState(false);
    const [activeTaskDetail, setActiveTaskDetail] = useState(null);
    const boardCards = useMemo(
        () => orderBy(uniqBy(cards, "id"), ["sequence"], ["asc"]),
        [cards]
    );
    const cardTasks = useMemo(() => groupBy(uniqBy(tasks, "id"), "card_id"), [
        tasks
    ]);
    const {boards} = props

    useEffect(() => {
        const activeBoard = boards.find(a => String(a.id) === props.match.params.id)
        if(activeBoard) {
            setActiveBoard(activeBoard)
            setTasks(activeBoard.tasks)
            setCards(activeBoard.cards)
        } else {
            setActiveBoard(boardsData[0])
            setTasks(boardsData[0].tasks)
            setCards(boardsData[0].cards)
        }
    }, [boards, props.match.params.id])

    useEffect(() => {
        // Open Task Dialog When active task found
        if (activeTaskDetail !== null) {
            setTaskModel(true);
        }
    }, [activeTaskDetail]);

    useEffect(() => {
        // Reset Active task data on close task model
        if (taskModel === false) {
            setActiveTaskDetail(null);
        }
    }, [taskModel]);

    const openTaskDialogHandler = task => {
        setActiveTaskDetail(task);
    };

    const updateTaskSequence = data => {
        // You can call Api and update your task sequence
        const alltasks = tasks;
        let index = alltasks.findIndex(task => task.id === data.id);
        alltasks.splice(index, 1, { ...alltasks[index], ...data });
        setTasks([...alltasks]);
    };

    const updateCardSequence = data => {
        // You can call Api and update your card sequence
        const allCards = cards;
        let index = allCards.findIndex(task => task.id === data.id);
        allCards.splice(index, 1, { ...allCards[index], ...data });
        setCards([...allCards]);
    };

    const onDragEnd = async result => {
        const { source, destination, draggableId } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        if (result.type === "task") {
            const req = {
                id: draggableId,
                eleCardId: source.droppableId,
                currentIndex: source.index,
                futureIndex: destination.index,
                cardId: destination.droppableId,
                completed: false
            };
            const sequence = await taskSequenceGenerator(req, cardTasks);
            updateTaskSequence({
                id: draggableId,
                card_id: destination.droppableId,
                sequence
            });
        }

        // reordering card
        if (result.type === "card") {
            const req = {
                id: draggableId,
                currentIndex: source.index,
                futureIndex: destination.index
            };
            const sequence = await cardSequenceGenerator(req, boardCards);
            updateCardSequence({
                id: draggableId,
                sequence
            });
        }
    };

    const addNewTaskHandler = (data, callback) => {
        // Add task Handler you can make API call here for adding task
        const generateId = randomUUID();
        const sequence = addNewTaskSequence(data, cardTasks);
        setTasks(prevTasks => [
            ...prevTasks,
            { ...data, sequence, id: generateId }
        ]);
        // This call back just for complete the adding task process and set flag in board card.jsx
        callback();
    };

    const deleteTaskHandler = task => {
        // Delete task Handler you can make API call here for deleting task
        const filterTask = tasks.filter(a => a.id !== task.id);
        setTasks([...filterTask]);
    };

    const addNewSubtaskHandler = (subtask, taskId) => {
        // Add Subtask Handler you can make API call here for adding subtask
        const alltasks = tasks;
        let index = alltasks.findIndex(task => task.id === taskId);
        const oldSubtask = alltasks[index].subtasks
        alltasks[index].subtasks = [...oldSubtask, subtask]
        setTasks([...alltasks]);
        setActiveTaskDetail({...alltasks[index]})
    };

    const deleteSubtaskHandler = (subtaskId, taskId) => {
        // Delete Subtask Handler you can make API call here for deleting subtask
        const alltasks = tasks;
        let index = alltasks.findIndex(task => task.id === taskId);
        const allSubtask = alltasks[index].subtasks.filter(
            a => a.id !== subtaskId
        );
        alltasks[index].subtasks = allSubtask;
        setTasks([...alltasks]);
    };

    const changeStatusOfSubtaskHandler = (subtaskId, taskId) => {
        const alltasks = tasks;
        let taskIndex = alltasks.findIndex(task => task.id === taskId);
        let subtaskIndex = alltasks[taskIndex].subtasks.findIndex(
            a => a.id === subtaskId
        );
        alltasks[taskIndex].subtasks[subtaskIndex].completed = !alltasks[
            taskIndex
        ].subtasks[subtaskIndex].completed;
        setTasks([...alltasks]);
    };

    const addCommentHandler = (commentObj, subtaskId, taskId) => {
        const alltasks = tasks;
        let taskIndex = alltasks.findIndex(task => task.id === taskId);
        let subtaskIndex = alltasks[taskIndex].subtasks.findIndex(
            a => a.id === subtaskId
        );
        alltasks[taskIndex].subtasks[subtaskIndex].comments.push(commentObj);
        setTasks([...alltasks]);
    };

    const addNewCardHandler = ({title}, cb) => {
        const newSequence = newCardSequence(boardCards)
        cardObject['title'] = title;
        cardObject['board_id'] = 10;
        cardObject['id'] = randomUUID();
        cardObject['user_id'] = randomUUID();
        cardObject['sequence'] = newSequence;
        let data = {...cardObject}
        setCards(preCards => [...preCards, data]);
        cb()
    }

    const deleteCardHandler = (id) => {
        // Delete Card Handler you can make API call here for deleting Card
        const filterCard = cards.filter(a => a.id !== id);
        setCards([...filterCard]);
    }

    const deleteAllTaksFromCardHandler = (id) => {
        // Delete All tasks from card Handler you can make API call here for deleting all tasks from perticuler card
        const filterTasks = tasks.filter(a => a.card_id !== id);
        setTasks([...filterTasks]);
    }

    const selectLabelHandler = (label, taskId) => {
        const alltasks = tasks;
        let taskIndex = alltasks.findIndex(task => task.id === taskId);
        const oldTask = alltasks[taskIndex]
        const oldlabels = oldTask.labels
        if(oldlabels.map(a => a.id).includes(label.id)) {
            //  If Already label of this task then remove
            const labels = oldlabels.filter(a => a.id !== label.id)
            alltasks.splice(taskIndex, 1, { ...alltasks[taskIndex], labels });
            setTasks([...alltasks]);
            setActiveTaskDetail({...activeTaskDetail, labels})
        } else {
              //  Add the label
            const labels = [...oldlabels, label]
            alltasks.splice(taskIndex, 1, { ...alltasks[taskIndex], labels });
            setTasks([...alltasks]);
            setActiveTaskDetail({...activeTaskDetail, labels})
        }
    }

    const selectMemberHandler = (member, taskId) => {
        const alltasks = tasks;
        let taskIndex = alltasks.findIndex(task => task.id === taskId);
        const oldTask = alltasks[taskIndex]
        const oldmembers = oldTask.members
        if(oldmembers.map(a => a.id).includes(member.id)) {
            //  If Already Member of this task then remove
            const members = oldmembers.filter(a => a.id !== member.id)
            alltasks.splice(taskIndex, 1, { ...alltasks[taskIndex], members });
            setTasks([...alltasks]);
            setActiveTaskDetail({...activeTaskDetail, members})
        } else {
            //  If not part of Member of this task then add it
            const members = [...oldmembers, member]
            alltasks.splice(taskIndex, 1, { ...alltasks[taskIndex], members });
            setTasks([...alltasks]);
            setActiveTaskDetail({...activeTaskDetail, members})
        }
    }

    return (
        <ScrumboardWrapper {...props}>
            <div className="flex-y">
                <div className="mlr-8 flex-x board-toolbar pa-10">
                    <div className="fs-16 bold-text board-title flex-1">
                        <i className="fas fa-briefcase mr-10"></i>{activeBoard && activeBoard.title}
                    </div>
                    <div className="fs-16 bold-text cursor-pointer board-action" onClick={() => props.history.push('/scrumboard')}>
                        <i className="fas fa-fast-backward"></i> All Boards 
                    </div>
                </div>
                <div className="flex-1">
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable
                            droppableId="card"
                            type="card"
                            direction="horizontal"
                        >
                            {provided => (
                                <div
                                    ref={provided.innerRef}
                                    className="scrum-board"
                                >
                                    {boardCards &&
                                        boardCards.map((card, index) => {
                                            return (
                                                <BoardCard
                                                    key={card.id}
                                                    index={index}
                                                    droppableId={card.id}
                                                    card={card}
                                                    tasks={cardTasks[card.id]}
                                                    openTaskDialogHandler={
                                                        openTaskDialogHandler
                                                    }
                                                    addNewTaskHandler={(data, cb) =>
                                                        addNewTaskHandler(data, cb)
                                                    }
                                                    deleteTaskHandler={
                                                        deleteTaskHandler
                                                    }
                                                    deleteCardHandler={ deleteCardHandler }
                                                    deleteAllTaksFromCardHandler={deleteAllTaksFromCardHandler}
                                                />
                                            );
                                        })}
                                    {provided.placeholder}

                                    <BoardCardAdder
                                        addNewCardHandler={addNewCardHandler}
                                    />
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
            {activeTaskDetail && (
                <TaskDialog
                    taskModel={taskModel}
                    setTaskModel={() => setTaskModel(!taskModel)}
                    taskDetail={activeTaskDetail}
                    addNewSubtaskHandler={addNewSubtaskHandler}
                    deleteSubtaskHandler={deleteSubtaskHandler}
                    changeStatusOfSubtaskHandler={changeStatusOfSubtaskHandler}
                    addCommentHandler={addCommentHandler}
                    selectLabelHandler={selectLabelHandler}
                    selectMemberHandler={selectMemberHandler}
                />
            )}
        </ScrumboardWrapper>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.themeChanger,
        boards: state.scrumboard.boards
    };
}
  
export default connect(mapStateToProps, {
    updateBoards
})(Board);
