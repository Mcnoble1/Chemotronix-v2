'use client'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";

const Whitepaper = () => {

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
    
        gsap.fromTo(".para", {
          opacity: 0,
          y: 20,
        }, {
            scrollTrigger: {
                trigger: "#contain",
                start: "top center",
                toggleActions: "restart pause reverse pause"
                },
          duration: 2,
          opacity: 1,
          delay: 1,
          y: 0,
          ease: "power4.out",
          stagger: 1.0,
        });
    }, [])

    return (
        <section className="h-screen bg-[#FFFED4] px-[20%] flex flex-col items-center justify-center" id="contain">
            <p className="para text-6xl text-center">By <span className="text-[#008036]">2025</span>, we plan to have </p>
            <p className="para text-6xl text-center">neutralized over <span className="text-[#008036]">0.5 million </span></p>
            <p className="para text-6xl text-center mb-5"><span className="text-[#008036]">tonnes</span> of CO2</p>
            <p className="para text-xl text-center">Join us, <u><a href="#">download our whitepaper</a></u></p>
        </section>
    )
}

export default Whitepaper;