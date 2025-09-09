'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef } from 'react'

const MockImage = () => {
    const scope = useRef<HTMLDivElement |null>(null)
    useGSAP(()=>{
        gsap.to('.imageContainer',{
            y:-50,
           scaleX:1,
            scrollTrigger:{
                trigger:".imageContainer",
                start:"-20% -20%",
                end:'top top',
                scrub:1.5, 
            }
        })
    },{scope})
  return (
    <div ref={scope} className='bg-neutral-950 z-[60] relative'>

    <div  className="w-full scale-x-[0.9] mx-auto relative imageContainer">
      <Image
        src="/mock.webp"
        alt="Mock Image"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
      />
    </div>
    </div>
  )
}

export default MockImage