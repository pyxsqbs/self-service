import React from 'react';
import {connect} from 'dva';
import styles from './QueryEvent.css';
import QueryEventForm from '../components/QueryEventForm';
import QueryEventTable from '../components/QueryEventTable';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.QueryEvent;
class QueryEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      pageNumber: 1,
    };
    this.changeCount = this.changeCount.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);
  }

  changeCount() {
    if (this.state.count === 0) {
      this.setState({
        count: 1,
      })
    } else {
      this.setState({
        count: 0,
      })
    }
  }

  changePageNumber(pageNumber){
    this.setState({
      pageNumber: pageNumber,
    })
  }

  render() {
    const modelState = this.props.modelQueryEvent;
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>

        <div className={styles.queryEventContainer}>
          <div className={styles.headerQueryContainer}>
            <div className={styles.title}>{L.title}</div>
            <LoadingModal loading={this.props.loading.global}/>
            <QueryEventForm
              dispatch={this.props.dispatch}
              changeCount={this.changeCount}
              changePageNumber={this.changePageNumber}
            />
            <div style={{
              overflow: (document.body.clientWidth <= 768) ? 'scroll' : '',
              width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
              marginLeft: (document.body.clientWidth <= 768) ? -20 : 0,
            }}>
              <QueryEventTable
                dispatch={this.props.dispatch}
                userMsg={modelState.userMsg}
                queryEventData={modelState.queryEventData}
                totalProperty={modelState.totalProperty}
                luceneKey={modelState.luceneKey}
                count={this.state.count}
                changeCount={this.changeCount}
                pageNumber={this.state.pageNumber}
                changePageNumber={this.changePageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(({modelQueryEvent, loading}) => ({modelQueryEvent, loading}))(QueryEvent);
