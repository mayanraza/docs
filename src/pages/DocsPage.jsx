import React, { useEffect, useState } from 'react';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { sidebarData } from '../data/sidebarData';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Flatten sidebar for pagination
const flatSidebar = sidebarData.flatMap(section => section.items);

// Dynamically import all markdown files from the content directory
const modules = import.meta.glob('../content/**/*.md', { query: '?raw', import: 'default' });

export default function DocsPage() {
    const location = useLocation();
    const [markdown, setMarkdown] = useState('');
    const path = location.pathname;

    useEffect(() => {
        const loadContent = async () => {
            try {
                // Construct file path based on route
                // / -> ../content/introduction.md
                // /apis/overview -> ../content/apis/overview.md
                let filePath = '';
                if (path === '/') {
                    filePath = '../content/introduction.md';
                } else {
                    filePath = `../content${path}.md`;
                }

                const loader = modules[filePath];

                if (loader) {
                    const content = await loader();
                    setMarkdown(content);
                } else {
                    // Fallback or 404
                    console.warn(`Markdown file not found for path: ${path} (checked ${filePath})`);
                    setMarkdown(`# 404 Not Found\n\nThe documentation page \`${path}\` could not be found.\n\nTo create it, add a file at \`src/content${path}.md\`.`);
                }
            } catch (err) {
                console.error(err);
                setMarkdown('# Error\nFailed to load content.');
            }
        };
        loadContent();
    }, [path]);

    // Calculate pagination
    const currentIndex = flatSidebar.findIndex(item => item.path === path);
    const prevPage = currentIndex > 0 ? flatSidebar[currentIndex - 1] : null;
    const nextPage = currentIndex < flatSidebar.length - 1 ? flatSidebar[currentIndex + 1] : null;

    return (
        <div className="animate-in fade-in duration-500 pb-16">
            <MarkdownRenderer content={markdown} />

            <div className="mt-16 border-t border-border pt-8 flex justify-between gap-4">
                {prevPage ? (
                    <Link
                        to={prevPage.path}
                        className="group flex flex-col gap-1 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors w-full max-w-[50%]"
                    >
                        <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            <ChevronLeft className="w-3 h-3" /> Previous
                        </span>
                        <span className="font-semibold text-foreground">{prevPage.title}</span>
                    </Link>
                ) : <div />}

                {nextPage ? (
                    <Link
                        to={nextPage.path}
                        className="group flex flex-col gap-1 p-4 rounded-xl border border-border hover:border-primary/50 transition-colors w-full max-w-[50%] text-right items-end"
                    >
                        <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            Next <ChevronRight className="w-3 h-3" />
                        </span>
                        <span className="font-semibold text-foreground">{nextPage.title}</span>
                    </Link>
                ) : <div />}
            </div>
        </div>
    );
}
