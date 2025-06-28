export const GET_PRODUCTS_QUERY = `
  query Products($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

// lib/queries.ts
export const GET_PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      productType
      tags
      trackingParameters
      seo {
        title
        description
      }

      options {
        name
        values
      }

      images(first: 5) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }

      variants(first: 10) {
        edges {
          node {
            id
            title
            sku
            availableForSale
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }

      # Rotating images metafield (media list)
      metafield(namespace: "custom", key: "rotating_images") {
        id
        namespace
        key
        type
        references(first: 10) {
          edges {
            node {
              ... on MediaImage {
                image {
                  url
                  altText
                  width
                  height
                }
              }
            }
          }
        }
      }

      # Standard metafields (age group and gender)
      ageGroup: metafield(namespace: "standard", key: "age_group") {
        value
      }

      gender: metafield(namespace: "standard", key: "gender") {
        value
      }

      # Optional custom metafield for sub-category (like "Trucker Jackets")
      category: metafield(namespace: "custom", key: "sub_category") {
        value
      }

      # Optional collections (e.g., "Coats & Jackets")
      collections(first: 1) {
        edges {
          node {
            id
            handle
            title
          }
        }
      }
    }
  }
`;

// lib/queries.ts
export const PRODUCT_CARD_FRAGMENT = `#graphql
  fragment ProductCard on Product {
    id
    title
    handle
    vendor
    publishedAt
    variants(first: 1) {
      nodes {
        id
        image {
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        selectedOptions {
          name
          value
        }
        product {
          handle
        }
      }
    }
  }
`;

export const ALL_PRODUCTS_QUERY = `#graphql
  query AllProducts($first: Int, $endCursor: String) {
    products(first: $first, after: $endCursor) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${PRODUCT_CARD_FRAGMENT}
`;

export const GET_COLLECTION_PRODUCTS = `
  query getCollectionProducts($handle: String!, $first: Int!, $after: String) {
    collection(handle: $handle) {
      title
      products(first: $first, after: $after) {
        edges {
          cursor
          node {
            title
            handle
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                  height
                  width
                }
              }
            }
            
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
  }
`;

export const GET_RECOMMENDED_PRODUCTS = `
query ProductRecommendations($handle: String!, $intent: ProductRecommendationIntent = RELATED) {
  productRecommendations(productHandle: $handle, intent: $intent) {
    title
    handle
    images(first: 1) {
      edges {
        node {
          url
          altText
          height
          width
        }
      }
    }
  }
}

`;

export const CART_CREATE_QUERY = `
  mutation {
    cartCreate {
      cart {
        id
      }
    }
  }
`;

export const VERIFY_CART_QUERY = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
    }
  }
`;