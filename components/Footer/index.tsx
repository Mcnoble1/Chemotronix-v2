const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer__content">
            <div className="footer__logo">
                <img src="/images/logo.svg" alt="Chemotronix" />
            </div>
            <div className="footer__links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>
            <div className="footer__social">
                <a href="#"><img src="/images/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="/images/twitter.svg" alt="Twitter" /></a>
                <a href="#"><img src="/images/instagram.svg" alt="Instagram" /></a>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;