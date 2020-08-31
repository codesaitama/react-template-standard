import React, { useState, useRef } from 'react';

const BoardCardAdder = props => {
    const [addCardFlag, setAddCardFlag] = useState(false);
    const [cardInput, setCardInput] = useState("");
    const textArea = useRef(null);
    const {addNewCardHandler} = props

    const addNewCard = () => {
        addNewCardHandler({
            title: cardInput
        }, () => {
            setCardInput("");
            textArea.current.focus();
        })
       
    }

    const closeAddingCard = () => {
        if (cardInput === "") {
            setAddCardFlag(!addCardFlag);
        }
    };


    return (
        <div>
        <div>
            {!addCardFlag ? (
                <div
                    className="add-subtask-block add-card-block roe-box-shadow"
                    onClick={() =>
                        setAddCardFlag(
                            true
                        )
                    }
                >
                    <i className="fas fa-plus"></i>
                    Add a new Card
                </div>
            ) : (
                <div className="add-comment-input-block add-card-block roe-box-shadow">
                    <textarea
                        ref={textArea}
                        value={
                            cardInput
                        }
                        autoFocus
                        className="add-subtask-input"
                        name="taskTitle"
                        rows="2"
                        onChange={e =>
                            setCardInput(
                                e.target
                                    .value
                            )
                        }
                        onBlur={
                            closeAddingCard
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
                                    addNewCard();
                                }
                            }
                        }}
                    ></textarea>
                    <div className="subtask-action">
                        <button
                            className="c-btn c-success mr-10"
                            onClick={
                                addNewCard
                            }
                        >
                            Add Card
                        </button>
                        <button
                            className="c-btn c-danger"
                            onClick={() =>
                                setAddCardFlag(
                                    false
                                )
                            }
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default BoardCardAdder;