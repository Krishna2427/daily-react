import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const apiUrl = 'http://localhost:5000/items';

// thunks for async actions

export const fetchTodo = createAsyncThunk('items/fetchItems', async()=>{
    const response = await axios.get(apiUrl);
    return response.data;
});
export const addTodo = createAsyncThunk('items/addItems', async(newItem)=>{
    const response = await axios.post(apiUrl, newItem);
    return response.data;
})
export const deleteTodo = createAsyncThunk('items/fetchItems', async(id)=>{
     await axios.delete((`${apiUrl}/${id}`));
     return id;
})
export const updateTodo = createAsyncThunk('items/addItems', async(updateTodo)=>{
    const response = await axios.put(`${apiUrl}/${updateTodo.id},${updateTodo}`);
    return response.data;
});

// Slice

const todoSlice = createSlice({
    name:'todos',
    initialState:{list:[], status:null},
    reducers:(builder)=>{
        builder
        .addCase(fetchTodo.fulfilled, (state, action)=>{
            state.list.push(action.payload)
        })
        .addCase(addTodo.fulfilled, (state, action)=>{
            state.list.push(action.payload);
        })
        .addCase(deleteTodo.fulfilled,(state, action)=>{
            state.list = state.list.filter((item)=>(
                item.id !== action.payload
            ))
        })
        addCase(updateTodo.fulfilled, (state, action)=>{
            const index = state.list.findIndex((todo)=> todo.id === action.payload.id);
            if(index >= 0){
                state.list[index] = action.payload;
            }
        })
    }
})
export default todoSlice.reducer;