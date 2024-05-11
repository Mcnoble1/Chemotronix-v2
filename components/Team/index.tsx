const Team = () => {
    return (
        <section className="team-area ptb-100">
        <div className="container">
            <div className="section-title">
            <h2>Our Team</h2>
            <div className="bar"></div>
            <p>Meet the people who make awesome stuffs</p>
            </div>
    
            <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="single-team">
                <div className="team-image">
                    <img src="/images/team-image/1.jpg" alt="image" />
    
                    <div className="social">
                    <ul>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
    
                <div className="team-content">
                    <h3>John Smith</h3>
                    <span>CEO & Founder</span>
                </div>
                </div>
            </div>
    
            <div className="col-lg-3 col-md-6">
                <div className="single-team">
                <div className="team-image">
                    <img src="/images/team-image/2.jpg" alt="image" />
    
                    <div className="social">
                    <ul>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="team-content">
                    <h3>David Warner</h3>
                    <span>Web Developer</span>
                </div>
                </div>
            </div>

                <div className="single-team">
                <div className="team-image">
                    <img src="/images/team-image/3.jpg" alt="image" />
    
                    <div className="social">
                    <ul>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
    
                <div className="team-content">
                    <h3>Steven Smith</h3>
                    <span>Web Designer</span>
                </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Team;