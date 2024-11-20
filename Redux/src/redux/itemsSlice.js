import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const apiUrl = 'http://localhost:5000/items';


// Thunks for async actions 
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await axios.get(apiUrl);
    return response.data;
});
export const addItem = createAsyncThunk('items/addItem', async (newItem) => {
    const response = await axios.post(apiUrl, newItem);
    return response.data;
});
export const deleteItem = createAsyncThunk('items/deleteItem', async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    return id;
});
export const updateItem = createAsyncThunk('items/updateItem', async (updatedItem) => {
    const response = await axios.put(`${apiUrl}/${updatedItem.id}`, updatedItem);
    return response.data;
});


// Slice 
const itemsSlice = createSlice({
    name: 'items',
    initialState: { list: [], status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(addItem.fulfilled, (state, action) => {
                state.list.push(action.payload);
            })
            .addCase(deleteItem.fulfilled, (state, action) => {
                state.list = state.list.filter((item) => item.id !== action.payload);
            })
            .addCase(updateItem.fulfilled, (state, action) => {
                const index = state.list.findIndex((item) => item.id ===
                    action.payload.id);
                if (index >= 0) {
                    state.list[index] = action.payload;
                }
            });
    },
});
export default itemsSlice.reducer;