# Creating a Chatbot

This guide provides a comprehensive, step-by-step walkthrough for creating and configuring a new chatbot within the Botifire ecosystem.

![Dashboard Overview](/images/panel.botifire.com/dashboard.png)
*Above: The Botifire Admin Dashboard.*

## Prerequisites

Before executing these steps, ensure you have:
- An active **Admin Account** on the [Panel](/panel/dashboard).
- A valid subscription plan (verify in [Billing](/features/billing)).
- (Optional) A verified WhatsApp Business API number if creating a WhatsApp bot.

---

## Step 1: Navigating to the Bot Studio

1.  Log in to your **Botifire Panel**.
2.  On the left sidebar, locate the **"Chatbots"** or **"Bot Studio"** menu item.
3.  Click on **"Create New"** (+ button) in the top-right corner.

![Create New Bot Button](https://placehold.co/800x450/fafafa/111827?text=Create+New+Button)

---

## Step 2: Basic Configuration

A modal or configuration page will appear. Fill in the following details:

### General Information
-   **Bot Name**: Internal name for your reference (e.g., "Support Agent v1").
-   **Channel**: Select the deployment channel.
    -   `Web`: For website widgets.
    -   `WhatsApp`: For conversational marketing.
    -   `Voice`: For telephony agents.

### Appearance (Web Only)
If you selected **Web**, you can customize the widget:
-   **Primary Color**: Match your brand identity.
-   **Logo**: Upload your company logo (PNG/JPG).
-   **Position**: Bottom Right / Bottom Left.

![Configuration Form](https://placehold.co/800x450/fafafa/111827?text=Configuration+Form)

---

## Step 3: Knowledge Base & Training

The core of your bot's intelligence comes from the data you provide.

1.  Navigate to the **"Training"** or **"Knowledge Base"** tab.
2.  **Upload Documents**: Drag and drop PDF, TXT, or DOCX files containing your business info.
3.  **Website Crawl**: Enter your website URL to have the bot automatically learn from your existing content.
4.  **Q&A Manual Entry**: specific question-answer pairs for strict responses.

> [!TIP]
> **Pro Tip**: Use smaller, focused documents rather than one massive PDF for better retrieval accuracy.

---

## Step 4: Testing

Before publishing, verify the bot's responses.

1.  Look for the **"Test Playground"** on the right side of the screen.
2.  Type queries like *"What are your pricing plans?"* or *"How do I reset my password?"*.
3.  Adjust the **System Prompt** if the tone is incorrect (e.g., "You are a helpful, professional assistant...").

![Testing Playground](https://placehold.co/800x450/fafafa/111827?text=Testing+Playground)

---

## Step 5: Publishing

1.  Go to the **"Deploy"** tab.
2.  **Web**: Copy the generated JavaScript snippet and paste it into your website's `<head>` tag.
3.  **WhatsApp**: Scan the QR code or link your Meta Business Manager.
4.  Toggle the status to **Active**.

Your bot is now live! Monitor its performance in the [Analytics Dashboard](/panel/dashboard).
