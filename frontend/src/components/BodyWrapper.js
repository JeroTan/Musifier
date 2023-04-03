import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({children})=>{
    return <>
        <main className="w-full h-full flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </main>
    </>
}