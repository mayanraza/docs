# Introduction

Welcome to the **Botifire Documentation**.

Botifire is a comprehensive **AI-driven Customer Engagement Platform** that unifies WhatsApp, Web, and Voice channels into a single powerful workflow. Whether you are a developer integrating our APIs or a business manager analyzing performance, this documentation is your single header of truth.

## Ecosystem Overview

The Botifire suite consists of four integrated components working in harmony:

| Component | URL | Description |
| :--- | :--- | :--- |
| **Panel** | `panel.botifire.com` | The command center. Manage bots, view analytics, and handle billing here. |
| **API Server** | `apis.botifire.com` | The engine room. Handles GraphQL requests, webhooks, and AI processing. |
| **Main Site** | `botifire.com` | The public face. Landing pages, marketing content, and case studies. |
| **WhatsApp Layer** | *Internal* | Dedicated microservice for high-throughput WhatsApp Business API messaging. |

---

## System Requirements

If you are running the On-Premise version or setting up a local development environment, ensure you meet these requirements:

-   **Node.js**: v18.17.0 or higher
-   **PHP**: v8.2 or higher
-   **Database**: MySQL 8.0+ or MariaDB 10.6+
-   **Key Services**:
    -   Redis (for queues and caching)
    -   Meilisearch (for high-speed vector retrieval)

---

## Where to Start?

-   **I'm a Developer**: Jump straight to the [Quick Start](/quick-start) guide or browse the [API Overview](/apis/overview).
-   **I'm a Business User**: Learn how to [Create a Chatbot](/guides/create-chatbot) or manage your [Billing](/features/billing).
-   **I need specialized features**: Check out our deep dive into [Voice AI](/features/voice-ai).

## Getting Support

Need help beyond these docs?
-   [Join our Discord Community](#)
-   Email support at `dev@botifire.com`
