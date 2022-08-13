# Hydrogen Suspense Demo

Simple Hydrogen demo demonstarting server components and streaming server side rendering with suspense.

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

This demo uses the [hello-world] starter template. You can checkout the base template on [StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/stackblitz/templates/hello-world-js).

## Getting started

This repo is organized with a series of tagged commits that allow you to walk through the demo as pieces of functionality are added.

You can checkout steps below by git tag to work through the examples.

1. `git checkout jc-initial-commit` - initial product creation based on the Hydrogen framework hello world template.
2. `git checkout jc-add-product-load` - adding a `useShopQuery` to get a product from the store.
3. `git checkout jc-slow-load-component-no-suspense` - adding a slow loading component with no suspense to show the power of streaming of server side rendering.
4. `git checkout jc-slow-load-component-with-suspense` - adding a suspense boundary to each slow loading component.
5. `git checkout jc-added-caching` - added some caching parameters to the page and product query to demonstrate caching.

**Requirements:**

- Node.js version 16.5.0 or higher
- Yarn

This repo uses the Hydrogen preview store but can be changed to a store of your choosing by updating `hydrogen.config.js` with your shop's domain and Storefront API token!
