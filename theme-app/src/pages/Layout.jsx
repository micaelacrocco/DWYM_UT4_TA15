// Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useLanguageContext } from '../context/LanguageContext';

const Layout = () => {
    const { translations } = useLanguageContext();

    return (
        <div>
            <nav>
                <ul className='list'>
                    <li><Link to="/">{translations.home}</Link></li>
                    <li><Link to="/about">{translations.about}</Link></li>
                    <li><Link to="/contact">{translations.contact}</Link></li>
                </ul>
            </nav>
            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default Layout;
