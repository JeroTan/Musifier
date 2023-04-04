import { useState } from "react"
import Image from "next/image"
import Icon from "@/utilities/Icon";

export default () => {
    const [ creatorLoadmore, creatorLoadmoreSet ] = useState(false);
    return <>
    <footer className="w-full flex justify-center px-2 pt-10 pb-8 bg-gray-900 text-slate-300">
        <main className="w-[100rem] flex flex-wrap gap-10">
            <section className="flex-1 flex gap-x-10">
                <div className="flex-0">
                    <div className="relative w-[10rem] aspect-square">
                        <Image src="/ONLYMECHANICS.svg" alt="Creator's Logo" priority fill className="w-full h-full object-contain object-center"/>
                    </div>
                </div>
                
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold tracking-tighter pb-5">Creator</h1>
                    <p className="text-justify font-light">Learning a new instrument is quite a long journey. When I was learning how to play a guitar, along the way I needed to study music theory too. At first it is kind of easy as there are only{creatorLoadmore ?<> notes, tones, pitches and other terminologies. However, time comes that music becomes literally a mathematics, that's metaphorical but I like to call it that way because of how everything is related and relative to numbers like the binary system of computers. Then it got me thinking to find an app to help me learn the scale and fretboard and it turns out that most app are non-existent or an app needs a premium purchased or there is too much information to start with. So I kinda like maybe I make a new one that suits to my needs. Afterward, I created a web-application, Musifier (YES! I refuse to just use paper and pencil in learning Music Theory). It is actually not a bad thing for me, because I was also able to learn Next.JS and Laravel. It is quite tedious but It is a three birds in one bullet. </>:<>... </>} <a href="#" className="underline underline-offset-2 font-normal" onClick={()=>{creatorLoadmoreSet(prev=>!prev)}}>Load {creatorLoadmore?'less':'more'}</a></p>
                </div>
            </section>
            <section className="flex-0 w-3/12">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold tracking-tighter pb-5">Socials</h1>
                    <div className="w-ful flex flex-wrap gap-5">
                        <div className="w-8 h-8 p-1 rounded-lg bg-slate-300 cursor-pointer" onClick={()=>{window.open('https://www.fb.com/mekaniRxON', '_blank');}}>
                            <Icon name="facebook" tailwindCalss="fill-gray-900" />
                        </div>
                        <div className="w-8 h-8 p-1 rounded-lg bg-slate-300 cursor-pointer" onClick={()=>{window.open('https://www.twitter.com/Mekani_Tekno', '_blank');}}>
                            <Icon name="twitter" tailwindCalss="fill-gray-900" />
                        </div>
                        <div className="w-8 h-8 p-1 rounded-lg bg-slate-300 cursor-pointer flex items-center" onClick={()=>{window.open('https://www.youtube.com/@mekani_tekno', '_blank');}}>
                            <Icon name="youtube" tailwindCalss="fill-gray-900" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <small className="block text-center text-xs text-slate-500">&#169;OnlyMeChanics 2023</small>
            </section>
        </main>
        
    </footer>
    </>
}