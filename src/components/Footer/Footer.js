import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <div className="main-footer">
                <div className="footer-top-bar">
                    <div className="footer-logo">
                        <h1>UpFlux</h1>
                    </div>
                    <div className="social-links">
                        <div className="social">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="social">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </div>
                        <div className="social">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </div>
                        <div className="social">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="first-set">
                        <a href="/">Become a mentor</a>
                        <a href="/">Find mentors</a>
                        <a href="/">Blog</a>
                        <a href="/">Community on Whatsapp</a>
                    </div>
                    <div className="second-set">
                        <a href="/">About & Contact</a>
                        <a href="/">Refer Friends</a>
                        <a href="/">FAQs</a>
                        <a href="/">Community on Telegram</a>
                    </div>
                    <div className="last-set">
                        <a href="/">About & Contact</a>
                        <a href="/">Refer Friends</a>
                        <a href="/">FAQs</a>
                        <a href="/">Community on Telegram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;