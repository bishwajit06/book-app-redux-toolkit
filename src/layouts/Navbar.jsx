import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 shadow" data-bs-theme="light">
                <div className="container">
                    <NavLink to="/" className="nav-link"><img src="https://jitroy.com/wp-content/uploads/2023/08/Logo_b.png" alt="" height="60px"/></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/all-books" className="nav-link">All books</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/add-book" className="nav-link">Add book</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/contact" className="btn btn-warning">Contact me</NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;