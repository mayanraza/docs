import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, Sun, Moon, Monitor, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchModal } from './SearchModal';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../utils/cn';

export function Header({ isSidebarOpen, setIsSidebarOpen }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
            <header className="sticky top-0 z-50 w-full bg-background border-b border-border transition-colors duration-300">
                <div className="flex items-center justify-between px-6 h-14 w-full max-w-[1600px] mx-auto">
                    {/* Left: Logo & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden p-2 hover:bg-accent rounded-md text-foreground/60"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        >
                            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-foreground">
                            <span>BotifireDocs</span>
                        </Link>
                    </div>

                    {/* Middle: Search */}
                    <div className="flex-1 max-w-lg px-4 hidden md:block">
                        <button
                            onClick={() => setIsSearchOpen(true)}
                            className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg border border-input bg-background/50 text-sm text-muted-foreground hover:border-ring/50 hover:bg-accent/50 transition-colors shadow-sm"
                        >
                            <Search className="w-4 h-4 opacity-50" />
                            <span>Search...</span>
                            <div className="ml-auto flex items-center gap-1">
                                <kbd className="hidden sm:inline-block border border-border rounded px-1.5 text-[10px] bg-muted text-muted-foreground font-medium">
                                    /
                                </kbd>
                            </div>
                        </button>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://panel.botifire.com/sign-in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-3 sm:px-4 py-1.5 text-sm font-medium text-white bg-slate-900 hover:bg-black rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Sign up
                        </a>
                        <ThemeToggle />
                    </div>
                </div>
            </header>
        </>
    );
}

function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const themes = [
        { id: 'light', name: 'Light', icon: Sun },
        { id: 'dark', name: 'Dark', icon: Moon },
        { id: 'system', name: 'System', icon: Monitor },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
                {theme === 'light' && <Sun className="w-5 h-5" />}
                {theme === 'dark' && <Moon className="w-5 h-5" />}
                {theme === 'system' && <Monitor className="w-5 h-5" />}
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 rounded-lg border border-border bg-popover text-popover-foreground shadow-lg animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex flex-col p-1">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTheme(t.id);
                                    setIsOpen(false);
                                }}
                                className={cn(
                                    "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors",
                                    theme === t.id ? "bg-accent text-accent-foreground" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <t.icon className="w-4 h-4" />
                                <span>{t.name}</span>
                                {theme === t.id && <Check className="w-3.5 h-3.5 ml-auto" />}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
