import React from 'react' ; 
import { Link } from 'react-router-dom';
import styles from '../styles/topnav.module.css' ; 

const TopNav = () => {
  const d = new Date();
  const d1 = d.toDateString() ; 


  return (
    <div className={styles.topnav}>   
        <div className={styles.navLeft}>
          <div className={styles.navLeftElem}>
            <Link className={styles.decorationLogo} to='/'> Album App  </Link>
          </div>

          <div className={styles.navLeftElem}>
            <Link className={styles.decoration} to='/home'> Home  </Link>
          </div>
        </div>

        <div className={styles.navRightElem}>
          {`${d1}`}
        </div>
    </div>
  )
}

export default TopNav ; 