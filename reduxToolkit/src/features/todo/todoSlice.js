import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "Hello World!"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const index = state.todos.findIndex(
                (todo) => todo.id === action.payload
            )
            if (index !== -1) {
                state.todos.splice(index, 1)
            }
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;