"use client"
import { useTheme } from "next-themes";
import { IconMoon, IconSun, IconDeviceDesktop } from '@tabler/icons-react';
import Logo from "../Logo/Logo";
import { useState, useEffect } from "react";

const Navbar = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentIcon = () => {
        if (theme === "system") {
            return systemTheme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />;
        }
        return theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />;
    };

    const options = [
        { value: "light", label: "Light", icon: <IconSun size={18} /> },
        { value: "dark", label: "Dark", icon: <IconMoon size={18} /> },
        { value: "system", label: "System", icon: <IconDeviceDesktop size={18} /> }
    ];

    return (
        <nav className='flex justify-between items-center py-6 px-4 lg:px-8 sticky top-0 z-10'>
            <Logo />
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer border-none outline-none"
                >
                    {currentIcon()}
                </button>

                {isOpen && (
                    <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-neutral-800 border dark:border-neutral-900 rounded-md shadow-md z-50">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => {
                                    setTheme(option.value);
                                    setIsOpen(false);
                                }}
                                className="flex items-center text-sm gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 cursor-pointer"
                            >
                                {option.icon}
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
