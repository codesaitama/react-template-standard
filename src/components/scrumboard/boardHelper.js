import last from "lodash/last";
import head from "lodash/head";
import findLastIndex from "lodash/findLastIndex";
import orderBy from "lodash/orderBy";
import RandomPosition from "random-position";
import {
    people1,
    people2,
    people3,
    people4,
    people5,
    people6,
    people7,
    people8,
    people9,
    people10,
    people11,
    people12,
    people13,
    people14,
    people15,
} from "./../../helper/constant";
import { randomUUID } from "helper/methods";

export const boardObject = {
    id: "",
    title: "",
    cards: [
        {
            board_id: 10,
            id: randomUUID(),
            sequence: "{",
            title: "DO",
            user_id: 263
        },
        {
            board_id: 10,
            id: randomUUID(),
            sequence: "|",
            title: "In Working",
            user_id: 264
        },
        {
            board_id: 10,
            id: randomUUID(),
            sequence: "}",
            title: "Done",
            user_id: 265
        }
    ],
    tasks: [],
    isFav: false
};

export const taskObject = {
    id: "",
    completed: false,
    card_id: "",
    sequence: "",
    cover: "",
    title: "",
    labels: [
        {
            color: "label3",
            id: 3,
            name: "Label 3"
        }
    ],
    members: [],
    owner: {},
    subtasks: [],
    attachments: []
};

export const subTaskObject = {
    id: "",
    title: "",
    completed: false,
    ticket: "",
    comments: []
};

export const commentObject = {
    id: "",
    pics: people2,
    first: "Arezio",
    last: "Aurechio",
    created: new Date(),
    comment: ""
};

export const cardObject = {
    board_id: "",
    id: "",
    sequence: "",
    title: "",
    user_id: ""
};

export const allLabels = [
    {
        id: 1,
        name: 'Label 1',
        color: 'label1'
    },
    {
        id: 2,
        name: 'Label 2',
        color: 'label2'
    },
    {
        id: 3,
        name: 'Label 3',
        color: 'label3'
    },
    {
        id: 4,
        name: 'Label 4',
        color: 'label4'
    },
    {
        id: 5,
        name: 'Label 5',
        color: 'label5'
    },
    {
        id: 6,
        name: 'Label 6',
        color: 'label6'
    }
]

export const allMembers = [
    {
        pics: people1,
        first: "Pedro",
        last: "Araez",
        id: 1
    },
    {
        pics: people2,
        first: "Arezio",
        last: "Aurechio",
        id: 2
    },
    {
        pics: people3,
        first: "Jules",
        last: "Boutin",
        id: 3
    },
    {
        pics: people4,
        first: "Kusti",
        last: "Franti",
        id: 4
    },
    {
        pics: people5,
        first: "Odilian",
        last: "Gosselin",
        id: 5
    },
    {
        pics: people6,
        first: "Walter",
        last: "Hucko",
        id: 6
    },
    {
        pics: people7,
        first: "Argele",
        last: "Intili",
        id: 7
    },
    {
        pics: people8,
        first: "Henry",
        last: "Jurk",
        id: 8
    },
    {
        pics: people9,
        first: "David",
        last: "King",
        id: 9
    },
    {
        pics: people10,
        first: "John",
        last: "Klok",
        id: 10
    },
    {
        pics: people11,
        first: "Fidel",
        last: "Martin",
        id: 11
    },
    {
        pics: people12,
        first: "Attilio",
        last: "Marzi",
        id: 12
    },
    {
        pics: people13,
        first: "Gurt",
        last: "Mistrioty",
        id: 13
    },
    {
        pics: people14,
        first: "Michael",
        last: "Myatowych",
        id: 14
    },
    {
        pics: people15,
        first: "Joseph",
        last: "Rossignol",
        id: 15
    }
]

export const cardSequenceGenerator = async (
    { currentIndex, futureIndex },
    cards
) => {
    let newIndex;
    if (futureIndex === 0) {
        newIndex = RandomPosition.between(
            RandomPosition.first(),
            cards[0].sequence
        );
        return newIndex;
    } else if (futureIndex === findLastIndex(cards)) {
        newIndex = RandomPosition.between(
            last(cards).sequence,
            RandomPosition.last()
        );
        return newIndex;
    } else if (
        futureIndex < currentIndex &&
        futureIndex !== 0 &&
        futureIndex !== findLastIndex(cards)
    ) {
        let ref = futureIndex - 1;
        newIndex = RandomPosition.between(
            cards[ref].sequence,
            cards[futureIndex].sequence
        );
        return newIndex;
    } else if (
        futureIndex > currentIndex &&
        futureIndex !== 0 &&
        futureIndex !== findLastIndex(cards)
    ) {
        let ref = futureIndex + 1;
        newIndex = RandomPosition.between(
            cards[futureIndex].sequence,
            cards[ref].sequence
        );
        return newIndex;
    }
};

export const taskSequenceGenerator = async (args, cardTasks) => {
    let newIndex;
    let targetTaskSlot;
    let { eleCardId, currentIndex, futureIndex, cardId, completed } = args;
    const cardTasksvar = cardTasks[cardId]
        ? orderBy(cardTasks[cardId], ["sequence"], ["asc"])
        : undefined;

    if (eleCardId !== cardId) {
        if (completed) {
            targetTaskSlot = cardTasksvar;
        } else {
            targetTaskSlot = cardTasksvar
                ? cardTasksvar.filter(task => !task.completed)
                : cardTasksvar;
        }
        const targetTaskSlotOrdered = targetTaskSlot
            ? orderBy(targetTaskSlot, ["sequence"], ["asc"])
            : targetTaskSlot;
        if (
            targetTaskSlotOrdered === undefined ||
            targetTaskSlotOrdered.length === 0
        ) {
            return RandomPosition.between(
                RandomPosition.first(),
                RandomPosition.last()
            );
        } else {
            const cardLastIndex = findLastIndex(targetTaskSlotOrdered);
            const beforefutureIndex = futureIndex - 1;
            if (futureIndex > cardLastIndex) {
                return RandomPosition.between(
                    targetTaskSlotOrdered[cardLastIndex].sequence,
                    RandomPosition.last()
                );
            } else if (futureIndex === 0) {
                return RandomPosition.between(
                    RandomPosition.first(),
                    targetTaskSlotOrdered[0].sequence
                );
            } else {
                return RandomPosition.between(
                    targetTaskSlotOrdered[beforefutureIndex].sequence,
                    targetTaskSlotOrdered[futureIndex].sequence
                );
            }
        }
    } else {
        if (completed) {
            targetTaskSlot = cardTasksvar
                ? cardTasksvar.filter(task => task.completed)
                : cardTasksvar;
        } else {
            targetTaskSlot = cardTasksvar
                ? cardTasksvar.filter(task => !task.completed)
                : cardTasksvar;
        }
        const targetTaskSlotOrdered = targetTaskSlot
            ? orderBy(targetTaskSlot, ["sequence"], ["asc"])
            : targetTaskSlot;
        if (futureIndex === 0) {
            const newIndex = RandomPosition.between(
                RandomPosition.first(),
                targetTaskSlotOrdered[0].sequence
            );
            return newIndex;
        } else if (futureIndex === findLastIndex(targetTaskSlotOrdered)) {
            newIndex = RandomPosition.between(
                last(targetTaskSlotOrdered).sequence,
                RandomPosition.last()
            );
            return newIndex;
        } else if (
            futureIndex < currentIndex &&
            futureIndex !== 0 &&
            futureIndex !== findLastIndex(cardTasksvar)
        ) {
            let ref = futureIndex - 1;
            newIndex = RandomPosition.between(
                targetTaskSlotOrdered[ref].sequence,
                targetTaskSlotOrdered[futureIndex].sequence
            );
            return newIndex;
        } else if (
            futureIndex > currentIndex &&
            futureIndex !== 0 &&
            futureIndex !== findLastIndex(targetTaskSlotOrdered)
        ) {
            let ref = futureIndex + 1;
            newIndex = RandomPosition.between(
                targetTaskSlotOrdered[futureIndex].sequence,
                targetTaskSlotOrdered[ref].sequence
            );
            return newIndex;
        }
    }
};

export const addNewTaskSequence = (task, cardTasks) => {
    task["sequencePosition"] = "bottom";
    const cardTasksVar = cardTasks[task.card_id];
    const activeTasks = cardTasksVar
        ? cardTasksVar.filter(task => !task.completed)
        : cardTasksVar;
    const activeTasksOrdered = activeTasks
        ? orderBy(activeTasks, ["sequence"], ["asc"])
        : activeTasks;
    let sequence;
    if (activeTasksOrdered === undefined) {
        if (task.sequencePosition === "top") {
            sequence = activeTasksOrdered
                ? RandomPosition.between(
                    RandomPosition.first(),
                    head(activeTasksOrdered).sequence
                )
                : RandomPosition.between(
                    RandomPosition.first(),
                    RandomPosition.last()
                );
            return sequence;
        } else {
            sequence = activeTasksOrdered
                ? RandomPosition.between(
                    last(activeTasksOrdered).sequence,
                    RandomPosition.last()
                )
                : RandomPosition.between(
                    RandomPosition.first(),
                    RandomPosition.last()
                );
            return sequence;
        }
    } else {
        if (task.sequencePosition === "top") {
            sequence =
                activeTasksOrdered.length > 0
                    ? RandomPosition.between(
                        RandomPosition.first(),
                        head(activeTasksOrdered).sequence
                    )
                    : RandomPosition.between(
                        RandomPosition.first(),
                        RandomPosition.last()
                    );
            return sequence;
        } else {
            sequence =
                activeTasksOrdered.length > 0
                    ? RandomPosition.between(
                        last(activeTasksOrdered).sequence,
                        RandomPosition.last()
                    )
                    : RandomPosition.between(
                        RandomPosition.first(),
                        RandomPosition.last()
                    );
            return sequence;
        }
    }
};

export const newCardSequence = (cards) => {
    const sequence =
        cards && cards.length > 0
            ? RandomPosition.between(
                last(cards).sequence,
                RandomPosition.last()
            )
            : RandomPosition.between(
                RandomPosition.first(),
                RandomPosition.last()
            );

    return sequence;
}
