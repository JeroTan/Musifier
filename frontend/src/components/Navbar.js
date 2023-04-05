import Link from "next/link";
import { useState } from "react";
/// css
import myStyle from './Navbar.module.css';
/// utilities
import Icon from "@/utilities/Icon";

export default () => {
    // useState
    const [ selectionItem, selectionItemSet ] = useState(false);
    const [ openMenu, openMenuSet ] = useState(false);


    // populate - Navbar Selection
    const selectionContent = {
        instrument:<>
            <Link className={`${myStyle.select} cursor-pointer flex flex-row mb-2`} href={`/`}>
                <div className={`${myStyle.light} w-1 h-[5px]"`}></div>
                <span className="ml-1">Electric Guitar</span>
            </Link>
            <div>
                <span className="text-slate-400">...in Beta</span>
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
        <nav className="fixed z-10 w-full h-20 bg-gray-900 text-slate-200 after:absolute after:bottom-0 after:translate-y-full after:h-[0.2rem] after:w-full after:bg-gradient-to-r after:from-sky-400 after:to-blue-500 after:drop-shadow-lg">
            <main className="w-full h-full px-5 gap-x-12 flex md:justify-center justify-between">
                {/*Logo Container*/}
                <Link className="cursor-pointer" href={'/'}>
                    <Icon name="musifier_dark" className="w-36 h-full"/>
                </Link>
                {/*HyperLinks*/}
                <section className="relative gap-x-10 md:flex hidden flex-row items-center text-xl font-semibold tracking-wide">
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
                        <div className={`absolute bottom-0 ${selectionItem=='join'||selectionItem=='account'?'right-0':`left-[${selectionItem=='instrument'?'0':''}${selectionItem=='theory'?'40%':''}]`} translate-y-full z-10 w-auto h-auto rounded-b-xl flex flex-col shadow-md bg-gray-900 font-normal tracking-tight text-lg p-5 ${selectionItem ? myStyle.SlideDown : ''}`}>
                            {selectionContent[selectionItem]}
                        </div> : <></>
                    }
                </section>
                {/*Burger*/}
                <section className="md:hidden flex items-center" onClick={()=>{openMenuSet(true)}}>
                    <Icon name="bars" tailwindClass="fill-sky-400" className="w-7 cursor-pointer"/>
                </section>
            </main>
        </nav>

        <nav className={`fixed ${openMenu?`md:hidden flex ${myStyle.SlideLeft}`:'hidden'} flex-col w-full h-full p-5 z-10 bg-zinc-900 text-slate-200`}>
            <div className="w-full flex justify-end mb-5">
                <Icon name="close" tailwindClass="fill-sky-700" className="cursor-pointer w-12" onClick={()=>{openMenuSet(false)}}/>
            </div>
            <div className={`p-2 w-full rounded-lg flex ${selectionItem != 'instrument'?'hover:bg-gray-800':'bg-gray-800'}`} onClick={()=>{selectionItemSet(prev=>prev=='instrument'?false:'instrument')}}>
                <div className="flex-0">
                    <Icon name={selectionItem == 'instrument' ?`up`:`down`} tailwindClass={`fill-slate-500`} className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="w-full">
                    <h5 className={`text-2xl tracking-tight font-semibold ${selectionItem=='instrument'?'text-slate-600':`fill-slate-200`}`}>Instruments</h5>
                    <div className={`pt-4 ${selectionItem == 'instrument'?`flex`:`hidden`} flex-col gap-y-2 `}>
                        {selectionItem ?selectionContent[selectionItem] :''}
                    </div>
                </div>
            </div>
            <div className={`p-2 w-full rounded-lg flex ${selectionItem != 'theory'?'hover:bg-gray-800':'bg-gray-800'}`} onClick={()=>{selectionItemSet(prev=>prev=='theory'?false:'theory')}}>
                <div className="flex-0">
                    <Icon name={selectionItem == 'theory' ?`up`:`down`} tailwindClass={`fill-slate-500`} className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="w-full">
                    <h5 className={`text-2xl tracking-tight font-semibold ${selectionItem=='theory'?'text-slate-600':`fill-slate-200`}`}>Theory</h5>
                    <div className={`pt-4 ${selectionItem == 'theory'?`flex`:`hidden`} flex-col gap-y-2 `}>
                        {selectionItem ?selectionContent[selectionItem] :''}
                    </div>
                </div>
            </div>
            <div className={`p-2 w-full rounded-lg flex ${selectionItem != 'join'?'hover:bg-gray-800':'bg-gray-800'}`} onClick={()=>{selectionItemSet(prev=>prev=='join'?false:'join')}}>
                <div className="flex-0">
                    <Icon name={selectionItem == 'join' ?`up`:`down`} tailwindClass={`fill-slate-500`} className="h-8 ml-[-4px] w-full"/>
                </div>
                <div className="w-full">
                    <h5 className={`text-2xl tracking-tight font-semibold ${selectionItem=='join'?'text-slate-600':`fill-slate-200`}`}>Join</h5>
                    <div className={`pt-4 ${selectionItem == 'join'?`flex`:`hidden`} flex-col gap-y-2 `}>
                        {selectionItem ?selectionContent[selectionItem] :''}
                    </div>
                </div>
            </div>
        </nav>


        {/*Nav Filler*/}
        <div className="w-full h-[5.2rem]">
            
        </div>
    </header>
    </>
}