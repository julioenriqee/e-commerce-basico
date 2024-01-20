import React from 'react'
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';
import ModoClaro from '../../assets/Theme/modoclaro.svg';
import ModoOscuro from '../../assets/Theme/modooscuro.svg';

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
            localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const element = document.documentElement; // the html element
    
    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
    <div className='relative'>
        <img src={ModoOscuro} alt=""
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-10 bg-primary/30 rounded-full cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        />
        <img src={ModoClaro} alt=""
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className={`w-10 bg-primary/85 rounded-full cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
        />
    </div>
)
}

export default DarkMode
