# WordPress Integration

Botifire offers an official WordPress plugin and a manual script method to embed your AI chatbot seamlessly into any WordPress site.

## Method 1: WordPress Plugin (Recommended)

Using our official plugin is the easiest way to manage your bot without touching any code.

### 1. Download & Install
- Navigate to your WordPress Admin Dashboard.
- Go to **Plugins > Add New**.
- Search for "Botifire" and click **Install Now**.
- Once installed, click **Activate**.

### 2. Connect Your Account
- Find **Botifire** in your sidebar menu.
- Path your **Project ID** (found in the [Project Settings](/panel/settings) of your Botifire panel).
- Click **Connect**.

### 3. Customize Display
- Choose which pages the bot should appear on (e.g., all pages, landing pages only, or exclude specific posts).

---

## Method 2: Manual Script Embed

If you prefer not to use a plugin, you can embed the bot using a simple JavaScript snippet.

### 1. Get the Script
- In your Botifire Panel, go to **Integrations > Website Widget (JS)**.
- Copy the provided `<script>` tag.

### 2. Add to Header/Footer
- In WordPress, navigate to **Appearance > Theme File Editor**.
- Locate your `header.php` or `footer.php` file.
- Paste the script right before the closing `</head>` or `</body>` tag.
- Click **Update File**.

---

## Troubleshooting

### Bot not appearing?
1. **Clear Cache**: If you are using a caching plugin (like WP Rocket or W3 Total Cache), clear all caches after installation.
2. **Check Script Visibility**: Ensure that your theme doesn't have a "Maintenance Mode" enabled that blocks external scripts.
3. **Verify Project ID**: Double-check that the ID in the plugin settings matches your Botifire dashboard.

> [!TIP]
> **WooCommerce Support**: Our WordPress integration is fully compatible with WooCommerce. It can even track products for better [AI Training](/panel/training).
