//import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from '@/styles/Home.module.css'

/// Utilities 
import Icon from '@/utilities/Icon'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <>
    <main className='relative w-full text-slate-200'>
      {/*page 1*/}
      <main className='w-full sm:px-10 px-5 flex justify-center bg-blue-900 bg-blend-multiply bg-opacity-[0.9] bg-center bg-cover bg-local bg-[url("/homepage/instruments.jpg")]'>
        <main className='relative w-[70rem] pt-36 pb-36 min-h-screen'>
          {/*First Attachment*/}
          <section className='w-full'>
            <h6 className='tracking-wider text-semibold text-lg pb-5'><span className='text-slate-400'>WELCOME TO</span> <span className='text-sky-300'>MUSIFIER</span></h6>
            <h1 className={`text-7xl text-slate-200 font-bold pb-2 tracking-tight`}>Learn the Music</h1>
            <h1 className={`text-7xl text-slate-200 font-bold pb-2 tracking-tight`}>Apply the Theory</h1>
            <h1 className={`text-7xl text-slate-200 font-bold pb-2 tracking-tight`}>Make your Sound</h1>
          </section>
          {/*2nd Attachment*/}
          <section className='pt-20'>
            <p className='text-lg font-light text-slate-300 tracking-wide'>
              Eager to help you scale your skill to a greater level. A zealous to keep playing your instrument whenever you are. There is no best time to start your journey in music, so start today and experience the beat of life.
            </p>
          </section>
          {/*3rd Attachment*/}
          <section className='absolute bottom-32 w-full md:flex hidden justify-center'>
            <Icon name="natural_note" tailwindClass="fill-slate-300" className="w-20 animate-bounce"/>
          </section>

        </main>
      </main>
      {/*page 2*/}
      <main className='w-full sm:px-10 px-5 flex justify-center bg-gray-800'>
        <main className='w-[70rem] pt-32 pb-32 flex gap-x-10'>

          <section className='flex-0'>
            <div className="relative w-[15rem] aspect-square">
              <Image src="/logo/Musifier_Logo.svg" alt="Creator's Logo" priority fill className="w-full h-full object-contain object-center drop-shadow-lg"/>
            </div>
          </section>

          <section className='flex-1 w-full'>
            {/*First Attachment*/}
            <section className=''>
              <h1 className={`text-6xl text-slate-200 font-extralight pb-2 tracking-wide`}>WHAT IS MUSIFIER?</h1>
            </section>
            {/*2nd Attachment*/}
            <section className='pt-10'>
              <p className='text-lg font-light text-slate-300 tracking-wide text-justify'>
               Musifier is a web application that you can use to learn your favorite instruments. It also have the resource needed to learn music theory. One of its greatest feature is that you can learn and create musical scales that suits to your need. No need to be tech savvy, just use whatever suits you.
              </p>
            </section>
          </section>

        </main>
      </main>
      {/*page 3*/}
      <main className='w-full sm:px-10 px-5 flex justify-center bg-blue-900 bg-blend-multiply bg-opacity-[0.9] bg-center bg-cover bg-local bg-[url("/homepage/guitar.jpg")]'>
        <main className='w-[70rem] py-32'>
          {/*First Attachment*/}
          <section className='w-full'>
            <h1 className={`text-6xl text-slate-200 font-extralight pb-2 tracking-wide text-center`}>Guitar Fretboard</h1>
          </section>
          {/*2nd Attachment*/}
          <section className='pt-10'>
            <p className='text-lg font-light text-slate-300 tracking-wide text-justify'>
              Having a hard time being acquainted with your fretboard? With Musifier, it can help you to familiarize your fretboard. It has a virtual fretboard that contains all notes of a standard 24 fret electric guitar. You can use the scale pattern to show what strings you should pick. You can try the built-in artificial intelligence helper to guess what scale the song you are playing and roam around the fretboard to determine the best location to play the notes.
            </p>
          </section>
          {/*3rd Attachment*/}
          <section className='block mt-10 px-10'>
            <div className='w-full aspect-video'>
              <div className='w-full h-full bg-blue-800'>
                
              </div>
            </div>
          </section>
        </main>
      </main>
      {/*page 4*/}
      <main className='w-full sm:px-10 px-5 flex justify-center bg-blue-900 bg-blend-multiply bg-opacity-[0.9] bg-center bg-cover bg-local bg-[url("/homepage/headphone.jpg")]'>
        <main className='w-[70rem] py-48'>
          {/*First Attachment*/}
          <section className='w-full'>
            <h1 className={`text-4xl text-slate-200 font-bold pb-2 tracking-wide text-center`}>and many more...</h1>
          </section>
          {/*2nd Attachment*/}
          <section className='pt-10'>
            <p className='text-lg font-light text-slate-300 tracking-wide text-center'>
              The web application is still in BETA, so expect more to come.
            </p>
          </section>
        </main>
      </main>

    </main>
  </>
  
}
