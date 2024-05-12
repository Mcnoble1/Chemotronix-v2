import Image from "next/image";
const Offer = () => {
    return (
        <section className="h-screen flex flex-col mx-16">
            <div className="flex w-full flex-row mb-5">
                <p className="w-[10%]">What we offer</p>
                <hr className="h-[1px] w-[90%] bg-black mt-3"/>
            </div>
            <div className="grid grid-cols-3 gap-16">
                <div>
                    <Image src="/images/offer1.png" alt="Offer 1" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Carbon Credit Platform</h1>
                    <p className="text-sm">We are building a carbon credit purchase and sale platform to offset carbon.</p>
                </div>
                <div>
                    <Image src="/images/offer2.png" alt="Offer 2" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg">MRV Platform</h1>
                    <p className="text-sm">Decentralized platform for measuring, reporting and verifying emissions via AI, IoT and Blockchain.</p>
                </div>
                <div>
                    <Image src="/images/offer3.png" alt="Offer 3" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Clean Energy Technologies</h1>
                    <p className="text-sm">Developing Biogas, Hydrogen, and Solar technologies for the African Populace.</p>
                </div>
            </div>
        </section>
    )
}

export default Offer;