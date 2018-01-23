import React from 'react';
import styles from './QueryKnowledgeTable.css';
import {Pagination} from 'antd';
import {hashHistory} from 'dva/router';
import DetailsTable from "./DetailsTable";
import language from '../utils/Languages/index';
import {pagination} from "../utils/modification";

const L = language.QueryKnowledge.QueryKnowledgeTable;

class QueryKnowledgeTable extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelQueryKnowledge/loadGeogId',
      payload: null,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.geogId !== '' && this.props.count === 0) {
      this.props.dispatch({
        type: 'modelQueryKnowledge/getQueryKnowledgeTableData',
        payload: {
          geogId: prevProps.geogId,
          pageNumber: this.props.pageNumber,
          luceneKey: (JSON.stringify(this.props.params).indexOf('"data":') > -1)
            ? JSON.parse(this.props.params.data).value : '',
          sort: (JSON.stringify(this.props.params).indexOf('"data":') > -1)
            ? JSON.parse(this.props.params.data).sort : '',
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
    hashHistory.push('/KnowledgeDetails/' + key);
  }

  render() {
    let dataInit = this.props.queryKnowledgeTableData;
    let data = [];
    pagination();
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        index: (this.props.pageNumber - 1) * 15 + i + 1,
        knowledgeProperty: dataInit[i].solutionTypeName,
        knowledgeCaption: dataInit[i].solutionTitle,
        browseThrough: dataInit[i].browseCount,
        cite: dataInit[i].citeCount,
        author: dataInit[i].creator,
        lastUpdate: dataInit[i].createDate,
      };
    }

    const columns = [{
      title: '',
      dataIndex: 'index',
      key: 'index',
    }, {
      title: L.columns_KNOWLEDGE_PROPERTY,
      dataIndex: 'knowledgeProperty',
      key: 'knowledgeProperty',
    }, {
      title: L.columns_KNOWLEDGE_CAPTION,
      dataIndex: 'knowledgeCaption',
      key: 'knowledgeCaption',
    }, {
      title: L.columns_BROWSE_THROUGH,
      dataIndex: 'browseThrough',
      key: 'browseThrough',
    }, {
      title: L.columns_CITE,
      dataIndex: 'cite',
      key: 'cite',
    }, {
      title: L.columns_AUTHOR,
      dataIndex: 'author',
      key: 'author',
    }, {
      title: L.columns_LAST_UPDATE,
      dataIndex: 'lastUpdate',
      key: 'lastUpdate',
    },];
    return (
      <div
        className={styles.queryKnowledgeTableContainer}
        style={{
          marginTop: (document.body.clientWidth <= 768) ? 0 : '',
        }}
      >
        <DetailsTable
          columns={columns}
          data={data}
          tid={'QueryKnowledgeTable'}
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
        />
      </div>
    )
  }
}

export default QueryKnowledgeTable;
