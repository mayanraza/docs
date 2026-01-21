import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { OnThisPage } from '../components/OnThisPage';

export function DocsLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-accent-foreground">
            <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

            <div className="flex max-w-[1600px] mx-auto">
                {/* Sidebar - Desktop */}
                <aside
                    className={`fixed inset-y-0 left-0 z-40 w-64 bg-background transform transition-transform duration-200 ease-in-out md:translate-x-0 md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:block ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <div className="h-full border-r border-transparent md:border-none pl-6 py-6 pt-4 md:pt-4 overflow-y-auto">
                        <Sidebar />
                    </div>
                </aside>

                {/* Overlay for mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 pt-10 px-8 md:px-12 lg:px-16 pb-20">
                    <Outlet />
                </main>

                {/* Right Sidebar (Table of Contents) */}
                <div className="hidden lg:block w-64 px-6 pt-10">
                    <OnThisPage />
                </div>
            </div>
        </div>
    );
}
