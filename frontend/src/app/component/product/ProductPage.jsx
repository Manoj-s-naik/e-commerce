import React from "react";

async function ProductPage() {
  const response = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });
  const data = await response.json();
  const products = data.products;
  console.log(products);

  return (
    <>
      <div className="border shadow-lg rounded-lg p-6 gap-4 h-[calc(100vh-5.5rem)] overflow-auto w-full flex flex-wrap ">
        {products.map((product, index) => (
          <div key={index} className="border rounded-xl shadow-2xl ">
            <img
              src="/headphone.webp"
              alt={product.name}
              className="h-[15rem] w-[14rem] rounded-t-xl"
            />
            <p className="text-center font-bold font-serif pt-1">
              {product.name}
            </p>
            <div className="flex justify-center">
              <button>{"$ "+product.price}</button>
            </div>
            <div className="flex gap- justify-evenly">
              <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                Buy Now
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
