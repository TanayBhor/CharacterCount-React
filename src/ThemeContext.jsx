import { useContext, createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState()

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkMode])

    const toggleTheme = ()=>{
        setDarkMode(prev => !prev)
    }

    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);