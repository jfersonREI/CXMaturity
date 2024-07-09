import React from "react";
import styles from "./LandingDetails.module.scss";

const LandingDetails = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles.details__header}>
        <img
          src={props.logo}
          className={styles.details__logo}
          alt={props.logoAlt}
        />
      </div>
      <div className={styles.details__body}>
        <div className={styles.details__bodyHeader}>
          <p className={styles.details__subtitle}>{props.subtitle}</p>
          <p className={styles.details__title}>{props.title}</p>
        </div>
        <div className={styles.details__copy}>{props.copy}</div>
        <div className={styles.details__buttons}>
          <button>Take the CX maturity assessment</button>
        </div>
      </div>
      <div className={styles.details__footer}>
        <div className={styles.details__footerItem}>
          <span className={styles.details__footerItemHeader}>
            Time to complete
          </span>
          <span>{props.timeComplete}</span>
        </div>
        <div className={styles.details__footerItem}>
          <span className={styles.details__footerItemHeader}>Due date:</span>
          <span>{props.dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default LandingDetails;
