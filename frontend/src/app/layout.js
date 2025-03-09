// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <Header />
//         {children}
//       </body>
//     </html>
//   );
// }
// app/layout.js
import React from "react";
import Header from "@/app/home/Header";
import Navbar from "@/app/home/Navbar";
import RecentlyAdded from "@/app/home/RecentlyAdded";

export const metadata = {
  title: "BUYMART",
  description: "E commerce web application",
  icons: {
    icon: "/logo.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="h-[6.5rem]">
            <Header />
          </div>
          <div className="flex">
            <Navbar />
            <div>
              <div>{children}</div>
            </div>
            <div>
              <RecentlyAdded />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
