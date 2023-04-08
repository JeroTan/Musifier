import { useContext, useState, useRef } from "react"

//// Components
import NoteLabel from "./NoteLabel";
import NoteButton from "./NoteButton";

/// GBL
import { Gbl_stringTune, Gbl_noteSequence, Gbl_notePick, Gbl_noteFlow, noteRearrange } from "@/pages/electric_guitar";
import { isArray } from "tls";

export default ()=>{
    // useState
    //** example [0//string, 2//fret, typeofCircle] */

    // useContext
    const { tune, tuneSet } = useContext(Gbl_stringTune);
    const { noteSequence, noteSequenceSet } = useContext(Gbl_noteSequence);
    const { notePick, notePickSet } = useContext( Gbl_notePick );
    const { noteFlow, noteFlowSet } = useContext(Gbl_noteFlow);

    // handler
    const noteClick = (currTone)=>{
        let tempNotePick = [...notePick];
        let tonePickLoc =  tempNotePick.indexOf(currTone);
        
        if(tonePickLoc > -1){
            tempNotePick.splice(tonePickLoc, 1);
            notePickSet( noteRearrange([...tempNotePick], noteFlow) );
            
        }else{
            notePickSet( prev=>noteRearrange([...prev, currTone], noteFlow) )
        }
        
    }
    const noteVisualSelect = (register, currTone)=>{
        let notePickLoc = notePick.indexOf(currTone);
        if(notePickLoc==0)  
            return 'root';
        else if(notePickLoc >-1)
            return `r${register}`;
        else
            return 'trans';
    }

    // sets
    let toneMap = [];
    let toneStateMap = [];
    let standardTune = [7, 2, 10, 5, 0, 7];
    let standardRegister = [55, 50, 46, 41, 36, 29];  

    for(let i = 0; i < 25; i++){
        for(let j = 0; j < 6; j++){
            let CX = 49*i;
            let CY = 32*j+35;
            if(i > 0)
                CX+=15;
            else
                CX+=11;
            
            let tempCurrTone = Math.abs((standardTune[j]+tune[j]+i)%12);
            let tempCurrRegister = Number((Math.floor((tune[j]+standardRegister[j]+i-3)/12)).toFixed(0));

            toneStateMap[toneStateMap.length] = <>
                <NoteButton name={ noteVisualSelect(tempCurrRegister, tempCurrTone) } theX={CX+14.5} theY={CY+14.5} color="" onClick={()=>{noteClick(tempCurrTone)}}/>
            </>

            toneMap[toneMap.length] = <>
                <NoteLabel name={ noteSequence[ tempCurrTone ] } theX={CX} theY={CY} color="" tailwindClass={`fill-slate-300 opacity-[0.9]`}/>
            </> 
        }
    }
    // FOr the note mapping we can use the 12 notes instead of frets and string like A = ["1_2", "4_4"]

    

    return <>
        { toneStateMap.map((item, key)=><g key={key}>{item}</g>) }
        { toneMap.map((item, key)=><g key={key}>{item}</g>) }
    </>
}