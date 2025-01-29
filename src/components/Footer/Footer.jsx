import styles from "./Footer.module.css";
import phoneImg from "../../assets/phone.svg";
import messageImg from "../../assets/message.svg";
import chatBubbleImg from "../../assets/chatBubble.svg";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksAndInfo}>
        <div className={styles.linkSection}>
          <div className={styles.linkColumn}>
            <p className={styles.header}>Company</p>
            <p>Our Story</p>
            <p>Virtual</p>
            <p>Eyecare</p>
            <p>Philanthropy</p>
          </div>
          <div className={styles.linkColumn}>
            <p className={styles.header}>Brand</p>
            <p>Style & fit</p>
            <p>Craftsmanship</p>
            <p>Reviews</p>
            <p>Blog</p>
          </div>
          <div className={styles.linkColumn}>
            <p className={styles.header}>Help</p>
            <p>Shipping & Returns</p>
            <p>Repairs</p>
            <p>Warranty</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.infoSection}>
          <div className={styles.infoHeader}>
            <p className={styles.title2}>ASK A CONSUMERIST SPECIALIST</p>
            <p className={styles.description}>
              This is a short sentence in relation to consumerism. We're here to
              assist!
            </p>
          </div>
          <div className={styles.iconSection}>
            <div className={styles.iconAndText}>
              <img src={phoneImg} alt="Telephone" />
              <p>(000)-CONSUME</p>
            </div>
            <div className={styles.iconAndText}>
              <img src={messageImg} alt="Email" />
              <p>support@consumerist.xyz</p>
            </div>
            <div className={styles.iconAndText}>
              <img src={chatBubbleImg} alt="Chat" />
              <p>Chat with us</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <a>© 2023 CONSUMERIST</a>
        <a>Privacy</a>
        <a>Accessibility</a>
        <a>Terms of Service</a>
        <a>Refund Policy</a>
      </div>
    </div>
  );
};

export default Footer;
