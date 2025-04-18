"use client"
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from '@tabler/icons-react';
import Logo from "../Logo/Logo";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const handleThemeChange = () => {
        if (theme == "dark") {
            setTheme("light")
        }
        else {
            setTheme("dark")
        }
    }


    return (
        <nav className='flex justify-between items-center py-6 px-4 lg:px-8 sticky top-0 z-10'>
            <Logo />
            <div onClick={() => handleThemeChange()}>
                {theme == "dark" ? <IconSun /> : <IconMoon />}
            </div>
        </nav>
    )
}

export default Navbar
