// 'use client'

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
// import { useGSAP } from '@gsap/react';
// import gsap from "gsap";

// const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/#", label: "Ask AI" },
//     // { href: "/#", label: "Contact" },
// ];  

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useGSAP(() => {
//         gsap.from("#navlist", {
//             duration: 5,
//             delay: 1,
//             x: -400,
//             opacity: 1,
//             ease: "elastic",
//             stagger: 0.5
//         })
//         gsap.from("#calc-btn", {
//             duration: 5,
//             delay: 1,
//             x: 400,
//             opacity: 1,
//             ease: "elastic"
//         })
//     }, []);

//     return (
//         <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
//             <div className="flex flex-row justify-between">
//                 <div className="flex items-center">
//                     <div id="navlist" className="flex items-center rounded-full p-2 bg-[#01431D] border-8 border-green-900">
//                         <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                    
//                     <div className="hidden md:block ml-5">
//                         <ul className="flex flex-row items-center">
//                             {links.map(({ href, label }) => (
//                                 <li key={href} className="mr-6 text-xs uppercase">
//                                     <Link href={href}>
//                                         {label}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                  </div>
//                 </div>
                
//                 <div className="flex items-center">
//                     <button id="calc-btn" className="uppercase text-xs rounded-full p-4 bg-[#01431D] border-8 border-green-900 mr-4">
//                         <Link href="/calculator">
//                             Carbon Calculator
//                         </Link>
//                     </button>
//                     <button 
//                         className="md:hidden p-2" 
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                     >
//                         {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="h-6 w-6"/> : <FontAwesomeIcon icon={faBars} className="h-6 w-6"/>}
//                     </button>
//                 </div>
//             </div>
//             {isMenuOpen && (
//                 <div className="md:hidden mt-5">
//                     <ul className="flex flex-col items-center bg-[#01431D] rounded-lg p-5 border-8 border-green-900">
//                         {links.map(({ href, label }) => (
//                             <li key={href} className="mb-4 text-xs uppercase">
//                                 <Link href={href}>
//                                     {label}
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default Navbar;


'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#", label: "Ask AI" },
    // { href: "/#", label: "Contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useGSAP(() => {
        gsap.from("#navlist", {
            duration: 5,
            delay: 1,
            x: -400,
            opacity: 1,
            ease: "elastic",
            stagger: 0.5
        })
        gsap.from("#calc-btn", {
            duration: 5,
            delay: 1,
            x: 400,
            opacity: 1,
            ease: "elastic"
        })
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <section>
             <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
            <div className="flex flex-row justify-between">
                <div className="flex items-center">
                    <div id="navlist" className="flex items-center rounded-full p-2 bg-[#01431D] border-8 border-green-900">
                        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                    
                    <div className="hidden md:block ml-5">
                        <ul className="flex flex-row items-center">
                            {links.map(({ href, label }) => (
                                <li key={href} className="mr-6 text-xs uppercase">
                                    <Link href={href} onClick={label === "Ask AI" ? (e) => { e.preventDefault(); toggleSidebar(); } : null}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>
                </div>
                
                <div className="flex items-center">
                    <button id="calc-btn" className="uppercase text-xs rounded-full p-4 bg-[#01431D] border-8 border-green-900 mr-4">
                        <Link href="/calculator">
                            Carbon Calculator
                        </Link>
                    </button>
                    <button 
                        className="md:hidden p-2" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="h-6 w-6"/> : <FontAwesomeIcon icon={faBars} className="h-6 w-6"/>}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden mt-5">
                    <ul className="flex flex-col items-center bg-[#01431D] rounded-lg p-5 border-8 border-green-900">
                        {links.map(({ href, label }) => (
                            <li key={href} className="mb-4 text-xs uppercase">
                                <Link href={href} onClick={label === "Ask AI" ? (e) => { e.preventDefault(); toggleSidebar(); } : null}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
        {isSidebarOpen && (
                <div className="fixed right-0 h-screen border-l border-lime-800 w-full lg:w-[33%] text-white z-50 bg-opacity-50">
                    <div className="bg-[#01431D] h-screen p-5 flex flex-col">
                        <div className="flex justify-end">
                            <button     
                                className="border-2 border-white mb-5 rounded-lg p-3 w-20 hover:bg-white hover:text-[#01431D] transition duration-300 ease-in-out"
                                onClick={toggleSidebar}
                            >
                                {/* <FontAwesomeIcon icon={faXmark} className="h-6 w-6" /> */}Close
                            </button>
                        </div>
                        <div>
                            <p className="text-2xl mb-4">Ask me anything about Climate Change, Clean Energy and Sustainability</p>
                        </div>

                        <div className="mt-4">
                            <textarea  
                                placeholder="What is climate change?" 
                                className="w-full p-2 border rounded text-black outline-none"
                            />
                        </div>
                        {/* Chat interface goes here */}
                        <div className="flex flex-col h-full">
                            <div className="flex-grow overflow-y-auto">
                                {/* Chat messages will be displayed here */}
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </section>
       
    );
}

export default Navbar;

