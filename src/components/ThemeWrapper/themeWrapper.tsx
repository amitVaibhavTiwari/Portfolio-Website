"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // this is to prevent rendering until mounted to avoid hydration errors
    if (mounted)
        return <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>;

}
