import { useQuery } from "@shopify/hydrogen";
export default function SlowLoader({ delayInMilliseconds }) {
  useQuery(
    `key-${delayInMilliseconds}`,
    () => new Promise((resolve) => setTimeout(resolve, delayInMilliseconds)),
    { cache: { mode: "no-store" } }
  );
  return (
    <span>{`Delayed Request of ${delayInMilliseconds} milliseconds loaded.`}</span>
  );
}
