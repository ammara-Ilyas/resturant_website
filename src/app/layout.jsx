import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MenuProvider } from "@/contextApi/MenuContext";
import ProgressBarProviders from "@/components/miniWidgets/ProgressBar";
import { ToastContainer, toast } from "react-toastify";
import Booking from "@/components/miniWidgets/Wrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resturant Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relativen 
        `}
      >
        <MenuProvider>
          <main className=" w-[100%] box-border overflow-hidden">
            <ProgressBarProviders>
              <Navbar />
              {children}
              <Footer />
            </ProgressBarProviders>
            <ToastContainer />
            <Booking />
          </main>
        </MenuProvider>
      </body>
    </html>
  );
}
