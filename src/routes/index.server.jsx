import { useShopQuery, gql, CacheNone } from "@shopify/hydrogen";
import SlowLoader from "../components/SlowLoader.server";
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

  const delayTimesInMilliseconds = [10000, 3000, 1000];
  return (
    <>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      {delayTimesInMilliseconds.map((itm) => {
        return <SlowLoader delayInMilliseconds={itm} />;
      })}
    </>
  );
}
