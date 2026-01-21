# Step 5: Integration

Get your chatbot live on your website! This step provides you with the integration code and instructions to embed your chatbot widget on any webpage.

---

## Overview

The Integration step generates a unique JavaScript code snippet that you'll add to your website. Once installed, your chatbot will appear on your site and start helping visitors immediately.

![Integration Step](../../../images/panel.botifire.com/textaual%20cahtbots%20creation%20steps/step%205%20(integration).png)

---

## Integration Code

### Widget Script
**Purpose:** The JavaScript code that powers your chatbot widget.

You'll receive a code snippet that looks similar to this:

```html
<script src="https://apis.botifire.com/widget.js" 
        data-chatbot-id="your-unique-id" 
        async>
</script>
```

### What This Code Does:
- Loads the chatbot widget on your website
- Connects to your configured chatbot settings
- Displays the widget in the position you selected
- Enables real-time chat functionality

---

## Installation Instructions

### For Standard Websites (HTML)

1. **Copy the Integration Code**
   - Click the "Copy Code" button to copy the script to your clipboard

2. **Access Your Website Files**
   - Open your website's HTML files
   - Locate the file where you want the chatbot to appear (usually `index.html` or a template file)

3. **Paste the Code**
   - Find the `<head>` section of your HTML
   - Paste the script code just before the closing `</head>` tag
   - Alternatively, paste it just before the closing `</body>` tag

4. **Save and Upload**
   - Save your HTML file
   - Upload the updated file to your web server
   - The chatbot should now appear on your website

### For WordPress

1. **Using a Plugin (Recommended)**
   - Install a "Header and Footer Scripts" plugin
   - Go to Settings → Header and Footer Scripts
   - Paste the code in the "Header Scripts" section
   - Save changes

2. **Using Theme Editor**
   - Go to Appearance → Theme Editor
   - Select `header.php` or `footer.php`
   - Paste the code before `</head>` or `</body>`
   - Update file

### For Shopify

1. **Access Theme Code**
   - Go to Online Store → Themes
   - Click "Actions" → "Edit Code"
   - Open `theme.liquid`

2. **Add the Script**
   - Find the `</head>` tag
   - Paste the integration code above it
   - Click "Save"

### For Other Platforms

- **Wix:** Use the "Custom Code" feature in site settings
- **Squarespace:** Use Code Injection in Settings
- **Webflow:** Add to Custom Code in Project Settings
- **React/Next.js:** Add to your `_document.js` or `index.html`

---

## Verification

### Testing Your Integration

After installing the code, verify your chatbot is working:

1. **Visit Your Website**
   - Open your website in a new browser tab
   - Clear your browser cache if needed (Ctrl+Shift+Delete)

2. **Look for the Widget**
   - You should see the chatbot icon in the position you selected
   - It should match the style and colors you configured

3. **Test Functionality**
   - Click the chatbot icon to open it
   - Send a test message
   - Verify the chatbot responds appropriately
   - Check that your welcome message appears

4. **Test on Multiple Devices**
   - Check on desktop browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices (iOS and Android)
   - Ensure the widget is responsive and functional

---

## Troubleshooting

### Chatbot Not Appearing?

> [!WARNING]
> **Common Issues and Solutions:**

**Issue:** Widget doesn't show up
- **Solution:** Check that the script is properly placed in `<head>` or before `</body>`
- **Solution:** Clear browser cache and hard refresh (Ctrl+Shift+R)
- **Solution:** Verify there are no JavaScript errors in browser console (F12)

**Issue:** Widget appears but doesn't respond
- **Solution:** Ensure your chatbot is set to "Active" status in the dashboard
- **Solution:** Check that your knowledge base has content
- **Solution:** Verify your API keys are valid

**Issue:** Widget looks different than preview
- **Solution:** Check for CSS conflicts with your website theme
- **Solution:** Verify the integration code is complete and unmodified
- **Solution:** Ensure you're viewing the latest version (clear cache)

---

## Advanced Options

### Custom Triggers
You can programmatically control the chatbot widget:

```javascript
// Open the chatbot
window.BotifireWidget.open();

// Close the chatbot
window.BotifireWidget.close();

// Send a message programmatically
window.BotifireWidget.sendMessage("Hello!");
```

### Event Listeners
Listen to chatbot events:

```javascript
window.BotifireWidget.on('open', function() {
  console.log('Chatbot opened');
});

window.BotifireWidget.on('message', function(data) {
  console.log('Message received:', data);
});
```

---

## Best Practices

> [!TIP]
> **Performance Tip:** The script loads asynchronously (`async` attribute), so it won't slow down your website's loading time.

> [!IMPORTANT]
> **Security Note:** Never modify the integration code except for the placement. Changing the script URL or parameters may break functionality.

> [!NOTE]
> **Multiple Pages:** You only need to add the code once in your template/header file, and it will appear on all pages automatically.

---

## Navigation

- Click **Previous** to return to Step 4 (Style Studio)
- Click **Next** to proceed to Step 6 (Persona and Tone)

---

## What's Next?

After successfully integrating your chatbot, you'll configure its personality and tone in the final step to ensure it communicates in a way that aligns with your brand voice.
