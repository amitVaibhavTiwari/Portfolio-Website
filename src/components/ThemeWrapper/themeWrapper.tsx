"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import BackgroundWrapper from "../Background/BackgroundWrapper";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // this is to prevent rendering until mounted to avoid hydration errors
    if (mounted)
        return <ThemeProvider attribute="class"
            themes={['light', 'dark']}
            defaultTheme={window.matchMedia(
                "(prefers-color-scheme:dark)"
            ).matches ? "dark" : "light"}
            enableSystem={false}>
            <BackgroundWrapper>
                {children}
            </BackgroundWrapper>
        </ThemeProvider >;

}
