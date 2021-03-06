import React from 'react';

const SideBar = (props) =>{
    return(
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link active" href="#e">Overview <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#f">Reports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#g">Analytics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#h">Export</a>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#i">Nav item</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#j">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#k">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#l">Another nav item</a>
                </li>
            </ul>

            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#m">Nav item again</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#n">One more nav</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#o">Another nav item</a>
                </li>
            </ul>
        </nav>

    )
}

export default SideBar;