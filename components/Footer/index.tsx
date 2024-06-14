'use client'
import { useState } from 'react';
import jsonp from 'jsonp';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
    
         if (name === 'FNAME' ) {
            const letterRegex = /^[A-Za-z\s]+$/;
            if (!value.match(letterRegex) && value !== '') {
              return;
            }
          }
    
          setName(value);
      };


      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const url = 'https://chemotronix.us21.list-manage.com/subscribe/post-json?u=82d230ec4c16d214f3f9d2d45&amp;id=d38ba1704e&amp;f_id=00b6f4e6f0';
        jsonp(`${url}&EMAIL=${email}&FNAME=${name}`, { param: 'c' }, (_, data) => {
            const { msg, result } = data
            // do something with response
            alert(msg);
        });
    
    
        // You can reset the email input field after submission
        setEmail('');
        setName('');
      };

    return (
        <footer className="absolute h-screen w-full pt-10 px-10 gap-[10%] bg-[#01431D] flex flex-col lg:flex-row flex-wrap ">
            <div className="lg:w-2/5">
                <h1 className="text-[#FFFED4] mb-5 text-3xl">Stay in the loop with the cool things we are doing.</h1>
                <p className="text-white">Subscribe to our newsletter</p>
                <div className="relative">
                    <input 
                        type="email"  
                        name="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id='mce-EMAIL'
                        placeholder="johndoe@gmail.com" 
                        className="mt-5 w-full text-white bg-transparent p-3 pr-12 rounded-full border border-[#FFFED4] outline-none" 
                    />
                    <FontAwesomeIcon 
                        icon={faArrowRight} 
                        onClick={handleSubmit}
                        className="text-black text-2xl hover:translate-x-1 absolute top-5 right-5 bottom-0  m-auto mr-3" 
                    />
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