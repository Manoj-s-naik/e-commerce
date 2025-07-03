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
import { Providers } from "@/redux/Providers";
import Header from "@/app/home/components/Header";
import Navbar from "@/app/home/components/Navbar";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
   
      <html lang="en">
        <body>
        <Providers>
          <div className="">
            <div className="h-[6.5rem]">
              <Header />
            </div>
            <div className="flex">
              <Navbar />
              <div>{children}</div>
            </div>
          </div>
        </Providers>
        </body>
      </html>
    
  );
}
