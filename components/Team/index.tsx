import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Team = () => {
    return (
        <section className="h-fit w-screen py-10 bg-[#FFFED4]">
            <h1 className='text-3xl text-center mb-10'>Amazing People of Chemotronix </h1>
            <div className="grid grid-cols-3 ml-[8%] w-[90%]">
                <div className="mb-10" >
                    <Image src="/images/offer1.png" alt="Offer 1" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Peace Bello</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">CEO</p>
                </div>        
                <div className="mb-10" >
                    <Image src="/images/offer2.png" alt="Offer 2" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg">John Doe</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">CTO</p>
                </div>
                <div className="mb-10" >
                    <Image src="/images/offer3.png" alt="Offer 3" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Jane Doe</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">COO</p>
                </div>
                <div className="mb-10" >
                    <Image src="/images/offer1.png" alt="Offer 1" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Peace Bello</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">CEO</p>
                </div>        
                <div className="mb-10" >
                    <Image src="/images/offer2.png" alt="Offer 2" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg">John Doe</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">CTO</p>
                </div>
                <div className="mb-10" >
                    <Image src="/images/offer3.png" alt="Offer 3" className="mb-5" width={300} height={300} />
                    <h1 className="mb-1 text-lg font-medium">Jane Doe</h1>
                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                    <p className="text-sm">COO</p>
                </div>                        
            </div>
        </section>
    );
}

export default Team;