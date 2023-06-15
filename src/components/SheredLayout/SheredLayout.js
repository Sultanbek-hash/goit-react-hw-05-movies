import { Suspense } from 'react';
import {  NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () =>{
    return (
        <div className='container'>
            <header className='header__list'>
                <nav>
                    <NavLink className="link" to="/" end="true">
                        Home
                    </NavLink>
                    <NavLink className="link" to="/movies">
                        Movies
                    </NavLink>
                </nav>
            </header>
                <Outlet />
        </div>
    );
};