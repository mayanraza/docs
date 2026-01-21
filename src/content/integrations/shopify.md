# Shopify Integration

Transform your Shopify store with an AI sales agent that helps customers find products, tracks orders, and answers FAQs automatically.

## Integration via Theme Extension

Our official Shopify App ensures the bot is perfectly integrated with your store's theme and data.

### 1. Install Botifire App
- Visit the **Shopify App Store**.
- Search for "Botifire AI Chatbot" and click **Install**.
- Once redirected to your Shopify admin, click **Install App**.

### 2. Connect Your Dashboard
- In the Botifire App settings inside Shopify, login to your Botifire account.
- Select your store's chatbot from the dropdown menu.

### 3. Enable in Theme Editor
- Click on **Customize Theme** (Online Store > Themes > Customize).
- Go to the **App Embeds** tab in the left sidebar.
- Toggle the switch for **Botifire Widget** to "On".
- Click **Save**.

---

## E-commerce Features

### Product Discovery
Botifire automatically syncs with your Shopify product catalog. The AI can:
- Suggest products based on user needs.
- Provide price and availability in real-time.
- Share direct links to checkout.

### Order Tracking
Customers can query their order status directly through the chat.
- **How it works**: The bot asks for the order number and email, then fetches the status from Shopify APIs.

---

## Manual Integration (Optional)

If you are using a headless Shopify setup or custom liquid code:
1. Copy the script tag from your [Integration Dashboard](/integrations/widget).
2. Paste it into your `theme.liquid` file before the `</body>` tag.

> [!IMPORTANT]
> **Data Sync**: After adding new products to your Shopify store, we recommend re-running the [AI Crawler](/panel/training) to ensure the bot knows about your latest inventory.
