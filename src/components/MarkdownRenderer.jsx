import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Collage } from './Collage';

export function MarkdownRenderer({ content }) {
    return (

        <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-32
            
            /* H1 - Massive Title */
            prose-h1:text-[40px] prose-h1:leading-tight prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-6
            
            /* H2 - Section Headers with emoji support */
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border prose-h2:pb-2
            
            /* H3 - Subsection Headers */
            prose-h3:text-lg prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3
            
            /* Body Text */
            prose-p:text-[16px] prose-p:leading-7 prose-p:text-muted-foreground prose-p:mb-5
            
            /* Links */
            prose-a:text-foreground prose-a:font-medium prose-a:underline prose-a:decoration-border hover:prose-a:decoration-foreground prose-a:underline-offset-2
            
            /* Strong */
            prose-strong:font-semibold prose-strong:text-foreground
            
            /* Lists - Better spacing and bullets */
            prose-ul:my-6 prose-ul:space-y-2
            prose-ol:my-6 prose-ol:space-y-2
            prose-li:text-muted-foreground prose-li:leading-7
            prose-li:marker:text-foreground
            
            /* Nested lists */
            prose-li>ul:mt-2 prose-li>ul:mb-0
            prose-li>ol:mt-2 prose-li>ol:mb-0
            
            /* Code */
            prose-code:bg-muted prose-code:text-sm prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-foreground prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            
            /* Pre/Blocks */
            prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:shadow-sm prose-pre:rounded-xl prose-pre:my-6
            
            /* Images - Beautiful styling with borders and shadows */
            prose-img:rounded-lg prose-img:border prose-img:border-border prose-img:shadow-lg prose-img:my-8
            
            /* Blockquotes - For tips and notes */
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-6
            
            /* Tables */
            prose-table:my-6 prose-table:border-collapse
            prose-th:bg-muted prose-th:font-semibold prose-th:text-foreground prose-th:border prose-th:border-border prose-th:px-4 prose-th:py-2
            prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2 prose-td:text-muted-foreground
            
            /* Horizontal Rules */
            prose-hr:my-12 prose-hr:border-border
        ">
            <ReactMarkdown
                components={{
                    h1: ({ node, ...props }) => <h1 {...props} />,
                    h2: ({ node, ...props }) => (
                        <h2 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 id={props.children?.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')} {...props} />
                    ),
                    img: ({ node, ...props }) => (
                        <img
                            {...props}
                            className="w-full max-w-3xl mx-auto"
                            loading="lazy"
                        />
                    ),
                    code: ({ node, inline, className, children, ...props }) => {
                        const match = /language-(\w+)/.exec(className || '');
                        if (!inline && match && match[1] === 'collage') {
                            const images = String(children).trim().split('\n').filter(Boolean);
                            return <Collage images={images} />;
                        }
                        return <code className={className} {...props}>{children}</code>;
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
