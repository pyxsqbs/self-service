import React from 'react';
import styles from './Total.css';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.Total;

class Total extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    const requestHistogramData = nextProps
      .requestHistogramData.map(x => x
        .text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条')));
    const eventHistogramData = nextProps
      .eventHistogramData.map(x => x
        .text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条')));
    this.setState({
      data: [
        requestHistogramData[0],
        (requestHistogramData[0] - requestHistogramData[2]) ? (requestHistogramData[0] - requestHistogramData[2]) : '',
        eventHistogramData[2],
        (eventHistogramData[2] - eventHistogramData[1]) ? (eventHistogramData[2] - eventHistogramData[1]) : '',
      ],
    });
  }

  render() {
    const num = this.state.data;
    const totalDivider = <div className={styles.divider}/>;
    return (
      <div className={styles.totalContainer}>
        <div className={styles.totalItemContainer}>{L.totalItemContainer_MY_REQUESTS}
          <div className={styles.totalMaxNum}>{num[0]}</div>
        </div>
        {totalDivider}
        <div className={styles.totalItemContainer}>{L.totalItemContainer_MY_UNFINIDHED_REQUESTS}
          <div className={styles.totalMinNum}>{num[1]}</div>
        </div>
        {/*{totalDivider}*/}
        {/*<div className={styles.totalItemContainer}>{L.totalItemContainer_TO_CONFIRM_REQUESTS}*/}
        {/*<div className={styles.totalMinNum}>{num[2]}</div>*/}
        {/*</div>*/}
        {totalDivider}
        <div className={styles.totalItemContainer}>{L.totalItemContainer_MY_INCIDENTS}
          <div className={styles.totalMaxNum}>{num[2]}</div>
        </div>
        {totalDivider}
        <div className={styles.totalItemContainer}>{L.totalItemContainer_MY_UNFINIDHED_INCIDENTS}
          <div className={styles.totalMinNum}>{num[3]}</div>
        </div>
        {/*{totalDivider}*/}
        {/*<div className={styles.totalItemContainer}>{L.totalItemContainer_TO_CONFIRM_INCIDENTS}*/}
        {/*<div className={styles.totalMinNum}>{num[5]}</div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Total;
