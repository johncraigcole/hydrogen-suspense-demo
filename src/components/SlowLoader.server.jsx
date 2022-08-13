import { useQuery } from "@shopify/hydrogen";
export default function SlowLoader({ delayInMilliseconds }) {
  useQuery(
    `no-key`,
    () => new Promise((resolve) => setTimeout(resolve, delayInMilliseconds)),
    { cache: { mode: "no-store" } }
  );
  return (
    <span>{`Delayed Request of ${
      delayInMilliseconds / 1000
    } seconds loaded.`}</span>
  );
}
