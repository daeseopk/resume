import { React, useRef } from "react";
import styles from "../Home/Home.module.css";

export default function Home({ HomeRef, page, setPage }) {
   const button = useRef();

   const onMouseDown = () => {
      button.current.style = "background-color:rgb(194, 137, 33);";
   };
   const onMouseUp = () => {
      button.current.style = "background-color:orange;";
   };
   const onClick = () => {
      setPage(2);
   };
   return (
      <div ref={HomeRef} className={styles.HomeContainer}>
         <div className={styles.Home_bodycontainer}>
            <div className={styles.Home_bodywrapper}>
               <div className={styles.Home_titleWrapper}>
                  <p className={styles.Home_title_hi}>HI THERE!</p>
                  <div className={styles.Home_title_namewrapper}>
                     <p className={styles.Home_title_im}>I'M</p>
                     <p className={styles.Home_title_daeseop}>DAESEOP KIM</p>
                  </div>
                  <div className={styles.Home_title_fedev}>
                     <p>WEB FRONT-END DEVELOPER </p>
                  </div>
                  <div className={styles.Home_title_summary}>
                     <p>
                        안녕하세요! 저의 이력서에 방문해 주셔서 감사합니다!
                        <br />
                        저는 웹, 웹앱 프론트엔드 개발과 여러 기술들에 관심이
                        많은 <br /> 김대섭이라고 합니다.{" "}
                     </p>
                  </div>
                  <div
                     onClick={onClick}
                     ref={button}
                     onMouseDown={onMouseDown}
                     onMouseUp={onMouseUp}
                     className={styles.Home_title_button}>
                     MORE ABOUT ME
                  </div>
               </div>
            </div>
            <div className={styles.Home_photowrapper}></div>
         </div>
      </div>
   );
}
