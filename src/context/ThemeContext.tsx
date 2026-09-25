import React, {createContext, useContent, useState, ReactNode} from "react"
import { LIGHT_THEME, DARK_THEME } from "../constants/theme"

type Theme = typeof LIGHT_THEME | typeof DARK_THEME;

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}: {children:ReactNode}) => {
    const [theme, SetTheme] = useState<Theme>(LIGHT_THEME);

    const toggleTheme = () => {SetTheme((prevTheme) => (prevTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));  
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContent(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};