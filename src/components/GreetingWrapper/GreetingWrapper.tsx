'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const greetings = [
    'Hola!',
    'Hello',
    'नमस्ते',
    'آپ پر سلامتی ہو',
    'ਸਾਸਰੀਆਕਾਲ',
    'ನಮಸ್ಕಾರ',
    'வணக்கம்',
];

const GreetingWrapper = ({ children }: { children: React.ReactNode }) => {
    const [index, setIndex] = useState(0);
    const [greeting, setGreeting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % greetings.length);
        }, 1000); // Time for each greeting
        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setGreeting(false);
        }, 7000);

        return () => clearTimeout(timer);
    }, [])

    if (greeting) {
        return <>
            <div className="flex items-center justify-center min-h-screen text-black dark:text-white text-4xl md:text-6xl font-semibold">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="whitespace-pre text-center"
                    >
                        {greetings[index]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    }


    return <>
        {children}
    </>
}

export default GreetingWrapper

