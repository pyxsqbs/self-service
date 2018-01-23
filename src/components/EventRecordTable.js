import React from 'react';
import styles from './EventRecordTable.css';
import RecordTable from './RecordTable';
import {hashHistory} from 'dva/router';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.EventRecordTable;
class EventRecordTable extends React.Component {
  constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/') {
      this.props.dispatch({
        type: 'modelIndexPageContent/getEventRecordTableData',
        payload: null,
      })
    }
  }

  handleDoubleClick(key) {
    hashHistory.push('/EventDetails/' + key);
  }

  render() {
    let dataInit = this.props.eventRecordData;
    let data = [];
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        workOrderNumber: dataInit[i].incNo,
        caption: dataInit[i].incTopic,
        entry: dataInit[i].incOriginName,
        state: dataInit[i].incStatusName,
        currentProcessor: dataInit[i].submitName,
      };
    }
    const columns = [{
      title: L.columns_WORK_ORDER_NUMBER,
      dataIndex: 'workOrderNumber',
      key: 'workOrderNumber',
    }, {
      title: L.columns_CAPTION,
      dataIndex: 'caption',
      key: 'caption',
    }, {
      title: L.columns_ENTRY,
      dataIndex: 'entry',
      key: 'entry',
    }, {
      title: L.columns_STATE,
      dataIndex: 'state',
      key: 'state',
    }, {
      title: L.columns_CURRENT_PROCESSOR,
      dataIndex: 'currentProcessor',
      key: 'currentProcessor',
    }];
    return (
      <div className={styles.eventRecordTableContainer}>
        <RecordTable
          columns={columns}
          data={data}
          tid={'EventRecordTable'}
          handleDoubleClick={this.handleDoubleClick}
        />
      </div>
    )
  }
}

export default EventRecordTable;
