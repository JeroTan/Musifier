import Link from "next/link";
import { useState } from "react";
/// css
import myStyle from './Navbar.module.css';
/// utilities
import Icon from "@/utilities/Icon";

export default () => {
    // useState
    const [ selectionItem, selectionItemSet ] = useState(false);


    // populate - Navbar Selection
    const selectionContent = {
        instrument:<>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Electric Guitar</span>
            </Link>
            <div>
                <span className="text-slate-500">...in Beta</span>
            </div>
        </>,
        theory:<>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Terminologies</span>
            </Link>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Intervals</span>
            </Link>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Scales</span>
            </Link>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Chords</span>
            </Link>
        </>,
        join:<>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Login</span>
            </Link>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Sign-up</span>
            </Link>
        </>,
    }
    
    return <>
    <header className="relative">
        {/*First Nav*/}
        <nav className="fixed z-10 w-full h-20 gap-x-12 flex justify-center bg-gray-900 text-slate-200 after:absolute after:bottom-0 after:translate-y-full after:h-[0.2rem] after:w-full after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:drop-shadow-lg">
            {/*Logo Container*/}
            <Link className="cursor-pointer" href={'/'}>
                <Icon name="musifier_dark" className="w-36 h-full"/>
            </Link>
            {/*HyperLinks*/}
            <div className="relative gap-x-10 flex flex-row items-center text-xl font-semibold tracking-wide">
                <div className="flex flex-row items-center cursor-pointer" onClick={()=>{selectionItemSet(prev=>prev=='instrument'?false:'instrument')}}>
                    <span>Instruments</span>
                    <Icon name={selectionItem == 'instrument' ?`up`:`down`} tailwindClass="fill-slate-500" className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="flex flex-row items-center cursor-pointer" onClick={()=>{selectionItemSet(prev=>prev=='theory'?false:'theory')}}>
                    <span>Theory</span>
                    <Icon name={selectionItem == 'theory' ?`up`:`down`} tailwindClass="fill-slate-500" className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="flex flex-row items-center cursor-pointer" onClick={()=>{selectionItemSet(prev=>prev=='join'?false:'join')}}>
                    <span>Join</span>
                    <Icon name={selectionItem == 'join' ?`up`:`down`} tailwindClass="fill-slate-500" className="h-8 ml-[-4px] w-full"/>
                </div>
                {
                    selectionItem ?
                    <div className={`absolute bottom-0 translate-y-full z-10 w-auto h-auto rounded-b-xl flex flex-col shadow-md bg-gray-900 font-normal tracking-tight text-lg p-5 ${selectionItem ? myStyle.SlideDown : ''}`}>
                        {selectionContent[selectionItem]}
                    </div> : <></>
                }
                
            </div>
        </nav>


        {/*Nav Filler*/}
        <div className="w-full h-[5.2rem]">

        </div>
    </header>
    </>
}