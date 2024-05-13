import Image from 'next/image';
const About = () => {
    return (
        <div>
            <section className="h-screen text-center flex flex-col items-center justify-center bg-[#FFFED4]">
            <div className='px-[20%]'>
                <h1 className="text-6xl mb-10 text-black">Embracing Change is what we do at <span className='text-[#01431D]'>Chemotronix</span></h1>
                <Image src="/images/offer1.png" alt="Offer 1" className="mb-5 align-center" width={300} height={300}/>
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