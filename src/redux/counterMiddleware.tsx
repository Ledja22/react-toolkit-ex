/** @format */

import { Store } from '@reduxjs/toolkit';
import { store } from './redux/store.tsx';

export const counterMiddleware = (store) => (next) => (action) => {
	console.log(store.counterReducer.value);

	console.log(action.type);
	next(action.payload);
};
