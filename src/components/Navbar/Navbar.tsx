"use client"
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from '@tabler/icons-react';
import Logo from "../Logo/Logo";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    return (
        <nav className='flex justify-between items-center py-6 px-4 lg:px-8 sticky top-0 z-10'>
            <Logo />
            {theme === "dark" ? <IconSun size={20} onClick={() => setTheme("light")} /> : <IconMoon size={20} onClick={() => setTheme("dark")} />}
        </nav>
    )
}

export default Navbar;
