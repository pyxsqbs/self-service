import React from 'react';
import styles from './RequestRecordTable.css';
import RecordTable from './RecordTable';
import {hashHistory} from 'dva/router';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.RequestRecordTable;
class RequestRecordTable extends React.Component {

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
        type: 'modelIndexPageContent/getRequestRecordTableData',
        payload: null,
      })
    }
  }

  handleDoubleClick(key) {
    hashHistory.push('/RequestDetails/' + key);
  }

  render() {
    let dataInit = this.props.requestRecordData;
    let data = [];
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        workOrderNumber: dataInit[i].srmNo,
        caption: dataInit[i].srmTopic,
        entry: dataInit[i].subSort,
        state: dataInit[i].srmStatusName,
        currentProcessor: dataInit[i].reqName,
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
      <div className={styles.requestRecordTableContainer}>
        <RecordTable
          columns={columns}
          data={data}
          tid={'RequestRecordTable'}
          handleDoubleClick={this.handleDoubleClick}
        />
      </div>
    )
  }
}

export default RequestRecordTable;
