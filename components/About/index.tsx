import Image from 'next/image';
const About = () => {
    return (
        <div>
            <section className="h-screen text-center flex flex-col items-center justify-center pt-20 bg-[#FFFED4]">
            <div className=''>
                <h1 className="text-6xl mb-10 text-black">Embracing Change is what we do at <span className='text-[#01431D]'>Chemotronix</span></h1>
            </div>
            <div className="flex flex-row">
                <Image src="/images/about1.png" alt="About 1" className="mb-5" width={150} height={150}/>
                <Image src="/images/about2.png" alt="About 1" className="mb-5" width={150} height={150}/>
                <Image src="/images/about3.png" alt="About 1" className="mb-5" width={150} height={150}/>
            </div>
            </section>
            <section className="h-screen bg-[#01431D] text-center text-white flex flex-col items-center justify-center">
                <div className='w-[40%]'>
                <h1 className='mb-10 text-xl'>We are <span className='text-3xl text-[#FFFED4]'>Chemotronix</span></h1>
                <ul className='list-disc'>
                    <li className='mb-10 text-2xl'>Developing clean energy technologies and digital solutions to ensure net zero emissions (decarbonization).</li>
                    <li className='mb-10 text-2xl'>We look forward to collaborating with organizations to drive innovation towards ensuring a safer planet.</li>
                    <li className='mb-10 text-2xl'>Our solution is an intersection between IoT, AI, Blockchain and Clean energy through real time monitoring and visualizations.</li>
                </ul>
                </div>
            </section>
        </div>
    )
}

export default About;