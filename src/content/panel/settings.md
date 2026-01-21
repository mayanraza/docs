# Project Settings & Team Management

Configure your project foundation, manage team member access, and secure your deployments from one central location.

## Project Configuration

The project settings page allows you to define the fundamental identity of your AI agent.

### General Information
- **Project Name & Tagline**: The name used internally and potentially in the chat header.
- **Mission & Vision**: Define your company's core values to help the AI align with your brand voice.
- **Project Logo**: Upload your high-resolution logo for use in the widget and email notifications.

---

## Team Management

Scale your operations by inviting collaborators and defining their roles.

### Roles & Permissions
- **Admin**: Full access to all settings, billing, and team management.
- **Developer**: Access to [Integrations](/integrations/widget) and [Analytics](/panel/analytics), but cannot manage billing.
- **Support**: Access to [Visitors & Live Chat](/panel/visitors) to manage customer interactions.

### Inviting Members
1. Go to **Settings > Team**.
2. Click **Invite Member**.
3. Enter their email and select a role.
4. An invitation link will be sent automatically.

---

## Security & Whitelisting

Protect your API usage and ensure your bot only appears on authorized websites.

### Domain Whitelisting
To prevent other websites from embedding your script, you must add your domains to the security list.
- **Format**: `https://example.com`
- **Subdomains**: You can add subdomains separately or use wildcards if supported.

---

## Global Settings

### Preferred Language & Tone
Set the default language for the AI and its conversational style (e.g., Formal, Casual, Friendly).

### CRM Integration
Connect your lead data to external CRMs via Webhooks.
- **Lead Fields**: Define which data points the AI should capture (Name, Email, Phone).
- **Webhook URL**: The endpoint where Botifire will send customer leads in real-time.

> [!NOTE]
> **Backup Your Settings**: Whenever you make major changes to the brand voice or mission, we recommend creating a new [Intelligence Version](/panel/training) to ensure the AI's internal logic is updated.
