"use client"
import { ReactNode } from 'react';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';
import { LucideProvider } from 'lucide-react';
import { WOProvider } from '@/context/WOContext';

const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <WOProvider>
                <nav>
                    <Navbar />
                </nav>

                <main className="w-full flex-1">
                    {children}
                </main>

                <Toaster />

                <Footer />
            </WOProvider>
        </div>
    );
};

export default ClientLayout;