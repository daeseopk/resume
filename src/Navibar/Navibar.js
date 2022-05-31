import React from 'react'
import styles from "../Navibar/Navibar.module.css";
import {ReactComponent as Icon_dots} from "../Images/Dots.svg";
import { ReactComponent as Icon_home } from "../Images/Home.svg";
import {ReactComponent as Icon_profile} from "../Images/Profile.svg";
import { ReactComponent as Icon_resume } from "../Images/Resume.svg";
import { ReactComponent as Icon_portfolio } from "../Images/Portfolio.svg";
import { ReactComponent as Icon_contact } from "../Images/Contact.svg";

export default function Navibar({page, setPage}) {
    const ICON_WIDTH = 25;
    const ICON_HEIGHT=25;

    const onClick=(e)=>{
      if(e.target.id) setPage(parseInt(e.target.id));
      
    }
  return (
    <div className={styles.NavibarContainer}>
       <div className={styles.IconContainer}>
            <div onClick={onClick} className={styles.IconWrapper}>
                <Icon_home className={styles.icon} width={ICON_WIDTH} height={ICON_HEIGHT} fill={page===1?"white":"black"}/>
            </div>    
                <Icon_dots width="20" height="25" fill="black"/>
            <div onClick={onClick} className={styles.IconWrapper}>
                <Icon_profile className={styles.icon} width={ICON_WIDTH} height={ICON_HEIGHT} fill={page===2?"white":"black"}/>
            </div>
            <Icon_dots width="20" height="25" fill="black"/>
            <div onClick={onClick} className={styles.IconWrapper}>
                <Icon_resume className={styles.icon} width={ICON_WIDTH} height={ICON_HEIGHT} fill={page===3?"white":"black"}/>
            </div>
            <Icon_dots width="20" height="25" fill="black"/>
            <div onClick={onClick} className={styles.IconWrapper}>
                <Icon_portfolio className={styles.icon} width={ICON_WIDTH} height={ICON_HEIGHT} fill={page===4?"white":"black"}/>
            </div>
            <Icon_dots width="20" height="25" fill="black"/>
            <div onClick={onClick} className={styles.IconWrapper}>
                <Icon_contact className={styles.icon} width={ICON_WIDTH} height={ICON_HEIGHT} fill={page===5?"white":"black"}/>
            </div>
        </div>
    </div>
  )
}
