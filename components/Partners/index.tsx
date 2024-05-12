import Image from 'next/image';
const Partners = () => {
    return (
        <section className="h-screen flex flex-col mt-10 mx-16">
            <div className="flex w-full flex-row mb-5">
                <p className="w-[10%]">Our Partners</p>
                <hr className="h-[1px] w-[90%] bg-black mt-3"/>
            </div>
            <div className="grid grid-cols-3 gap-16">
                <div>
                    <Image src="/images/offer1.png" alt="Offer 1" className="mb-5" width={300} height={300} />
                </div>
                <div>
                    <Image src="/images/offer2.png" alt="Offer 2" className="mb-5" width={300} height={300} />
                </div>
                <div>
                    <Image src="/images/offer3.png" alt="Offer 3" className="mb-5" width={300} height={300} />
                </div>
            </div>
        </section>
    )
}

export default Partners;