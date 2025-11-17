import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light bg-light shadow-sm">
                <div className="nav navbar-nav d-flex gap-5 mx-auto">
                    <a className="nav-item nav-link" href="/">Home</a>
                    <a className="nav-item nav-link" href="/AboutUs">Chi siamo</a>
                    <a className="nav-item nav-link" href="/Products">Prodotti</a>
                </div>
            </nav>
        </header>
    );
}
