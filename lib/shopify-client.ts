// lib/shopify-client.ts
import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: `${process.env.SHOPIFY_STORE_DOMAIN}`, // e.g., 'your-store.myshopify.com'
  apiVersion: '2025-07', // Always use latest stable
  publicAccessToken: `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN}`, // Your Storefront API access token
});

export default client;
