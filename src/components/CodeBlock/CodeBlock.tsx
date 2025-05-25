'use client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';


const CodeBlock = ({ language, code }: { language: string, code: string }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative">
            <SyntaxHighlighter
                language={language}
                style={atomDark}
                customStyle={{ margin: 0, borderRadius: '0.5rem',fontSize:"1rem" }}
            >
                {code.trim()}
            </SyntaxHighlighter>
            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 p-2 rounded bg-gray-800 text-white text-xs"
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
}

export default CodeBlock
