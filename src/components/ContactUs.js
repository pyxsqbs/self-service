import React from 'react';
import styles from './ContactUs.css';
import {Link} from 'dva/router';
import language from '../utils/Languages/index';

const L = language.LoginContent;
function ContactUs() {
  return (
    <div className={styles.contactUsContainer}>
      <div className={styles.contactUsItem}>
        <div className={styles.logoContainer}>
          <img src={require('../assets/ic_hotline24.png')}/>
        </div>
        <div className={styles.msgContainer}>
          <div className={styles.msgWords}>{L.itemMsgLabel_IT_SERVICE_HOTLINE}</div>
          <div className={styles.msgDetails}>400-872-8999</div>
        </div>
      </div>
      <div className={styles.contactUsItem}>
        <div className={styles.logoContainer}>
          <img src={require('../assets/ic_email24.png')}/>
        </div>
        <div className={styles.msgContainer}>
          <div className={styles.msgWords}>{L.itemMsgLabel_EMAIL_ADDRESS}</div>
          <div className={styles.msgDetails} style={{fontSize: 16}}>support@help.dcits.com</div>
        </div>
      </div>
      <div className={styles.contactUsItem}>
        <div className={styles.logoContainer}>
          <img src={require('../assets/ic_complaint24.png')}/>
        </div>
        <div className={styles.msgContainer}>
          <div className={styles.msgWords}>{L.itemMsgLabel_COMPLAINT_HOTLINE}</div>
          <div className={styles.msgDetails}>010-82707724</div>
        </div>
      </div>
      <div className={styles.contactUsFooter}>
        <div className={styles.logoContainer}>
          <img src={require('../assets/ic_suggestion24.png')}/>
        </div>
        <div className={styles.submitContainer}>
          <Link to="/" activeStyle={{textDecoration: 'none'}}>
            <div className={styles.submitFeedback}>{L.submitFeedback}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
