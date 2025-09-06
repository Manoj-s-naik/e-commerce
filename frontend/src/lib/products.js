export const productFetcher = async () => {
  const response = await fetch("http://localhost:3003/products", {
    cache: "no-store",
  });
  const data = await response.json();
  return data.products;
};
