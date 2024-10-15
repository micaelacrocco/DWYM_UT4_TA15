import { createContext, useContext, useState } from "react";

export const LanguageContext = createContext()

export const LanguageContextProvider = ({children}) => {
    const [contextLanguage, setContextLanguage] = useState('Espanol') 
    
    const translations = {
        home: contextLanguage === 'Espanol' ? 'Inicio' : 'Home',
        about: contextLanguage === 'Espanol' ? 'Acerca de' : 'About',
        contact: contextLanguage === 'Espanol' ? 'Contacto' : 'Contact',
        theme: contextLanguage === 'Espanol' ? 'Tema' : 'Theme',
        language: contextLanguage === 'Espanol' ? 'Idioma' : 'Language',
        lightMode: contextLanguage === 'Espanol' ? 'Modo claro' : 'Light Mode',
        darkMode: contextLanguage === 'Espanol' ? 'Modo oscuro' : 'Dark Mode',
        pageTitle: contextLanguage === 'Espanol' ? 'Página de inicio' : 'Home Page',
        aboutPage: contextLanguage === 'Espanol' ? 'Página de acerca de...' : 'About Page',
        contactPage: contextLanguage === 'Espanol' ? 'Página de contacto' : 'Contact Page',
        themeMode: contextLanguage === 'Espanol' ? 'Modo' : 'Mode',
    };

    const values = {contextLanguage, setContextLanguage, translations}    
    
    return (        
        <LanguageContext.Provider value={values}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => {
    const context = useContext(LanguageContext)  
    return context
}