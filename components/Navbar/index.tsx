import Link from "next/link";
import Image from "next/image";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/#", label: "Projects" },
    { href: "/#", label: "Contact" },
  ];  

const Navbar = () => {

    return (
        <nav className="absolute w-full bg-transparent top-5 p-5 text-white">
            <div className="flex flex-row justify-between">
                <div className="flex rounded-full p-2 bg-[#01431D] border-8 border-green-900">
                    <Image src="/images/logo.png" alt="logo"  width={50} height={50} />
                    <ul className="flex items-center ml-5">
                    {links.map(({ href, label }) => (
                        <li key={href} className="mr-6 text-xs uppercase">
                        <Link href={href}>
                            {label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                
                <button className="uppercase text-xs rounded-full p-2 bg-[#01431D] border-8 border-green-900">
                    <a href="/calculator">Carbon Calculator</a>
                </button>
            </div>
            
          </nav>
    );
}

export default Navbar;