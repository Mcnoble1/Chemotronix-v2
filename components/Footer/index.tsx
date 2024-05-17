import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="absolute h-screen w-full pt-10 px-10 gap-[10%] bg-[#01431D] flex flex-col lg:flex-row flex-wrap ">
            <div className="lg:w-2/5">
                <h1 className="text-[#FFFED4] mb-5 text-3xl">Stay in the loop with the cool things we are doing.</h1>
                <p className="text-white">Subscribe to our newsletter</p>
                <div className="relative">
                    <input type="text" placeholder="johndoe@gmail.com" className="mt-5 w-full text-white bg-transparent p-3 pr-12 rounded-full border border-[#FFFED4] outline-none" />
                    <FontAwesomeIcon icon={faArrowRight} className="text-[#FFFED4] text-2xl absolute top-5 right-5 bottom-0  m-auto mr-3" />
                </div>
            </div>
            <div className="lg:w-2/5">
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
            <div className='w-[70%]'>
                <Image src="/images/footer-logo.svg" alt="logo" className="" width={150} height={150} />
                <p className='text-white'>Copyright (c) 2021 | All rights reserved</p>
            </div>
            <div className='h-fit flex flex-row'>
                <Image src="/images/tree.svg" alt="logo" className="absolute right-2 lg:right:0 bottom-0" width={150} height={150} />
                <Image src="/images/tree.svg" alt="logo" className="absolute right-20 lg:right:50 bottom-0" width={150} height={150} />
                <Image src="/images/tree.svg" alt="logo" className="absolute right-32 lg:right:60 bottom-0" width={150} height={150} />
            </div>
        </footer>
    );
}

export default Footer;