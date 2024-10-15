import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';

const Home = () => {
    const { contextTheme } = useThemeContext();
    const { translations } = useLanguageContext();

    return (
        <div>
            <h1>{translations.home}</h1>
            <p>{translations.pageTitle}</p>
        </div>
    );
}

export default Home;
