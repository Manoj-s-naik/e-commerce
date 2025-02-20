import React from "react";
import Header from "@/app/component/home/Header";
import Navbar from "@/app/component/home/Navbar";
import RecentlyAdded from "@/app/component/home/RecentlyAdded";
import Profile from "@/app/component/home/Profile";
import ProductPage from "./ProductPage";
function Home() {
  return (
    <>
      <div className="flex">
        <div className="">
          <Navbar />
        </div>
        <div>
          <div className="h-[5.5rem] ">
            <Header />
          </div>
          <div className="">
            <ProductPage />
          </div>
        </div>
        <div className="">
          <RecentlyAdded />
        </div>
        <div className="">
          <Profile />
        </div>
      </div>
      {/* <div className="flex">
        <div className="order-1">
          <Navbar />
        </div>
        <div className=" bg-red-100 h-[5.5rem] order-1">
          <Header />
        </div>
        <div className="order-2">
          <ProductPage />
        </div>
        <div className="order-1">
          <RecentlyAdded />
        </div>
        <div className="order-1">
          <Profile />
        </div>
      </div> */}
    </>
  );
}

export default Home;
// import React from "react";
// import Header from "@/app/component/home/Header";
// import Navbar from "@/app/component/home/Navbar";
// import RecentlyAdded from "@/app/component/home/RecentlyAdded";
// import Profile from "@/app/component/home/Profile";
// import ProductPage from "./ProductPage";

// function Home() {
//   return (
//     <>
//       <div className="flex">
//         {/* Navbar - Full Screen Height */}
//         <div className="h-screen">
//           <Navbar />
//         </div>

//         {/* Main Content - Flex Column for Header + Product Page */}
//         <div className="flex flex-col w-[1000px]">
//           {/* Header - Fixed Height */}
//           <div className="h-[5.5rem]">
//             <Header />
//           </div>

//           {/* Product Page - Takes Remaining Space */}
//           <div className="flex-1">
//             <ProductPage />
//           </div>
//         </div>

//         {/* Recently Added - Full Screen Height */}
//         <div className="h-screen">
//           <RecentlyAdded />
//         </div>
//         <div>
//           <Profile />
//         </div>
//         {/* Profile - No Specific Height (Adjusts Automatically) */}
//       </div>
//     </>
//   );
// }

// export default Home;
