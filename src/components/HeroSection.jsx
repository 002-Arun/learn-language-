import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (

    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <div className='p-4 relative z-10 w-full text-center'>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
        <h1 className="mt-30 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"> Master New Languages Today</h1>
        <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Welcome to our language learning platform, where you can master new languages today! Our interactive courses and expert guidance cater to beginners and advanced learners alike, helping you become a confident communicator in diverse cultures. Join us on this exciting journey and unlock a world of possibilities .
        </p>
        <div className='mt-6'>
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection