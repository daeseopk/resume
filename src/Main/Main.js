import { React, useState, useRef, useEffect } from "react";
import styles from "../Main/Main.module.css";
import Home from "../Home/Home";
import Navibar from "../Navibar/Navibar";
import BackgroundImg from "./BackgroundImg";
import Body from "../Body/Body";

export default function Main() {
   const [page, setPage] = useState(1);

   useEffect(() => {
      if (page === 1) {
         HomeRef.current.style = "z-index:99; opacity:1;";
         BodyRef.current.style = "z-index:-1; opacity:0;";
      } else if (page === 2 || page === 3 || page === 4 || page === 5) {
         HomeRef.current.style = "z-index:-1; opacity:0;";
         BodyRef.current.style = "z-index:99; opacity:1;";
      }
   }, [page]);
   const HomeRef = useRef();
   const BodyRef = useRef();

   return (
      <div className={styles.Container}>
         <BackgroundImg />
         <Home HomeRef={HomeRef} page={page} setPage={setPage} />
         <Body BodyRef={BodyRef} page={page} setPage={setPage} />
         <Navibar page={page} setPage={setPage} />
      </div>
   );
}
