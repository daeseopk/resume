import React from "react";
import styles from "../Body/Body.module.css";
import LeftNavi from "../LeftNavi/LeftNavi";
import MainTitle from "../MainTitle/MainTitle";

export default function Body({ BodyRef, page, setPage }) {
   return (
      <div ref={BodyRef} className={styles.BodyContainer}>
         <div className={styles.Body_bodycontainer}>
            <LeftNavi page={page} setPage={setPage} />
            <div className={styles.Body_bodywrapper}>
               <MainTitle page={page} />
            </div>
         </div>
      </div>
   );
}
