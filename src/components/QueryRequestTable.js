import React from 'react';
import styles from './QueryRequestTable.css';
import {Pagination} from 'antd';
import {hashHistory} from 'dva/router';
import DetailsTable from "./DetailsTable";
import language from '../utils/Languages/index';
import {pagination} from "../utils/modification";

const L = language.QueryRequest.QueryEventTable;

class QueryRequestTable extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelQueryRequest/loadUserMessage',
      payload: null,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userMsg.data.reqId && this.props.count === 0) {
      this.props.dispatch({
        type: 'modelQueryRequest/getQueryRequestTableData',
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
    hashHistory.push('/RequestDetails/' + key);
  }

  render() {
    let dataInit = this.props.queryRequestData;
    let data = [];
    pagination();
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        index: (this.props.pageNumber - 1) * 15 + i + 1,
        workOrderNumber: dataInit[i].srmNo,
        caption: dataInit[i].srmTopic,
        classification: dataInit[i].entry,
        state: <div
          style={{
            backgroundColor:
              (dataInit[i].srmStatusName === '审批中') ? '#325fbb' : (
                (dataInit[i].srmStatusName === '已关闭') ? '#8f9498' : (
                  (dataInit[i].srmStatusName === '本团队审批中') ? '#418bf7' : (
                    (dataInit[i].srmStatusName === '新建') ? '#838ce3' : (
                      (dataInit[i].srmStatusName === '待受理') ? '#ffeb3b' : (
                        (dataInit[i].srmStatusName === '处理中') ? '#69d482' : (
                          (dataInit[i].srmStatusName === '等待中') ? '#2faee0' : (
                            (dataInit[i].srmStatusName === '已完成') ? '#9f2fe0' : ''
                          )))))))
          }}
          className={styles.state}
        >{dataInit[i].srmStatusName}</div>,
        requester: dataInit[i].reqName,
        creationTime: dataInit[i].srmCreateDate,
        ExpCompTime: dataInit[i].srmOverdueDate,
        currentProcessor: dataInit[i].flowMangerUserrealname,
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
      title: L.columns_CAPTION,
      dataIndex: 'caption',
      key: 'caption',
    }, {
      title: L.columns_CLASSIFICATION,
      dataIndex: 'classification',
      key: 'classification',
    }, {
      title: L.columns_STATE,
      dataIndex: 'state',
      key: 'state',
      styles: {
        color: 'white',
        fontSize: 10,
      }
    }, {
      title: L.columns_REQUESTER,
      dataIndex: 'requester',
      key: 'requester',
    }, {
      title: L.columns_CREATION_TIME,
      dataIndex: 'creationTime',
      key: 'creationTime',
    }, {
      title: L.columns_EXCEPTED_COMPLETION_TIME,
      dataIndex: 'ExpCompTime',
      key: 'ExpCompTime',
    }, {
      title: L.columns_CURRENT_PROCESSOR,
      dataIndex: 'currentProcessor',
      key: 'currentProcessor',
    },];
    return (
      <div className={styles.queryRequestTableContainer}>
        <DetailsTable
          columns={columns}
          data={data}
          tid={'QueryRequestTable'}
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

export default QueryRequestTable;
