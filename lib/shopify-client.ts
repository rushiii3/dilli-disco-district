// lib/shopify-client.ts
import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: ``,
  apiVersion: '2025-07', // Always use latest stable
  publicAccessToken: "",
});

export default client;
