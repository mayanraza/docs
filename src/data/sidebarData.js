import {
    Book,
    Layout,
    MessageSquare,
    Link,
    BarChart3,
    Users,
    Brain,
    Zap,
    Settings,
    Mic,
    CreditCard,
    Workflow,
    Home,
    MessageCircle,
    Code
} from 'lucide-react';

export const sidebarData = [
    {
        title: "Getting Started",
        icon: Book,
        items: [
            { title: "Introduction", path: "/", icon: Home },
            { title: "Quick Start", path: "/quick-start", icon: Zap },
        ]
    },
    {
        title: "Platform Guides",
        icon: Layout,
        items: [
            { title: "Dashboard Overview", path: "/panel/dashboard", icon: Layout },
            { title: "AI Training (Knowledge)", path: "/panel/training", icon: Brain },
            { title: "Visitors & Live Chat", path: "/panel/visitors", icon: Users },
            { title: "Analytics & Insights", path: "/panel/analytics", icon: BarChart3 },
        ]
    },
    {
        title: "Bot Creation",
        icon: MessageSquare,
        items: [
            { title: "Textual Chatbot", path: "/panel/textual-chatbot-guide", icon: MessageSquare },
            { title: "WhatsApp Chatbot", path: "/panel/whatsapp-chatbot-guide", icon: MessageCircle },
        ]
    },
    {
        title: "Integrations",
        icon: Link,
        items: [
            { title: "WordPress Setup", path: "/integrations/wordpress", icon: Workflow },
            { title: "Shopify Integration", path: "/integrations/shopify", icon: CreditCard },
            { title: "Website Widget (JS)", path: "/integrations/widget", icon: Code },
        ]
    },
    {
        title: "AI Features",
        icon: Zap,
        items: [
            { title: "Voice AI Agents", path: "/features/voice-ai", icon: Mic },
            { title: "WhatsApp Flows", path: "/features/whatsapp-flows", icon: Workflow },
        ]
    },
    {
        title: "Account",
        icon: Settings,
        items: [
            { title: "Billing & Subscriptions", path: "/features/billing", icon: CreditCard },
            { title: "Project Settings", path: "/panel/settings", icon: Settings },
        ]
    }
];
