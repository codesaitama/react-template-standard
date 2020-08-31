// Todos reducers provides exported initial state and reducer function
import { listNames, todosData } from "util/data/todoData";

const initialActiveSideList = {
  id: null,
  title: "My Day"
};

export const initialState = {
  todos: todosData,
  lists: listNames,
  todoDialog: false,
  activeTodoId: null,
  activeSideList: initialActiveSideList,
  todoDrawer: false,
  hideCompletedTask: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTodoDialog":
      return {
        ...state,
        activeTodoId: !state.todoDialog ? action.activeTodoId : null,
        todoDialog: !state.todoDialog
      };
    case "toggleTodoDrawer":
      return {
        ...state,
        todoDrawer: !state.todoDrawer
      };
    case "toggleHideCompletedTask":
      return {
        ...state,
        hideCompletedTask: !state.hideCompletedTask
      };
    case "addSideList":
      return {
        ...state,
        lists: [...state.lists, action.data]
      };
    case "changeTodoCompleteStatus":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              isComplete: action.isComplete
            };
          }
          return todo;
        })
      };
    case "changeTodoBookmarkStatus":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              isBookmark: !todo.isBookmark
            };
          }
          return todo;
        })
      };
    case "changeTodoImportantStatus":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              isImportant: !todo.isImportant
            };
          }
          return todo;
        })
      };
    case "addTaskHandler":
      return {
        ...state,
        todos: [...state.todos, action.data]
      };
    case "deleteTask":
      return {
        ...state,
        todoDialog: false,
        activeTodoId: null,
        todos: state.todos.filter(a => a.id !== action.todoId)
      };
    case "changeTaskNote":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              notes: action.notes
            };
          }
          return todo;
        })
      };
    case "changeTaskDueDate":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              dueDate: action.dueDate
            };
          }
          return todo;
        })
      };
    case "AddTaskToMyday":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              myDay: action.myDay
            };
          }
          return todo;
        })
      };
    case "changeTaskTitle":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              title: action.title
            };
          }
          return todo;
        })
      };
    case "setActiveSidelist":
      return {
        ...state,
        activeSideList: action.data
      };
    case "renameListName":
      return {
        ...state,
        lists: state.lists.map(list => {
          if (list.id === action.id) {
            return {
              ...list,
              title: action.title
            };
          }
          return list;
        })
      };
    case "deleteListName":
      return {
        ...state,
        lists: state.lists.filter(a => a.id !== action.id),
        todos: state.todos.filter(a => a.listId !== action.id),
        activeSideList: initialActiveSideList
      };
    case "changeStepCompleteStatus":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              steps: todo.steps.map(step => {
                if (step.id === action.stepId) {
                  return {
                    ...step,
                    isComplete: action.isComplete
                  };
                } else {
                  return step;
                }
              })
            };
          }
          return todo;
        })
      };
    case "changeStepTitle":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              steps: todo.steps.map(step => {
                if (step.id === action.stepId) {
                  return {
                    ...step,
                    title: action.title
                  };
                } else {
                  return step;
                }
              })
            };
          }
          return todo;
        })
      };
    case "deleteStepHandler":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              steps: todo.steps.filter(a => a.id !== action.stepId)
            };
          }
          return todo;
        })
      };
    case "addStep":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.todoId) {
            return {
              ...todo,
              steps: [...todo.steps, action.step]
            };
          }
          return todo;
        })
      };
    default:
      return state;
  }
};
