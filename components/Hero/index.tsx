const Hero = () => {
    return (
        <section className="h-screen bg-[url('/images/hero.png')] bg-cover bg-center">
            <div className=' bg-black/70 h-screen px-[20%] flex flex-col items-center justify-center'>
                <h1 className="text-6xl text-white">Changing the world one emission at a time.</h1>
                <p className="text-2xl text-[#FFFED4]">Calculate Emissions</p>
            </div>
        </section>
    )
}

export default Hero;