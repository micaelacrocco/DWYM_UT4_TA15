import logo from './logo.svg';
import './App.css';
import ReactSwitch from 'react-switch';
import { useThemeContext } from './context/ThemeContext';
import { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import { useLanguageContext } from './context/LanguageContext';

function App() {
    const { contextTheme, setContextTheme } = useThemeContext();
    const { contextLanguage, setContextLanguage } = useLanguageContext();
    const [checkedTheme, setCheckedTheme] = useState(false);
    const [checkedLanguage, setCheckedLanguage] = useState(false);

    const themeSwitch = (nextChecked) => {
        setContextTheme((state) => (state === 'Light' ? 'Dark' : 'Light'));
        setCheckedTheme(nextChecked);
    }

    const languageSwitch = (nextChecked) => {
        setContextLanguage((state) => (state === 'Espanol' ? 'Ingles' : 'Espanol'));
        setCheckedLanguage(nextChecked);
    }

    const { translations } = useLanguageContext(); 

    return (
        <div className="App">
            <header className={`App-header ${contextTheme} ${contextLanguage}`}>
                <h3>{translations.theme}</h3>
                <ReactSwitch
                    onChange={themeSwitch}
                    checked={checkedTheme}
                    onColor="white"
                    onHandleColor="#61dafb"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                <h2>{contextTheme} {translations.mode}</h2>
                <h3>{translations.language}</h3>
                <ReactSwitch
                    onChange={languageSwitch}
                    checked={checkedLanguage}
                    onColor="white"
                    onHandleColor="#61dafb"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
                <h2>{contextLanguage} {translations.mode}</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>
                </Routes>
            </header>
        </div>
    );
}

export default App;
