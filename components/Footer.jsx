import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import logo from '../public/moonyLogo.jpg'

export default function Footer() {
    
    return (
        <footer>
            <div className={styles.all}>
                {/*Mail de contacto y redes*/}
                <div className={styles.contactText}>
                    <div className={styles.mail}>
                        <div className={styles.mailIcon}>
                            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                        </div>
                        <div className={styles.mailText}>
                            <h4>team@moonyapp.site</h4>
                        </div>
                    </div>
                    <div className={styles.socialMediaIcons}>
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                        <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </div>
                </div>

                {/*Logo*/}
                <div className={styles.logo}>
                    <img src={logo} alt='logo' height={250} width={250}/>
                </div>

                {/*Rigth text*/}
                <div className={styles.rights}>
                    <p>©2021 Moony. All rights reserved</p>
                </div>

                {/*Widget Twitter*/}
                <div className={styles.twitterWidget}>
                    <a className="twitter-timeline" data-width="380" data-height="380" data-theme="ligth" href="https://twitter.com/themoonyapp?ref_src=twsrc%5Etfw">Tweets by themoonyapp</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
            </div>
        </footer>
    );
}