import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

const ShowBooks = () => {
    const books = useSelector((sate)=>sate.booksReducer.books);
    const dispatch = useDispatch()
    const handleBookDelete = (id)=>{
        dispatch(deleteBook(id));
        toast.error("Book has been deleted");
    }
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">All Books</h1>
            <div className="row justify-content-center">
                <div className="col-md-10 p-5 bg-white shadow rounded-3">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#SN</th>
                            <th scope="col">Book Name</th>
                            <th scope="col">Author</th>
                            <th scope="col" className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            books && books.map((book, index)=>{
                                const {id, name, author} = book;
                                return <tr key={id}>
                                <th scope="row">{ index+1 }</th>
                                <td>{name}</td>
                                <td>{author}</td>
                                <td className="text-end">
                                    <Link to="/edit-book" state={{id, name, author}} className="btn btn-secondary btn-sm">Edit</Link>
                                    <button onClick={()=>{handleBookDelete(id)}} className="btn btn-danger btn-sm ms-2">Delete</button>
                                </td>
                            </tr>
                            })  
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowBooks;