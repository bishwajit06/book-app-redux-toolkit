import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books: [
        {id: 1, name: "English Speaking", author: "Bishwajit Roy"},
        {id: 2, name: "Data Analysis", author: "Sudhin Biswas"},
        {id: 3, name: "Fish Cultivation", author: "Lipton Sarder"}
    ]
};

const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const {id, name, author} = action.payload
            const isBookExits = state.books.filter((book)=>book.id == id);
            if (isBookExits) {
                isBookExits[0].name = name; 
                isBookExits[0].author = author; 
            }
        },
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter((book)=>book.id !== id);
        }
    }
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions
export default bookSlice.reducer