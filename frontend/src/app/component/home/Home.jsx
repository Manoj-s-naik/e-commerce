import React from "react";
import Header from "@/app/component/home/Header";
import Navbar from "@/app/component/home/Navbar";
function Home() {
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex-grow bg-green-600">
          <Header />
          <Header />










          
        </div>
      </div>
    </>
  );
}

export default Home;
