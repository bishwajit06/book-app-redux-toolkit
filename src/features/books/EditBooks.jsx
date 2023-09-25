import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./bookSlice";
import { toast } from "react-toastify";

const EditBooks = () => {
    const location = useLocation();
    const id = location.state.id;
    const [name, setName] = useState(location.state.name);
    const [author, setAuthor] = useState(location.state.author);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateBook({id, name, author}))
        navigate("/all-books", {replace:true})
        toast.success("Book has been updated");

    }
    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Add Book</h1>
            <div className="row justify-content-center">
                <div className="col-md-10 p-5 bg-white shadow rounded-3">
                    <div className="row justify-content-center py-md-5">
                        <div className="col-md-10">
                        <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Book name</label>
                                    <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Enter book name"/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Author name</label>
                                    <input type="text" className="form-control" onChange={(e)=>{setAuthor(e.target.value)}} value={author} placeholder="Enter author name"/>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary px-4">Update book</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBooks;