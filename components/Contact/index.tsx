const Contact = () => {
    return (
        <section className="h-screen">
        <div className="container">
            <div className="contact__content">
            <div className="contact__info">
                <h2 className="contact__title">Contact Us</h2>
                <p className="contact__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies, libero et mattis lacinia, nunc purus porta ex, ac consectetur sapien nunc quis odio.</p>
                <div className="contact__details">
                <div className="contact__detail">
                    <img src="/images/phone.svg" alt="Phone" />
                    <div>
                    <h3>Phone</h3>
                    <p>+1 234 567 890</p>
                    </div>
                </div>
                <div className="contact__detail">
                    <img src="/images/email.svg" alt="Email" />
                    <div>
                    <h3>Email</h3>
                    </div>
                </div>
                <div className="contact__detail">
                    <img src="/images/location.svg" alt="Location" />
                    <div>
                    <h3>Location</h3>
                    <p>123 Street, New York, USA</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="contact__form">
                <form>
                <div className="form__group">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
                </form>
            </div>
            </div>
            </div>
        </section>
    );
}
    