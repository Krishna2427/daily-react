// src/store/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
    todos: [],
};

// Create a slice for todos
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload); // Add todo to the state
        },
        removeTodo: (state, action) => {
            state.todos.splice(action.payload, 1); // Remove todo by index
        },
    },
});

// Export actions to be used in components
export const { addTodo, removeTodo } = todoSlice.actions;

// Create and configure the store
const store = configureStore({
    reducer: {
        todos: todoSlice.reducer, // Add the reducer from the slice
    },
});

// Export the store
export default store;
