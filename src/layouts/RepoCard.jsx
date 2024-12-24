import { NavLink } from "react-router";
import styles from "./RepoCard.module.css"

/* eslint-disable react/prop-types */
export const RepoCard = ({ curr }) => {
  return (
    <NavLink className={styles['list-item']}>
      <div className={styles['top-content']}>
        <span className={styles.name}>{curr.name}</span>
        <span className={styles.visibility}>{curr.visibility}</span>
      </div>

      <div className={styles['bottom-content']}>
        <span className={styles.language}>
          {curr.language}
        </span>

        <span className={styles.size}>
          <i className="fa-solid fa-database"></i>
          {curr.size}
        </span>

        <span className={styles.updated}>
          Updated {curr.updated}
        </span>
      </div>
    </NavLink>
  );
};