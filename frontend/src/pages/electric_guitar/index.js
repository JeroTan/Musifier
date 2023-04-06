import { useState, useRef } from "react"

/// Components
import Frettboard from "@/components/instruments/electric-guitar/Frettboard"


export default ()=>{
    // useState
    const [ tune, tuneSet ] = useState([0, 0, 0, 0, 0, 0]);
    
    // handler
    const changeTune = (stringNum, data)=>{
        let sanitizeValue = Number(data.value);
        sanitizeValue = sanitizeValue <= Number(data.max) ? sanitizeValue : Number(data.max);
        sanitizeValue = sanitizeValue >= Number(data.min) ? sanitizeValue : Number(data.min);
        tuneSet(prev=>{
            prev[stringNum]=sanitizeValue;
            return [...prev];
        })
    }
    
    // class Preset
    const inputCSS = 'rounded-sm focus:outline outline-2 bg-slate-600 tracking-tight font-light';
    const inputLabelCSS = 'text-lg tracking-wide text-cyan-400 font-semibold;'
    const registerSelectCSS = 'w-7 h-7 rounded-full  flex justify-center items-center';

    return <>
    <main className="w-full min-h-screen px-5 text-slate-200">
        <section className="w-full py-20">
            <h1 className={`text-6xl text-slate-200 font-extralight pb-2 tracking-wide text-center`}>Electric Guitar</h1>
            <p className='text-lg font-light text-slate-300 tracking-wide text-center'>
                You can tap on any of the frets/strings to highlight the notes.
            </p>
        </section>

        {/**Fretboard Controls Section */}
        <section className="mb-2 flex flex-wrap gap-x-5">
            <div>
                <label className={`${inputLabelCSS}`}>Scale: </label>
                <select className={`${inputCSS} p-1`}>
                    <option className="">Major scale</option>
                    <option className="">Minor scale</option>
                    <option className="">Minor pentatonic scale</option>
                    <option className="">Major pentatonic scale</option>
                </select>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Mode: </label>
                <select className={`${inputCSS} p-1 px-2 font-semibold`}>
                    <option className="">1</option>
                    <option className="">2</option>
                    <option className="">3</option>
                    <option className="">4</option>
                    <option className="">5</option>
                </select>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Pattern: </label>
                <input className={`${inputCSS} p-1 px-2`} type="text"/>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Notes: </label>
                <input className={`${inputCSS} p-1 px-2`} type="text"/>
            </div>
            <div className="flex flex-row items-center gap-x-2">
                <label className={`${inputLabelCSS}`}>Register:</label>
                <div className={`${registerSelectCSS} bg-lime-700`}>
                    <span>2</span>
                </div>
                <div className={`${registerSelectCSS} bg-teal-700`}>
                    <span>3</span>
                </div>
                <div className={`${registerSelectCSS} bg-blue-700`}>
                    <span>4</span>
                </div>
                <div className={`${registerSelectCSS} bg-violet-700`}>
                    <span>5</span>
                </div>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Interval Flow: </label>
                <select className={`${inputCSS} p-1 px-2 font-semibold`}>
                    <option className="">Ascending</option>
                    <option className="">Descending</option>
                </select>
            </div>
        </section>
        {/**
         * Controls is composed of Scales, Modes, Pattern, Notes, Register Colors
         * I've been thinking to add Chords mode or Solo
        */}

        {/**Fretboard Section */}
        <section className="w-full lg:overflow-visible overflow-x-auto">
            <div className="lg:w-full w-[70rem] flex flex-row">
                <section className="flex flex-col justify-between xl:py-3 py-1 pr-1">
                    <div>
                        <h6 className="text-center xl:text-base text-sm">Tune</h6>
                    </div>
                    {tune.map((a, key)=>
                        <div key={key}>
                            <input type="number" min="-24" max="24" className={`2xl:w-14 w-10 ${inputCSS} 2xl:p-1 p-0 outline-sky-500 xl:text-base text-sm`} value={tune[key]} onInput={({target})=>changeTune(key, target)}/>
                        </div>
                    )}
                </section>
                <section className="flex-1 w-full">
                    <Frettboard />
                </section>
            </div>

        </section>

    </main> 
    </>
}