import React from "react";
import styles from "../LeftNavi/LeftNavi.module.css";
import { ReactComponent as Icon_dots } from "../Images/Dots.svg";

export default function LeftNavi({ page, setPage }) {
   const onClick = (e) => {
      setPage(parseInt(e.target.id));
   };
   const title = ["HOME", "PROFILE", "RESUME", "PORTFOLIO", "CONTACT"];
   return (
      <div className={styles.leftcontainer}>
         <div className={styles.left_photowrapper} />
         <div className={styles.left_navicontainer}>
            <div className={styles.left_naviwrapper}>
               {title.map((title, index) => {
                  if (index === 4)
                     return (
                        <p
                           onClick={onClick}
                           id={parseInt(index) + 1}
                           className={
                              page === parseInt(index) + 1
                                 ? styles.title_choose
                                 : styles.title
                           }>
                           {title}
                        </p>
                     );
                  return (
                     <>
                        <p
                           onClick={onClick}
                           id={parseInt(index) + 1}
                           className={
                              page === parseInt(index) + 1
                                 ? styles.title_choose
                                 : styles.title
                           }>
                           {title}
                        </p>
                        <Icon_dots width={25} height={35} />
                     </>
                  );
               })}
            </div>
         </div>
      </div>
   );
}
