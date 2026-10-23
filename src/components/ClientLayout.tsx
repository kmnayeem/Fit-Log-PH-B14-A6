"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import { WOProvider } from "@/context/WOContext";

const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <WOProvider>
        <nav className="relative z-50 h-[70px] shrink-0">
          <Navbar />
        </nav>

        <main className="w-full flex-1">
          {children}
        </main>

        <Toaster position="top-right" />

        <Footer />
      </WOProvider>
    </div>
  );
};

export default ClientLayout;
