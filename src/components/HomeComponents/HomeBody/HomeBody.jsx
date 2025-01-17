import landscapePic from "../../../assets/landscape.jpg";
import ConsumerCulture from "../../../assets/ConsumerCulture.jpg";
import minimalism from "../../../assets/minimalism.jpg";
import sustainable from "../../../assets/sustainable.jpg";

import styles from "./HomeBody.module.css";
const HomeBody = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.bannerImage}
        src={landscapePic}
        alt="landscape pic"
      />
      <div className={styles.aboutSection}>
        <div className={styles.picAndText}>
          <div className={`${styles.text} ${styles.textOdd}`}>
            <p className={styles.headline}>Consumer Culture Perfected</p>
            <p className={styles.description}>
              Buy happiness in three easy clicks.
            </p>
          </div>
          <img
            className={styles.consumerImage}
            src={ConsumerCulture}
            alt="consumers image"
          />
        </div>
        <div className={styles.picAndText}>
          <img
            className={styles.minimalismImage}
            src={minimalism}
            alt="minimalist image"
          />
          <div className={`${styles.text} ${styles.textEven}`}>
            <p className={styles.headline}>Minimalism at Maximum Prices</p>
            <p className={styles.description}>
              Aesthetic living starts with overspending.
            </p>
          </div>
        </div>
        <div className={styles.picAndText}>
          <div className={`${styles.text} ${styles.textOdd}`}>
            <p className={styles.headline}>Sustainably Unsustainable</p>
            <p className={styles.description}>
              We care about the planet almost as much as profit
            </p>
          </div>
          <img
            className={styles.sustainableImage}
            src={sustainable}
            alt="sustainability image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
