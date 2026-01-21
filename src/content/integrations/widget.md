# Website Widget (JS)

The Botifire Website Widget is the most versatile way to add AI to any website. It works with custom HTML sites, React apps, and any CMS that allows JavaScript embedding.

## Getting the Script

Each project in Botifire has a unique integration snippet.

1. Go to your **Integrations** dashboard.
2. Select **Website Widget (JS)**.
3. Copy the script tag. It will look similar to this:
   ```html
   <script src="https://botifire.com/widget.js?id=YOUR_PROJECT_ID" async></script>
   ```

---

## Customizing the Experience

You can brand the widget to match your website's aesthetic directly from the **Appearance** settings of your Botifire panel.

### Visual Settings
- **Primary Color**: Set your brand's color for the chat bubble and headers.
- **Position**: Place the bubble in the bottom-left or bottom-right of the screen.
- **Widget Icon**: Upload your own logo or choose from our icon library.

### Behavior Settings
- **Greeting Message**: Customize the first message the bot sends (e.g., "Hello! How can I help you today?").
- **Launcher Delay**: Set a timer to show the widget only after the user has been on the page for a few seconds.

---

## Technical Integration

### Custom Single Page Apps (React / Next.js)
If you are using a framework, ensure the script is loaded correctly across route changes.

**React Example:**
```javascript
useEffect(() => {
  const script = document.createElement('script');
  script.src = "https://botifire.com/widget.js?id=YOUR_PROJECT_ID";
  script.async = true;
  document.body.appendChild(script);
}, []);
```

### Script Verification
After adding the script to your site, click **Verify Installation** in the Botifire panel. Our system will visit your site and confirm the widget is active.

---

## Security & Whitelisting

> [!CAUTION]
> **Domain Protection**: To prevent unauthorized use of your bot, you can whitelist specific domains in the settings. This ensures the bot only loads on your approved websites.

1. Go to **Security** settings.
2. Add your domain (e.g., `https://yourwebsite.com`).
3. Save changes.
