import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';

const About = () => {
    const { contextTheme } = useThemeContext();
    const { translations } = useLanguageContext();

    return (
        <div>
            <h1>{translations.about}</h1>
            <p>{translations.aboutPage}</p>
        </div>
    );
}

export default About;
