// import React from "react";

// function ProductPage() {
//   return (
//     <>
//       <div className="border shadow-lg rounded-lg p-6 gap-4 h-[calc(100vh-5.5rem)] overflow-auto w-full flex flex-wrap ">
//         <div className="">
//           <img src="/bag.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p className="text-center pt-1">Fashion ladies Bag</p>
//           <div className="flex justify-center">
//             <button>$1000</button>
//           </div>
//           <div className=" flex gap-16">
//             <button>buy now</button>
//             <button>Add to Cart</button>
//           </div>
//         </div>
//         <div>
//           <img src="/watch.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/shoe.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/cloths.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>

//         <div>
//           <img src="/cloths.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/mobile.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/glass.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/laptop.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/mic.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/mobile.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/officebag.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/showcase.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/watch1.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/scent.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/gaming.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//         <div>
//           <img src="/cloths.webp" alt="" className="h-[15rem] w-[14rem]" />
//           <p>Fashion ladies Bag</p>
//           <div className="flex gap-2 justify-center">
//             <button>$1000</button>
//             <button>buy now</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductPage;
import React from "react";

function ProductPage() {
  return (
    <>
      <div className="border shadow-lg rounded-lg p-6 gap-4 h-[calc(100vh-5.5rem)] overflow-auto w-full flex flex-wrap ">
        {[
          { src: "/bag.webp", name: "Fashion Ladies Bag", price: "$177" },
          { src: "/watch.webp", name: "Stylish Wristwatch", price: "$122" },
          { src: "/shoe.webp", name: "Trendy Sneakers", price: "$323" },
          { src: "/cloths.webp", name: "Designer Outfit", price: "$112" },
          { src: "/mobile.webp", name: "Latest Smartphone", price: "$123" },
          { src: "/glass.webp", name: "Fashionable Sunglasses", price: "$543" },
          {
            src: "/laptop.webp",
            name: "High-Performance Laptop",
            price: "$332",
          },
          { src: "/mic.webp", name: "Professional Microphone", price: "$ 346" },
          {
            src: "/officebag.webp",
            name: "Premium Office Bag",
            price: "$ 299",
          },
          { src: "/showcase.webp", name: "Showcase Decor", price: "$ 245" },
          { src: "/watch1.webp", name: "Luxury Watch", price: "$ 768" },
          { src: "/scent.webp", name: "Exquisite Perfume", price: "$ 987" },
          { src: "/gaming.webp", name: "Gaming Console", price: "$ 234" },
        ].map((product, index) => (
          <div key={index} className="border rounded-xl shadow-2xl ">
            <img
              src={product.src}
              alt={product.name}
              className="h-[15rem] w-[14rem] rounded-t-xl"
            />
            <p className="text-center font-bold font-serif pt-1">
              {product.name}
            </p>
            <div className="flex justify-center">
              <button>{product.price}</button>
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
