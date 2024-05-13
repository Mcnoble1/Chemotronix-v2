const Footer = () => {
    return (
        <footer className="h-screen w-full mt-10 pt-10 px-5 gap-5 bg-[#01431D] flex flex-row flex-wrap ">
            <div className="w-2/5">
                <h1 className="text-[#FFFED4] text-3xl">Stay in the loop with the cool things we are doing.</h1>
                <p className="text-white">Subscribe to our newsletter</p>
                <input type="text" placeholder="johndoe@gmail.com" />
            </div>
            <div className="w-2/5">
                <div className="flex flex-row">
                    <div>
                        <h1 className="text-[#FFFED4]">About Us</h1>
                        <p className="text-[#FFFED4]">We are a company that is changing the world one emission at a time.</p>
                    </div>
                    <div>
                        <h1 className="text-[#FFFED4]">Contact Us</h1>
                        <p className="text-[#FFFED4]">
                            1234, Chemotronix Street, <br />
                            Chemotronix City, <br />
                            Chemotronix Country. <br />
                            +234 123 456 7890
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;