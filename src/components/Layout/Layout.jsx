import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from './Layout.module.css';

const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink className={css.navlink} to='/'>Home</NavLink>
                    <NavLink className={css.navlink} to='/movies'>Movies</NavLink>
                </nav>
            </header>
            <main>
                <Suspense fallback={<Loader/>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
};

export default Layout;