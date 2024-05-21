'use client'
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const Hero = () => {
    useGSAP(() => {
        gsap.from("#hero", {
            duration: 2,
            delay: 1,
            y: -300,
            opacity: 1,
            ease: "power4.out",
            stagger: 0.5
        })
        gsap.from("#calc", {
            duration: 2,
            delay: 1.5,
            y: 300,
            opacity: 1,
            ease: "power4.out"
        })
    }, []);
    return (
        <section className="h-screen bg-[url('/images/hero.png')] bg-cover bg-center">
            <div className=' bg-black/70 h-screen px-[20%] flex flex-col items-center justify-center'>
                <h1 id="hero" className="text-6xl text-white mb-10 text-center">Changing the world one emission at a time.</h1>
                <button className="text-2xl text-[#FFFED4]" id="calc">
                    <a href="/calculator">
                        Calculate Emissions 
                        <FontAwesomeIcon icon={faArrowRight} className="text-[#FFFED4] text-2xl ml-5" />
                    </a> 
                </button>
            </div>
            <FontAwesomeIcon icon={faAngleDown} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} className="text-white text-4xl absolute bottom-10 left-1/2 transform -translate-x-1/2" />
        </section>
    )
}

export default Hero;