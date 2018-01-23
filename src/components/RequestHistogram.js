import React from 'react';
import styles from './RequestHistogram.css';
import Histogram from './Histogram';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.RequestHistogram;
class RequestHistogram extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/') {
      this.props.dispatch({
        type: 'modelIndexPageContent/getRequestHistogramData',
        payload: null,
      })
    }
  }

  render() {
    const data = this.props.data;
    const mainItems = data.map(x => x.text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条'))).reverse();
    mainItems.splice(4,1);
    const labelItems = [
      L.labelItems_PROCESSED,
      L.labelItems_UNFINISHED,
      L.labelItems_TO_ACCEPT,
      L.labelItems_TO_APPROVE,
      // L.labelItems_TO_CONFIRM,
      L.labelItems_CREATED,
      L.labelItems_REQUESTED,
    ];
    const mainColors = ['#9aa6b9', '#948aec', '#ffce3d', '#3dbd7d', '#49a9ee', '#f46165', '#f78e3d'];
    return (
      <div className={styles.requestHistogramContainer}>
        <Histogram labelItems={labelItems} mainItems={mainItems} mainColors={mainColors}/>
      </div>
    )
  }
}

export default RequestHistogram;
