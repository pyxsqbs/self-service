import React from 'react';
import styles from './SolutionAttachmentTable.css';
import RecordTable from './RecordTable';
import {Icon} from 'antd';
import api from '../utils/api';
import {Link} from 'dva/router';
import DomainPort from '../utils/DomainPort';
import language from '../utils/Languages/index';

const L = language.EventDetails.SolutionAttachmentTable;
class SolutionAttachmentTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelEventDetails/getSolutionAttachmentTableData',
      payload: this.props.id,
    })
  }

  render() {
    let dataInit = this.props.data;
    let data = [];
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: dataInit[i].id,
        fileName: dataInit[i].originalName,
        size: (dataInit[i].fileSize/1024/1024).toFixed(2)+' MB',
        uploadMan: dataInit[i].createUserName,
        uploadTime: dataInit[i].createdate,
        attachmentType: dataInit[i].objType,
        operation: <Link
          href={DomainPort + api + "/systemFileInfoAction/download?id=" + dataInit[i].id}
          download={dataInit[i].originalName}
        >
          <Icon type="download"/>
        </Link>,
      };
    }
    const columns = [{
      title: L.columns_FILENAME,
      dataIndex: 'fileName',
      key: 'fileName',
    }, {
      title: L.columns_SIZE,
      dataIndex: 'size',
      key: 'size',
    }, {
      title: L.columns_UPLOADER,
      dataIndex: 'uploadMan',
      key: 'uploadMan',
    }, {
      title: L.columns_UPLOADTIME,
      dataIndex: 'uploadTime',
      key: 'uploadTime',
    },
    //   {
    //   title: L.columns_ATTACHMENTTYPE,
    //   dataIndex: 'attachmentType',
    //   key: 'attachmentType',
    // },
      {
      title: L.columns_OPERATION,
      dataIndex: 'operation',
      key: 'operation',
    },];
    return (
      <div
        className={styles.solutionAttachmentContainer}
        style={{
          width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
        }}
      >
        <div className={styles.title}>{L.title}</div>
        <RecordTable
          columns={columns}
          data={data}
          tid={'SolutionAttachmentTable'}
          paddingTop={(document.body.clientWidth <= 768) ? '37.3%' : '8.6%'}
        />
      </div>
    )
  }
}

export default SolutionAttachmentTable;
