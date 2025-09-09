// components/NavBar.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function NavBar() {
  const navRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const nav = navRef.current!;
    gsap.set(nav, { y: 0, opacity: 1 });

    let visible = true;
    const show = () => {
      if (visible) return;
      visible = true;
      gsap.to(nav, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", overwrite: "auto" });
    };
    const hide = () => {
      if (!visible) return;
      visible = false;
      gsap.to(nav, { y: -200, opacity: 0, duration: 0.6, ease: "power2.in", overwrite: "auto" });
    };

    ScrollTrigger.create({
      start: 0,
      end: 999999, // run forever
      onUpdate: (self) => {
        const sc = self.scroll();
        // always show near the very top
        if (sc < window.innerHeight/100 *30) return show();

        // direction: 1 = scrolling down, -1 = scrolling up
        if (self.direction === 1) hide();
        else show();
      },
    });

    // optional: refresh on resize to keep things tidy
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      ref={navRef}
      className="text-white glass-card flex justify-between w-[90%] fixed top-[2vw] z-[55] py-5 px-10 left-1/2 -translate-x-1/2"
    >
      <Link href="#">Logo</Link>
      <button>Fuck</button>
    </nav>
  );
}
