import React from "react";
import styles from "../MainTitle/MainTitle.module.css";

export default function MainTitle({ page }) {
   return (
      <div className={styles.MainTitlecontainer}>
         <div className={styles.MainTitlewrapper}>
            <p className={styles.MainTitle}>
               {page === 2
                  ? "ABOUT ME"
                  : page === 3
                  ? "RESUME"
                  : page === 4
                  ? "PORTFOLIO"
                  : page === 5
                  ? "CONTACT"
                  : null}
            </p>
         </div>
      </div>
   );
}
