import React from 'react';
import styles from './EventHistogram.css';
import Histogram from './Histogram';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.EventHistogram;
class EventHistogram extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/') {
      this.props.dispatch({
        type: 'modelIndexPageContent/getEventHistogramData',
        payload: null,
      })
    }
  }

  render() {
    const data = this.props.data;
    let mainItems = data.map(x => x.text.substring(x.text.indexOf('(') + 1, x.text.indexOf('条'))).reverse();
    mainItems.splice(0,1);
    mainItems.splice(1,2);
    mainItems.splice(3,2);
    const labelItems = [
      L.labelItems_TO_DISPATCH,
      L.labelItems_UNSOLVED,
      L.labelItems_CREATED,
      // L.labelItems_TO_CONFIRM,
      L.labelItems_PROCESSED,
    ];
    const mainColors = ['#9aa6b9', '#948aec', '#ffce3d', '#f46165', '#3fb7c2', '#f78e3d'];
    return (
      <div className={styles.eventHistogramContainer}>
        <Histogram labelItems={labelItems} mainItems={mainItems} mainColors={mainColors}/>
      </div>
    );
  }
}

export default EventHistogram;
