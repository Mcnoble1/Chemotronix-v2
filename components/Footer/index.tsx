import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="h-screen w-full mt-10 pt-10 px-10 gap-[10%] bg-[#01431D] flex flex-row flex-wrap ">
            <div className="w-2/5">
                <h1 className="text-[#FFFED4] text-3xl">Stay in the loop with the cool things we are doing.</h1>
                <p className="text-white">Subscribe to our newsletter</p>
                <input type="text" placeholder="johndoe@gmail.com" className="mt-5 bg-transparent p-3  rounded-full border border-[#FFFED4] outline-none" />
            </div>
            <div className="w-2/5">
                <div className="flex flex-row gap-[10%]">
                    <div>
                        <h1 className="text-[#FFFED4]">Company</h1>
                        <h1 className="text-white">About</h1>
                        <h1 className="text-white">Team</h1>
                        <h1 className="text-white">Careers</h1>

                    </div>
                    <div>
                        <h1 className="text-[#FFFED4]">Contact</h1>
                        <h1 className="text-white">support@chemotronix.org</h1>
                        <h1 className="text-white">+234 123 456 7890</h1>
                        <h1 className="text-white">Social</h1>
                    </div>
                </div>
            </div>
            <div>
                <Image src="/images/logo.png" alt="logo" className="" width={150} height={150} />
                <p className='text-white'>Copyright (c) 2021 | All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;