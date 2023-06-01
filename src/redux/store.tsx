/** @format */

import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import axios from 'axios';
import contentSlice from './contentSlice';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	axios
		.get(BASE_URL)
		.then((res) => console.log(res))
		.catch((err) => console.log(err));
});

export const store = configureStore({
	reducer: { counterReducer, content: contentSlice, },
	// middleware: {counterMiddleware}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
