import { Header } from "@/components/layout/header";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

export const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-[#121212]">
            <Header currentPage="home" setCurrentPage={() => {}}/>
            <div className="container mx-auto px-3 pt-20 pb-8">
                <Outlet/>
            </div>
            <SpeedInsights/>
        </div>
    )
};