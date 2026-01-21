import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { sidebarData } from '../data/sidebarData';
import { cn } from '../utils/cn';

export function Sidebar() {
    // Default to all open for better visibility
    const [expandedSections, setExpandedSections] = useState(
        new Array(sidebarData.length).fill(true)
    );

    const toggleSection = (index) => {
        setExpandedSections(prev => {
            const newState = [...prev];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="w-full pr-4 py-2 pl-2">
            <div className="flex flex-col gap-3">
                {sidebarData.map((section, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                        {/* Section Header */}
                        {section.title && (
                            <button
                                onClick={() => toggleSection(idx)}
                                className="group flex items-center justify-between w-full px-2 py-1.5 text-left select-none rounded-lg hover:bg-muted/30 transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    {section.icon && (
                                        <section.icon className="w-4 h-4 text-muted-foreground/70" />
                                    )}
                                    <span className="text-[14px] font-semibold text-foreground tracking-tight">
                                        {section.title}
                                    </span>
                                </div>
                                <ChevronRight className={cn(
                                    "w-3.5 h-3.5 text-muted-foreground/50 transition-transform duration-200",
                                    expandedSections[idx] ? "rotate-90" : "rotate-0"
                                )} />
                            </button>
                        )}

                        {/* Items */}
                        {expandedSections[idx] && (
                            <div className="flex flex-col space-y-0.5 ml-1 border-l border-border/50 pl-3">
                                {section.items.map((item, itemIdx) => (
                                    <NavLink
                                        key={itemIdx}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            cn(
                                                "group flex items-center justify-between px-3 py-1.5 text-[13px] rounded-md transition-all duration-200",
                                                isActive
                                                    ? "bg-accent text-accent-foreground font-medium shadow-sm"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                            )
                                        }
                                    >
                                        <div className="flex items-center gap-2">
                                            {item.icon && (
                                                <item.icon className={cn(
                                                    "w-3.5 h-3.5 transition-colors duration-200",
                                                    "text-muted-foreground/50 group-hover:text-muted-foreground/80"
                                                )} />
                                            )}
                                            <span>{item.title}</span>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
