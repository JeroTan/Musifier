import Navbar from "./Navbar";
import Footer from "./Footer";
import { Inter } from 'next/font/google'
import CSSaddon from "@/utilities/CSSaddon";

const inter = Inter({ subsets: ['latin'] })

export default ({children})=>{
    return <>
        <main className={`w-full h-full flex flex-col min-h-screen ${inter.className}`}>
            <Navbar />
            <CSSaddon />
            <main className="flex-1 bg-slate-800">
                {children}
            </main>
            <Footer />
        </main>
    </>
}