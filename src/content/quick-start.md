# Quick Start

Get up and running with the Botifire platform development environment.

## Prerequisites

Ensure you have the following tools installed:

- **Node.js** (v18+)
- **PHP** (v8.2+)
- **Composer**
- **MySQL**

## Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/botifire/complete.git
   \`\`\`

2. **Install Backend Dependencies**:
   Navigate to `apis.botifire.com` and run:
   \`\`\`bash
   composer install
   \`\`\`

3. **Install Frontend Dependencies**:
   Navigate to `panel.botifire.com` and run:
   \`\`\`bash
   npm install
   \`\`\`

## Running the Services

To start the development servers:

### APIs
\`\`\`bash
php artisan serve
\`\`\`

### Panel
\`\`\`bash
npm run dev
\`\`\`
