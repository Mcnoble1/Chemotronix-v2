import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faSolarPanel, faBriefcase, faTractor } from '@fortawesome/free-solid-svg-icons'

const WhyChem = () => {
  return (
    <section className="h-fit mb-20">
      <div className="mx-20 my-20 h-[70%] bg-[#01431D] rounded-3xl p-10">
        <h1 className="text-[#FFFED4] text-4xl font-bold pb-10">Why Chemotronix?</h1>
        <div className="flex flex-row flex-wrap gap-5">
            <div className='w-1/2'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faLeaf} className="mr-2" /> Climate and Social Impact
                </h1>
                <p className="text-white">Helping companies stay accountable.</p>
            </div>
            <div>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faSolarPanel} /> Energy Investment
                </h1>
                <p className="text-white">Bridging energy accessibility gap in rural communities.</p>
            </div>
            <div className='w-1/2'>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                  <FontAwesomeIcon icon={faBriefcase} /> Green Jobs
                </h1>
                <p className="text-white">Increase green job opportunities globally.</p>
            </div>
            <div>
                <h1 className="text-[#FFFED4] text-xl font-bold">
                <FontAwesomeIcon icon={faTractor} />Agriculture Yields
                </h1>
                <p className="text-white">Clean farming + more profit for local farmers = more food.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChem;