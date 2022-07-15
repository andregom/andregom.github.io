import React, { createContext, useState, useContext, ReactElement } from 'react';

import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string,

    color: {
        primary: string,
        secondary: string,
        tertiary: string,

        white: string,
        black: string,
        gray: string,

        success: string,
        info: string,
        warning: string,
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

interface ThemeProviderProps extends React.ReactElement {
    children: React.ReactNode | ReactElement
}

const DEFAULT_THEME = dark;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const savedThemeRaw = localStorage.getItem('@minha-carteira:theme') ?? '';
        const savedTheme = savedThemeRaw ? JSON.parse(savedThemeRaw) as unknown as ITheme : DEFAULT_THEME;
        return savedTheme; 
    });

    const alternateAndSaveTheme = (themeToBeSet: ITheme) => {
        setTheme(themeToBeSet);
        localStorage.setItem('@minha-carteira:theme', JSON.stringify(themeToBeSet));
    }

    const toggleTheme = async () => {
        theme.title === 'dark' ? alternateAndSaveTheme(light) : alternateAndSaveTheme(dark);
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme() : IThemeContext {
    const context = useContext(ThemeContext);

    return context;
}

export { ThemeProvider, useTheme };