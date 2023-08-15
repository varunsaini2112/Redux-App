import {
	PreloadedState,
	combineReducers,
	configureStore
} from "@reduxjs/toolkit";

import counterReducer from "./sliceReducers/counterSlice";

const rootReducer = combineReducers({
	counter: counterReducer
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState
	});
};

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };
export { setupStore };
