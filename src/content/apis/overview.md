# API Overview

The Botifire API is built on **GraphQL** and serves as the backbone for the panel and external integrations.

## Authentication

All API requests require a valid Bearer token in the `Authorization` header.

\`\`\`http
Authorization: Bearer <your_token>
\`\`\`

## Endpoints

| Service | Endpoint | Description |
| :--- | :--- | :--- |
| **Main** | \`/graphql\` | Primary endpoint for all queries/mutations |
| **Upload** | \`/api/upload\` | File upload handling |
| **Webhooks** | \`/api/webhook\` | Incoming webhook receiver |

## Common Queries

### Get User Profile
\`\`\`graphql
query GetMe {
  me {
    id
    name
    email
    role
  }
}
\`\`\`
