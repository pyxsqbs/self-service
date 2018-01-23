import React from 'react';
import styles from './QueryEventTable.css';
import {Pagination} from 'antd';
import {hashHistory} from 'dva/router';
import DetailsTable from "./DetailsTable";
import language from '../utils/Languages/index';
import {pagination} from "../utils/modification";

const L = language.QueryEvent.QueryEventTable;

class QueryEventTable extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelQueryEvent/loadUserMessage',
      payload: null,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userMsg.data.reqId && this.props.count === 0) {
      this.props.dispatch({
        type: 'modelQueryEvent/getQueryEventTableData',
        payload: {
          reqId: prevProps.userMsg.data.reqId,
          pageNumber: this.props.pageNumber,
          luceneKey: this.props.luceneKey,
        },
      });
      this.props.changeCount();
    }
  }

  onChange(pageNumber) {
    this.props.changeCount();
    this.props.changePageNumber(pageNumber);
  }

  handleDoubleClick(key) {
    hashHistory.push('/EventDetails/' + key);
  }

  render() {
    let dataInit = this.props.queryEventData;
    let data = [];
    pagination();
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        index: (this.props.pageNumber - 1) * 15 + i + 1,
        workOrderNumber: dataInit[i].incNo,
        state: <div
          style={{
            backgroundColor:
              (dataInit[i].status === '处理中') ? '#69d482' : (
                (dataInit[i].status === '新建') ? '#838ce3' : (
                  (dataInit[i].status === '已分派') ? '#3179b1' : (
                    (dataInit[i].status === '待分派') ? '#33d4ff' : (
                      (dataInit[i].status === '已关闭') ? '#9fa0a4' : (
                        (dataInit[i].status === '已解决') ? '#ffeb3b' : ''
                      )
                    )
                  )
                )
              )
          }}
          className={styles.state}
        >{dataInit[i].status}</div>,
        creationTime: dataInit[i].incCreateDate,
        caption: dataInit[i].incTopic,
        entry: dataInit[i].entry,
        acceptGroup: dataInit[i].dealGroupName,
        acceptor: dataInit[i].flowUserName,
        priority: <div
          style={{
            backgroundColor:
              (dataInit[i].incPriLevelName === '1') ? '#ff625c' : (
                (dataInit[i].incPriLevelName === '2') ? '#e67505' : (
                  (dataInit[i].incPriLevelName === '3') ? '#ffd200' : (
                    (dataInit[i].incPriLevelName === '4') ? '#9fa0a4' : (
                      (dataInit[i].incPriLevelName === '5') ? '#c0c0c0' : ''
                    )
                  )
                )
              )
          }}
          className={styles.priority}
        >{dataInit[i].incPriLevelName}</div>,
        requester: dataInit[i].requesterName,
        creator: dataInit[i].submitName,
        closeCode: dataInit[i].incCloseCode,
      };
    }

    const columns = [{
      title: '',
      dataIndex: 'index',
      key: 'index',
    }, {
      title: L.columns_WORK_ORDER_NUMBER,
      dataIndex: 'workOrderNumber',
      key: 'workOrderNumber',
      styles: {
        color: '#0070d2',
      }
    }, {
      title: L.columns_STATE,
      dataIndex: 'state',
      key: 'state',
      styles: {
        color: 'white',
        fontSize: 10,
      }
    }, {
      title: L.columns_CREATION_TIME,
      dataIndex: 'creationTime',
      key: 'creationTime',
    }, {
      title: L.columns_CAPTION,
      dataIndex: 'caption',
      key: 'caption',
    }, {
      title: L.columns_ENTRY,
      dataIndex: 'entry',
      key: 'entry',
    }, {
      title: L.columns_ACCEPT_GROUP,
      dataIndex: 'acceptGroup',
      key: 'acceptGroup',
    }, {
      title: L.columns_ACCEPTOR,
      dataIndex: 'acceptor',
      key: 'acceptor',
    }, {
      title: L.columns_PRIORITY,
      dataIndex: 'priority',
      key: 'priority',
      styles: {
        color: 'white',
        fontSize: 10,
      }
    }, {
      title: L.columns_REQUESTER,
      dataIndex: 'requester',
      key: 'requester',
    }, {
      title: L.columns_CREATOR,
      dataIndex: 'creator',
      key: 'creator',
    }, {
      title: L.columns_CLOSE_CODE,
      dataIndex: 'closeCode',
      key: 'closeCode',
    }];
    return (
      <div className={styles.queryEventTableContainer}>
        <DetailsTable
          columns={columns}
          data={data}
          tid={'QueryEventTable'}
          limit={'15'}
          handleDoubleClick={this.handleDoubleClick}
        />
        <Pagination
          defaultCurrent={1}
          total={this.props.totalProperty}
          className={styles.pagination}
          showQuickJumper
          onChange={this.onChange}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} ${L.showTotal}`}
          defaultPageSize={15}
          current={this.props.pageNumber}
        />
      </div>
    )
  }
}

export default QueryEventTable;
