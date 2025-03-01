'use client'
import { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
export default function CodeBlock({ code, iconAtTopRight = false }: { code: string, iconAtTopRight?: boolean }) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = async (code: string) => {
        try {
            console.log(code);
            if (code.length === 0) return;
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
        } catch (error) {
            const textarea = document.createElement("textarea");
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }
    return (
        <div className="relative">
            <SyntaxHighlighter language="javascript" style={dracula} customStyle={{width: "100%"}} wrapLines={true}>
                {code}
            </SyntaxHighlighter>
            {(!copied) ? <div className={`w-[15px] h-[15px] hover:cursor-pointer ${iconAtTopRight ? "absolute right-2 top-3" : "absolute right-2 top-[50%] -translate-y-1/2"}`} onClick={() => copyToClipboard(code ?? "")}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z"/></svg>
            </div> : 
            <div className={`w-[15px] h-[15px] ${iconAtTopRight ? "absolute right-2 top-3" : "absolute right-2 top-[50%] -translate-y-1/2"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            </div>}
        </div>
    )
}