import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './../pages/Home';
import Error from './../pages/Error';
import Navbar from "../layouts/Navbar";
import ShowBooks from "../features/books/ShowBooks";
import AddBooks from "../features/books/AddBooks";
import Footer from "../layouts/Footer";
import EditBooks from "../features/books/EditBooks";

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div style={{minHeight:"80vh"}}>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/all-books" element={<ShowBooks />}></Route>
                <Route path="/add-book" element={<AddBooks />}></Route>
                <Route path="/edit-book" element={<EditBooks />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default Index;