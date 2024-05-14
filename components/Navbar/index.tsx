import Link from "next/link";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/calculator", label: "Calculator" },
  ];  

const Navbar = () => {

    return (
        <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
            <div className="flex flex-row justify-between">
                <div className="rounded-full p-3 bg-[#01431D] border-8 border-green-900">
                    <ul className="flex items-center">
                    {links.map(({ href, label }) => (
                        <li key={href} className="mr-6 text-xs uppercase">
                        <Link href={href}>
                            {label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <button className="uppercase text-xs rounded-full p-3 bg-[#01431D] border-8 border-green-900">
                    Carbon Calculator
                </button>
            </div>
            
          </nav>
    );
}

export default Navbar;