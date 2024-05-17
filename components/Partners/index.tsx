import Image from 'next/image';
const Partners = () => {
    return (
        <section className="h-fit flex flex-col mb-10 mt-10 mx-2 lg:mx-16">
            <div className="flex w-full flex-row mb-5">
                <p className="w-[10%]">Our Partners</p>
                <hr className="h-[1px] w-[90%] bg-black mt-3"/>
            </div>
            <div className="grid grid-cols-4 gap-5 ">
                <div>
                    <Image src="/images/polygon.svg" alt="Offer 1" className="mb-5" width={150} height={150} />
                </div>
                <div>
                    <Image src="/images/chainlink.svg" alt="Offer 2" className="mb-5" width={150} height={150} />
                </div>
                <div>
                    <Image src="/images/microsoft.svg" alt="Offer 3" className="mb-5" width={150} height={150} />
                </div>
                <div>
                    <Image src="/images/filecoin.svg" alt="Offer 3" className="mb-5" width={150} height={150} />
                </div>
            </div>
        </section>
    )
}

export default Partners;