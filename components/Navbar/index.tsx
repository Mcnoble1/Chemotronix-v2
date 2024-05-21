'use client'

// import Link from "next/link";
// import Image from "next/image";

// const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/#", label: "Projects" },
//     { href: "/#", label: "Contact" },
//   ];  

// const Navbar = () => {

//     return (
//         <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
//             <div className="flex flex-row justify-between">
//                 <div className="flex rounded-full p-2 bg-[#01431D] border-8 border-green-900">
//                     <Image src="/images/logo.png" alt="logo"  width={50} height={50} />
//                     <ul className="flex items-center ml-5">
//                     {links.map(({ href, label }) => (
//                         <li key={href} className="mr-6 text-xs uppercase">
//                         <Link href={href}>
//                             {label}
//                         </Link>
//                         </li>
//                     ))}
//                     </ul>
//                 </div>
                
//                 <button className="uppercase text-xs rounded-full p-2 bg-[#01431D] border-8 border-green-900">
//                     <a href="/calculator">Carbon Calculator</a>
//                 </button>
//             </div>
            
//           </nav>
//     );
// }

// export default Navbar;

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
    { href: "/#", label: "Projects" },
    { href: "/#", label: "Contact" },
];  

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            x: 200,
            opacity: 1,
            ease: "power4.out"
        })
    }, []);

    return (
        <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
            <div className="flex flex-row justify-between">
                <div className="flex items-center">
                    <div id="navlist" className="flex items-center rounded-full p-2 bg-[#01431D] border-8 border-green-900">
                        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
                    
                    <div className="hidden md:block ml-5">
                        <ul className="flex flex-row items-center">
                            {links.map(({ href, label }) => (
                                <li key={href} className="mr-6 text-xs uppercase">
                                    <Link href={href}>
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
                                <Link href={href}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
