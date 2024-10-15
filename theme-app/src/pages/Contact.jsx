import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';

const Contact = () => {
    const { contextTheme } = useThemeContext();
    const { translations } = useLanguageContext();

    return (
        <div>
            <h1>{translations.contact}</h1>
            <p>{translations.contactPage}</p>
        </div>
    );
}

export default Contact;
