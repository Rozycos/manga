import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return(
        <>
            <button className="btn btn__primary btn__form">
                <Link className="admin__link" to="/admin">Panel</Link>
            </button>
            <button className="btn btn__primary btn__form">
                <Link className="admin__link" to="/admin/addnew">Add new</Link>
            </button>
            {/* <button className="btn btn__primary btn__form">
                <Link className="admin__link" to="/admin/edit">Edit</Link>
            </button> */}
        </>
    )
}


export default Sidebar;