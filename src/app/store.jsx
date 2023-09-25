import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/bookSlice";

const store = configureStore({
    reducer: {
        booksReducer: bookReducer
    }
});

export default store;