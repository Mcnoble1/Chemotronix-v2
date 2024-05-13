const Calculator = () => {
    return (
        <section className="h-screen bg-[url('/images/calc.png')] bg-cover bg-center">
            <div className=' bg-black/70 h-screen px-[10%] gap-[30%] flex flex-row items-center justify-center'>
                <div>
                    <h1 className="text-6xl text-white mb-5">Carbon Footprint Calculator.</h1>
                    <button className="text-2xl rounded-2xl p-4 text-[#01431D]  bg-[#FFFED4]">Start Calculating</button>
                </div>
            
                <div className="rounded-lg bg-[#01431D]/60 h-fit p-10  text-white">
                    <p>This setting calculates the carbon footprint of an individual by evaluating their daily activities, transportation, energy usage, and consumption patterns allowing users to understand and manage environmental impacts on a personal level</p>
                </div>
            </div>
        </section>
    );
};

export default Calculator;