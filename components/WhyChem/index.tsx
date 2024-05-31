'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faSolarPanel, faBriefcase, faTractor } from '@fortawesome/free-solid-svg-icons'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/all";

const WhyChem = () => {

gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#container", {
      scrollTrigger: {
        trigger: "#container",
        // start: "top center",
        toggleActions: "restart none none none"
      },
      duration: 2,
      x: 600,
      ease: "power2.inOut"
    })
    }, []);

  return (
    <section className="h-fit mb-20" id='container'>
      <div className="mx-10 lg:mx-20 my-20 h-[70%] bg-[#01431D] rounded-3xl p-10" id='container'>
        <h1 className="text-[#FFFED4] text-2xl lg:text-4xl font-bold pb-10">Why Chemotronix?</h1>
        <div className="flex w-full flex-col md:flex-row lg:flex-row flex-wrap gap-10">
            <div className='lg:w-2/5'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faSolarPanel} /> Energy Investment
                </h1>
                <p className="text-white">Bridging energy accessibility gap in rural communities.</p>
            </div>
            <div className='lg:w-2/5'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faLeaf} className="mr-2" /> Climate and Social Impact
                </h1>
                <p className="text-white">Helping companies stay accountable.</p>
            </div>
            <div className='lg:w-2/5'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                <FontAwesomeIcon icon={faTractor} />Agriculture Yields
                </h1>
                <p className="text-white">Clean farming + more profit for local farmers = more food.</p>
            </div>
            <div className='lg:w-2/5'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faBriefcase} /> Green Jobs
                </h1>
                <p className="text-white">Increase green job opportunities globally.</p>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default WhyChem;