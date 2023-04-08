import { useState, useRef, createContext, useEffect } from "react"

/// Components
import Frettboard from "@/components/instruments/electric-guitar/Frettboard"

/// utilities
import { noteSimp, noteChecker, noteToNum } from "@/utilities/NoteSimp";
import { resume } from "@/server/database/Connection";

/// Context
export const Gbl_stringTune = createContext([]);
export const Gbl_noteSequence = createContext([]);
export const Gbl_notePick = createContext([]);
export const Gbl_noteFlow = createContext([]);

/// Helper
export const noteRearrange = (notes, noteFlow)=>{
    let tempNotePick = [...notes];
    let rootNote = tempNotePick[0];
    if(noteFlow == 'Ascending')
        tempNotePick.sort((a, b)=>a-b);
    else if (noteFlow == 'Descending')
        tempNotePick.sort((a,b)=>b-a);

    let newRootNoteLoc = tempNotePick.indexOf(rootNote);
    if(0 != newRootNoteLoc){
        let sampledNote = tempNotePick.splice(0, newRootNoteLoc);
        tempNotePick = tempNotePick.concat(sampledNote);
    }
    return tempNotePick;
}

export default ()=>{
    // useState
    const [ tune, tuneSet ] = useState([0, 0, 0, 0, 0, 0]);
    const [ noteSequence, noteSequenceSet ] = useState([
        'A', 'A_sharp', 'B', 'C', 'C_sharp', 'D', 'D_sharp', 'E', 'F', 'F_sharp', 'G', 'G_sharp'
    ])
    const [ notePick, notePickSet ] = useState([]);
    const [ notePattern, notePatternSet ] = useState('');
    const [ noteFlow, noteFlowSet ] = useState('Ascending');
    const [ intervalPattern, intervalPatternSet ] = useState('');
    const [ scale, scaleSet ] = useState( 'false' );
    const [ scaleModes, scaleModesSet ] = useState([]);
    const [ selectedMode, selectedModeSet ] = useState(0);

    // useEffect
    useEffect(()=>{
        if(notePick.length<1){
            notePatternSet( '' );
            intervalPatternSet( '' );
        }else{
            notePatternSet( notePick.map(item=>noteSimp(noteSequence[item])) );
            
            let tempIntervalPattern = notePick.reduce((acc, item, index, ref)=>{
                let addon = 0;
                let tempAcc = acc;
                if(ref[(index+1)%ref.length] < item && noteFlow == 'Ascending')
                    addon = 12;
                else if(item < ref[(index+1)%ref.length] && noteFlow == 'Descending')
                    addon = -12;
                let interval = Math.abs((ref[(index+1)%ref.length]+addon) - item);
                if(interval == 1){
                    tempAcc = `${tempAcc} H`;
                }
                else if(interval == 2){
                    tempAcc = `${tempAcc} W`;
                }
                else if(interval > 2){
                    if(interval % 2 == 0)
                        tempAcc = `${tempAcc} ${interval/2}W`;
                    else if(interval % 2 != 0)
                        tempAcc = `${tempAcc} ${(interval-1)/2}WH`;
                }else{
                    return '';
                }
                return tempAcc;
            }, '')
            intervalPatternSet(tempIntervalPattern);
        }

        
    }, [notePick]);
    
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
    const notePatternRevised = ()=>{
        let value = (notePattern).split(/[,; \/\\\-+]/);
        if(value.length < 1){
            notePickSet( [] );
            return false;
        }
            

        let newValue = value.reduce((acc, item)=>{
            let result = noteSimp(item);
            let tempAcc = [...acc];
            if(result){
                tempAcc[tempAcc.length] =result;
            }
            return tempAcc;
        })
        if(newValue.length < 1){
            notePickSet( [] );
            return false;
        }

        newValue = [... new Set(newValue)];
        //notePatternSet(newValue.join(' '));

        notePickSet( noteRearrange(newValue.map(item=>noteToNum(item)), noteFlow) );
    }
    const noteSequenceChange = ({target})=>{
        if(noteFlow == target.value)
            return false;
        
        noteFlowSet(target.value)
        if(target.value == 'Ascending')
            noteSequenceSet([
                'A', 'A_sharp', 'B', 'C', 'C_sharp', 'D', 'D_sharp', 'E', 'F', 'F_sharp', 'G', 'G_sharp'
            ]);
        else if(target.value == 'Descending')
            noteSequenceSet([
                'A', 'B_flat', 'B', 'C', 'D_flat', 'D', 'E_flat', 'E', 'F', 'G_flat', 'G', 'A_flat'
            ])
        
        notePickSet(prev=>[...prev])
    }
    const scaleChange = ({target})=>{
        if(scale == target.value)
            return false;
        
        scaleSet(target.value);
        let interval = [];
        switch(target.value){
            case 'major scale':
                interval = [0, 2, 4, 5, 7, 9, 11];
            break;
            case 'natural minor scale':
                interval = [0, 2, 4, 5, 7, 8, 10];
            break;
            case 'minor pentatonic':
                interval = [0, 3, 5, 7, 10];
            break;
            case 'major pentatonic':
                interval = [0, 2, 4, 7, 9];
            break;
        }
        
        let modes = [interval, ...interval.reduce((acc, item, index, ref)=>{
            let tempRef = [...ref];
            
            if(index > 0 ){
                let createNotes = [];
                for(let i = 0; i < tempRef.length; i++){
                    createNotes[i] = tempRef[(i+index)%tempRef.length] + ( ((i+index)%tempRef.length) < index?12:0 ) - (item)
                }
                tempRef = createNotes;
            }
            
            if(Array.isArray(acc))
                acc.push(tempRef);
            else
                acc = [tempRef];
            
            return acc;        
        })]

        scaleModesSet(modes);
        selectedModeSet(0);
        if(notePick.length > 0){
            let newItem = [];
            for(let i in modes[0]){
                newItem[newItem.length] = (modes[0][i]+notePick[0])%12;
            }
            notePickSet(newItem);
        }else{
            notePickSet( modes[0].map(item=>(item+3)%12) );
        }
    }
    const modeChange = ({target})=>{
        selectedModeSet(target.value);
        if(notePick.length > 0){
            let newItem = [];
            for(let i in scaleModes[target.value]){
                newItem[newItem.length] = (scaleModes[target.value][i]+notePick[0])%12;
            }
            notePickSet(newItem);
        }else{
            notePickSet( scaleModes[target.value].map(item=>(item+3)%12) );
        }
    }
    
    // class Preset
    const inputCSS = 'rounded-sm focus:outline outline-2 outline-sky-500 bg-slate-600 tracking-tight font-light ';
    const inputLabelCSS = 'text-lg tracking-wide text-cyan-400 font-semibold;'
    const registerSelectCSS = 'w-7 h-7 rounded-full  flex justify-center items-center';


    return <>
    <main className="w-full min-h-screen px-5 text-slate-200 bg-gray-950">
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
                <select className={`${inputCSS} p-1`} value={scale} onChange={scaleChange}>
                    <option className="" value="major scale">Major scale</option>
                    <option className="" value="natural minor scale">Natural Minor scale</option>
                    <option className="" value="minor pentatonic">Minor pentatonic scale</option>
                    <option className="" value="major pentatonic">Major pentatonic scale</option>
                </select>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Mode: </label>
                <select className={`${inputCSS} p-1 px-2 font-semibold`} value={selectedMode} onChange={modeChange}>
                    {scaleModes.map((item, key)=>
                        <option key={key} className="" value={key} >{key+1}</option>
                    )}
                </select>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Pattern: </label>
                <input className={`${inputCSS} p-1 px-2`} type="text" value={intervalPattern} disabled/>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Notes: </label>
                <input className={`${inputCSS} p-1 px-2`} type="text" value={notePattern} onInput={({target})=>notePatternSet(target.value)} onBlur={notePatternRevised}/>
            </div>
            <div className="flex flex-row items-center gap-x-2">
                <label className={`${inputLabelCSS}`}>Register:</label>
                <div className={`h-7 rounded-xl flex justify-center px-2 items-center bg-red-500`}>
                    <span>Root</span>
                </div>
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
                <div className={`${registerSelectCSS} bg-pink-700`}>
                    <span>6</span>
                </div>
            </div>
            <div>
                <label className={`${inputLabelCSS}`}>Interval Flow: </label>
                <select className={`${inputCSS} p-1 px-2 font-semibold`} value={noteFlow} onChange={noteSequenceChange}>
                    <option className="" value={'Ascending'}>Ascending</option>
                    <option className="" value={'Descending'}>Descending</option>
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
                            <input type="number" min="-24" max="24" className={`2xl:w-14 w-10 ${inputCSS} 2xl:p-1 p-0 xl:text-base text-sm`} value={tune[key]} onInput={({target})=>changeTune(key, target)}/>
                        </div>
                    )}
                </section>
                <section className="flex-1 w-full">
                    <Gbl_noteFlow.Provider value={{noteFlow, noteFlowSet}}>
                    <Gbl_notePick.Provider value={{notePick, notePickSet}}>
                    <Gbl_noteSequence.Provider value={{noteSequence, noteSequenceSet}}>
                    <Gbl_stringTune.Provider value={{tune, tuneSet}}>
                        <Frettboard />
                    </Gbl_stringTune.Provider>
                    </Gbl_noteSequence.Provider>
                    </Gbl_notePick.Provider>
                    </Gbl_noteFlow.Provider>
                    
                    
                </section>
            </div>

        </section>

    </main> 
    </>
}