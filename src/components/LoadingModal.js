import React from 'react';
import styles from './LoadingModal.css';
import {Spin} from 'antd';

function LoadingModal(props) {
  return (
    <div
      className={styles.LoadingModalContainer}
      style={{right: (props.loading) ? '' : '-150px'}}
    >
      <Spin size="large" delay={500}/>
    </div>
  );
}

export default LoadingModal;
