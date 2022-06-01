import React from "react";
import styles from "../Navibar/Navibar.module.css";
import { ReactComponent as Icon_dots } from "../Images/Dots.svg";
import { ReactComponent as Icon_home } from "../Images/Home.svg";
import { ReactComponent as Icon_profile } from "../Images/Profile.svg";
import { ReactComponent as Icon_resume } from "../Images/Resume.svg";
import { ReactComponent as Icon_portfolio } from "../Images/Portfolio.svg";
import { ReactComponent as Icon_contact } from "../Images/Contact.svg";

export default function Navibar({ page, setPage }) {
   const ICON_WIDTH = 25;
   const ICON_HEIGHT = 25;

   const onClick = (e) => {
      if (e.target.id) {
         setPage(parseInt(e.target.id));
         if (e.target.id === "1") window.scrollTo(0, 50);
         else if (e.target.id === "2") window.scrollTo(0, 350);
         else if (e.target.id === "3") window.scrollTo(0, 1050);
         else if (e.target.id === "4") window.scrollTo(0, 1750);
         else if (e.target.id === "5") window.scrollTo(0, 2450);
      }
   };
   return (
      <div className={styles.NavibarContainer}>
         <div className={styles.IconContainer}>
            <div onClick={onClick} className={styles.IconWrapper}>
               <Icon_home
                  className={styles.icon}
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  fill={page === 1 ? "white" : "black"}
               />
            </div>
            <Icon_dots width="20" height="25" fill="black" />
            <div onClick={onClick} className={styles.IconWrapper}>
               <Icon_profile
                  className={styles.icon}
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  fill={page === 2 ? "white" : "black"}
               />
            </div>
            <Icon_dots width="20" height="25" fill="black" />
            <div onClick={onClick} className={styles.IconWrapper}>
               <Icon_resume
                  className={styles.icon}
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  fill={page === 3 ? "white" : "black"}
               />
            </div>
            <Icon_dots width="20" height="25" fill="black" />
            <div onClick={onClick} className={styles.IconWrapper}>
               <Icon_portfolio
                  className={styles.icon}
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  fill={page === 4 ? "white" : "black"}
               />
            </div>
            <Icon_dots width="20" height="25" fill="black" />
            <div onClick={onClick} className={styles.IconWrapper}>
               <Icon_contact
                  className={styles.icon}
                  width={ICON_WIDTH}
                  height={ICON_HEIGHT}
                  fill={page === 5 ? "white" : "black"}
               />
            </div>
         </div>
      </div>
   );
}
