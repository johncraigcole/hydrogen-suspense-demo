import { useShopQuery, gql, CacheNone } from "@shopify/hydrogen";

export default function Home({ response }) {
  // Disable page level caching
  response.cache(CacheNone());

  // Load a product
  const {
    data: { product },
  } = useShopQuery({
    query: gql`
      query getAurora {
        product(handle: "shopify-aurora") {
          title
          description
        }
      }
    `,
  });

  return (
    <>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
    </>
  );
}
