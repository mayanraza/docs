import React, { useEffect, useState } from 'react';
import { cn } from '../utils/cn';
import { useLocation } from 'react-router-dom';

export function OnThisPage() {
    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState([]);
    const location = useLocation();

    useEffect(() => {
        // Wait a small amount for the DOM to render the new markdown content
        const timer = setTimeout(() => {
            const elements = Array.from(document.querySelectorAll('h2, h3'));
            const items = elements.map((elem) => ({
                id: elem.id,
                text: elem.innerText,
                level: Number(elem.tagName.charAt(1)),
            }));
            setHeadings(items);

            // Set up intersection observer
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '-100px 0px -66% 0px' }
            );

            elements.forEach((elem) => observer.observe(elem));

            return () => observer.disconnect();
        }, 300); // 300ms delay to ensure content render

        return () => clearTimeout(timer);
    }, [location.pathname]); // Re-run when path changes

    if (headings.length === 0) return null;

    return (
        <div className="hidden lg:block w-64 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto pl-4">
            <h5 className="font-bold text-[13px] mb-3 text-gray-900 uppercase tracking-wide">On this page</h5>
            <div className="relative">
                {/* Vertical decorative line for the list */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-100" />

                <ul className="space-y-1 text-[13px]">
                    {headings.map((heading, idx) => (
                        <li key={idx} className="relative pl-4">
                            <a
                                href={`#${heading.id}`}
                                className={cn(
                                    "block transition-colors py-1 leading-snug border-l-[1px] -ml-[17px] pl-4",
                                    activeId === heading.id
                                        ? "text-gray-900 font-semibold border-black"
                                        : "text-gray-500 hover:text-gray-900 border-transparent hover:border-gray-200"
                                )}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                                    // Manually set active ID on click for immediate feedback
                                    setActiveId(heading.id);
                                }}
                            >
                                {heading.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
