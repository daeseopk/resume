import {React, useState} from 'react'
import styles from "../Main/Main.module.css";
import Home from "../Home/Home";
import Navibar from '../Navibar/Navibar';
import BackgroundImg from './BackgroundImg';

export default function Main() {
  const [page, setPage] = useState(1);
  return (
  <div className={styles.Container}>
    <BackgroundImg/> 
    <Home page={page} setPage={setPage}/>
    <Navibar page={page} setPage={setPage} />
 </div>
  )
}
