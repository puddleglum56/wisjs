import { configureStore } from "@reduxjs/toolkit"
import searchBarReducer from "./search_bar/SearchBarSlice"
import advancedOptionsReducer from "./advanced_options_menu/AdvancedOptionsMenuSlice"

export const store = configureStore({
  reducer: {
      searchBar: searchBarReducer,
      advancedOptions: advancedOptionsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch