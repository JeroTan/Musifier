import Link from "next/link";

/// utilities
import Icon from "@/utilities/Icon";

export default () => {
    return <>
    <header className="relative">
        {/*First Nav*/}
        <nav className="fixed w-full h-20 gap-x-12 flex justify-center bg-gray-900 text-slate-200 after:absolute after:bottom-0 after:translate-y-full after:h-[0.2rem] after:w-full after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:drop-shadow-lg">
            {/*Logo Container*/}
            <Link className="cursor-pointer" href={'/'}>
                <Icon name="musifier_dark" className="w-36 h-full"/>
            </Link>
            {/*HyperLinks*/}
            <div className="gap-x-10 flex flex-row items-center text-xl font-semibold tracking-wide">
                <div className="flex flex-row items-center cursor-pointer">
                    <span>Instruments</span>
                    <Icon name="down" tailwindClass="fill-slate-300" className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <span>Theory</span>
                    <Icon name="down" tailwindClass="fill-slate-300" className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="flex flex-row items-center cursor-pointer">
                    <span>Join</span>
                    <Icon name="down" tailwindClass="fill-slate-300" className="h-8 ml-[-4px] w-full"/>
                </div>
            </div>
        </nav>


        {/*Nav Filler*/}
        <div className="w-full h-[5.2rem]">

        </div>
    </header>
    </>
}