# Vendor APIs

Documentation for vendor-related endpoints.

## Create Vendor
\`\`\`graphql
mutation CreateVendor($input: VendorInput!) {
  createVendor(input: $input) {
    id
    name
  }
}
\`\`\`
