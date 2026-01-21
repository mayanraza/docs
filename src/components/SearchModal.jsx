import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';

export function SearchModal({ isOpen, setIsOpen }) {
    const navigate = useNavigate();
    const [pages, setPages] = useState([]);

    useEffect(() => {
        // Flatten sidebar data for search
        const flat = sidebarData.flatMap(section =>
            section.items.map(item => ({
                ...item,
                section: section.title,
                icon: item.icon || section.icon || FileText
            }))
        );
        setPages(flat);
    }, []);

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, [setIsOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
            <div
                className="fixed inset-0 bg-black/20 backdrop-blur-[2px]"
                onClick={() => setIsOpen(false)}
            />

            <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <Command className="w-full">
                    <div className="flex items-center px-4 border-b border-gray-100">
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <Command.Input
                            placeholder="Search documentation... (Ctrl + K)"
                            className="w-full py-4 text-base bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400"
                        />
                    </div>

                    <Command.List className="max-h-[50vh] overflow-y-auto p-2">
                        <Command.Empty className="py-12 text-center text-sm text-gray-500">
                            No documentation results found.
                        </Command.Empty>

                        {pages.map((page) => (
                            <Command.Item
                                key={page.path}
                                value={`${page.title} ${page.section}`}
                                onSelect={() => {
                                    navigate(page.path);
                                    setIsOpen(false);
                                }}
                                className="flex items-center px-3 py-2.5 text-sm text-gray-700 rounded-xl cursor-pointer hover:bg-gray-50 aria-selected:bg-blue-50 aria-selected:text-blue-700 transition-colors group"
                            >
                                <div className="mr-3 p-2 bg-gray-100 rounded-lg text-gray-500 group-aria-selected:bg-white group-aria-selected:text-blue-600 transition-colors border border-transparent group-aria-selected:border-blue-100 shadow-sm">
                                    {React.createElement(page.icon, { className: "w-4 h-4" })}
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-medium">{page.title}</span>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                                        {page.section}
                                    </span>
                                </div>
                            </Command.Item>
                        ))}
                    </Command.List>

                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50/50 border-t border-gray-100">
                        <div className="flex items-center gap-4">
                            <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                                <kbd className="px-1.5 py-0.5 rounded border border-gray-200 bg-white shadow-sm font-sans text-[10px] text-gray-500">Enter</kbd> to select
                            </span>
                            <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                                <kbd className="px-1.5 py-0.5 rounded border border-gray-200 bg-white shadow-sm font-sans text-[10px] text-gray-500">↑↓</kbd> to navigate
                            </span>
                        </div>
                        <span className="text-[11px] text-gray-400">
                            <kbd className="px-1.5 py-0.5 rounded border border-gray-200 bg-white shadow-sm font-sans text-[10px] text-gray-500">Esc</kbd> to close
                        </span>
                    </div>
                </Command>
            </div>
        </div>
    );
}
