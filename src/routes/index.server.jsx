import { useShopQuery, gql, CacheNone } from "@shopify/hydrogen";
import SlowLoader from "../components/SlowLoader.server";
import { Suspense } from "react";
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

  const delayTimesInMilliseconds = [
    7000, 4000, 2000, 10000, 8000, 9000, 3000, 1000, 5000,
  ];
  return (
    <>
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>
      {delayTimesInMilliseconds.map((itm) => {
        return (
          <Suspense
            fallback={
              <h4
                style={{ padding: "10px", backgroundColor: "#BC8F8F" }}
              >{`Loading a slow component delayed ${itm} milliseconds)`}</h4>
            }
          >
            <h4 style={{ padding: "10px" }}>
              <SlowLoader key={`sl-${itm}`} delayInMilliseconds={itm} />
            </h4>
          </Suspense>
        );
      })}
    </>
  );
}
