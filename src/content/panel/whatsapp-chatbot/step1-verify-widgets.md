# Step 1: Verify Widgets (WABA Setup)

The first step in creating a WhatsApp chatbot is to connect your WhatsApp Business API (WABA) account. This step verifies your WhatsApp credentials and establishes the connection between your chatbot and WhatsApp.

---

## Overview

WhatsApp chatbots require a WhatsApp Business API account. This step guides you through connecting your WABA credentials to enable your chatbot to send and receive messages on WhatsApp.

---

## Two Scenarios

### Scenario 1: You Already Have WABA and Phone Number

If you already have a WhatsApp Business API account and verified phone number:

![WABA Setup - Already Have Account](../../../images/panel.botifire.com/whatsapp%20cahtbots%20creation%20steps/step%201%20havingWabaAndNumber.png)

You'll need to provide your existing credentials (see fields below).

### Scenario 2: You Don't Have WABA Yet

If you don't have a WhatsApp Business API account:

![WABA Setup - No Account](../../../images/panel.botifire.com/whatsapp%20cahtbots%20creation%20steps/step%201%20doesnotHavingWaba.png)

The system will guide you through the setup process or provide instructions on how to obtain WABA credentials.

---

## Required Fields

### WhatsApp Widgets
**Purpose:** Configuration section for WhatsApp-specific settings.

This is the main container for all WhatsApp Business API credentials.

### Select Type
**Purpose:** Choose between WABA and phone number setup options.

- Select the type of WhatsApp account you're connecting
- Options may include: Business API, Cloud API, or other integration types

---

## WABA Credentials

### WABA ID
**Purpose:** Your WhatsApp Business Account identifier.

- This is a unique ID provided by Meta (Facebook)
- Format: Numeric ID (e.g., 123456789012345)
- **Where to find it:** Meta Business Manager → WhatsApp Accounts
- **Important:** Enter your WABA ID if you don't have one, please select "I'm not have WABA" option

### Meta Number ID
**Purpose:** The unique identifier for your WhatsApp phone number.

- Each WhatsApp Business phone number has a unique Meta Number ID
- Format: Numeric ID
- **Where to find it:** Meta Business Manager → WhatsApp → Phone Numbers
- **Note:** If you don't have this yet, you'll need to register a phone number first

### Business ID
**Purpose:** Your Meta Business Manager account ID.

- This links your WhatsApp account to your Meta Business account
- Format: Numeric ID
- **Where to find it:** Meta Business Manager → Business Settings → Business Info
- **Required for:** API access and business verification

### System User Token
**Purpose:** Authentication token for API access.

- A secure token that allows the chatbot to access your WhatsApp account
- Format: Long alphanumeric string
- **Where to find it:** Meta Business Manager → System Users → Generate Token
- **Security:** Keep this token confidential - it provides access to your WhatsApp account
- **Permissions needed:** `whatsapp_business_messaging`, `whatsapp_business_management`

---

## Webhook Setup Verification

### APP ID
**Purpose:** Your Meta App identifier for webhook connections.

- This is the ID of your Meta (Facebook) App
- Format: Numeric ID
- **Where to find it:** Meta Developers → Your App → Settings → Basic
- **Used for:** Receiving incoming WhatsApp messages

### App Secret Key
**Purpose:** Secret key for securing webhook communications.

- A confidential key that verifies webhook requests
- Format: Alphanumeric string
- **Where to find it:** Meta Developers → Your App → Settings → Basic → App Secret
- **Security:** Never share this publicly - it secures your webhook connection

---

## How to Get WABA Credentials

> [!IMPORTANT]
> **Prerequisites for WhatsApp Business API:**
> 
> 1. **Meta Business Account** - Create one at business.facebook.com
> 2. **Verified Business** - Your business must be verified by Meta
> 3. **Phone Number** - A dedicated phone number for WhatsApp (not currently using regular WhatsApp)
> 4. **Meta Developer Account** - Create an app at developers.facebook.com

### Step-by-Step Setup Guide:

1. **Create Meta Business Account**
   - Go to [business.facebook.com](https://business.facebook.com)
   - Create or log into your business account
   - Complete business verification

2. **Create a Meta App**
   - Visit [developers.facebook.com](https://developers.facebook.com)
   - Create a new app
   - Select "Business" as the app type
   - Add WhatsApp product to your app

3. **Get Your WABA**
   - In your Meta App, go to WhatsApp → Getting Started
   - Create a new WhatsApp Business Account or connect existing one
   - Note your WABA ID

4. **Register Phone Number**
   - Add a phone number to your WABA
   - Verify the phone number
   - Note your Meta Number ID

5. **Generate System User Token**
   - Go to Business Settings → System Users
   - Create a system user or use existing
   - Generate a token with WhatsApp permissions
   - Copy and save the token securely

6. **Get App Credentials**
   - In your Meta App, go to Settings → Basic
   - Copy your App ID
   - Click "Show" to reveal and copy App Secret

---

## Verification Process

After entering all credentials:

1. **Click "Verify" or "Next"**
   - The system will validate your credentials
   - This may take a few moments

2. **Successful Verification**
   - You'll see a success message
   - You can proceed to the next step

3. **Verification Failed**
   - Double-check all IDs and tokens
   - Ensure your system user has proper permissions
   - Verify your app has WhatsApp product enabled
   - Check that your phone number is verified

---

## Troubleshooting

> [!WARNING]
> **Common Issues:**

**Issue:** "Invalid WABA ID"
- **Solution:** Verify you're using the WABA ID, not the phone number or business ID
- **Solution:** Check Meta Business Manager for the correct WABA ID

**Issue:** "Invalid System User Token"
- **Solution:** Regenerate the token with all required permissions
- **Solution:** Ensure token hasn't expired (tokens can have expiration dates)
- **Solution:** Verify the token is for the correct WABA

**Issue:** "Webhook verification failed"
- **Solution:** Double-check App ID and App Secret
- **Solution:** Ensure your app has WhatsApp product added
- **Solution:** Verify webhook URL is correctly configured in Meta App

---

## Best Practices

> [!TIP]
> **Security Best Practices:**
> - Store tokens securely - never commit them to version control
> - Use system users instead of personal accounts for tokens
> - Set token expiration dates and rotate regularly
> - Limit token permissions to only what's needed

> [!NOTE]
> **Phone Number Requirements:**
> - Must be a business phone number
> - Cannot be registered with regular WhatsApp
> - Must be able to receive SMS for verification
> - Recommended: Use a dedicated number for your chatbot

---

## Navigation

- Click **Previous** to go back (if available)
- Click **Next** to proceed to Step 2 (Connect Site)

---

## What's Next?

Once your WABA is verified and connected, you'll move to the Connect Site step where you'll configure which content from your website the WhatsApp chatbot should learn from.
