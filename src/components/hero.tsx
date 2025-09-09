'use client'

import useLenisScroll from "@/hooks/useLenisScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP)
const Hero = () => {
    useLenisScroll()
    const scope = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        gsap.to('.chutya', {
            yPercent: -60,
            ease: "none",
            scrollTrigger: {
                trigger: '.myContainer',
                scrub: 1.5,
                start: "top top",
                end: "center 70%"
            }
        })
    }, { scope })
    return (
        <div ref={scope} className="w-full h-screen relative myContainer overflow-hidden">
            <div className="absolute   top-0 h-screen w-screen bg-neutral-950">
                <div className="absolute chutya h-screen w-screen  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
        </div>
    )
}

export default Hero