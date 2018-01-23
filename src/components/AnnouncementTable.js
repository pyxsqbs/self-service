import React from 'react';
import styles from './AnnouncementTable.css';
import DetailsTable from "./DetailsTable";
import {Pagination, LocaleProvider} from 'antd';
import language from '../utils/Languages/index';
import enUS from 'antd/lib/locale-provider/en_US';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import {getCookie} from '../utils/cookie'

const L = language.IndexPageContent.Announcement.AnnouncementModal.AnnouncementTable;

class AnnouncementTable extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.state = {
      pageNumber: 1,
    }
  }

  onChange(pageNumber) {
    this.props.changeCount();
    this.setState({
      pageNumber: pageNumber,
    });
  }

  handleDoubleClick(key) {
    // this.props.displayModal();
    this.props.dispatch({
      type: 'modelIndexPageContent/getAnnouncementDetailsData',
      payload: JSON.parse(key).id,
    });
    this.props.handleDoubleClick(key);
  }

  render() {
    let dataInit = this.props.data;
    let data = [];
    for (let i = 0; i < dataInit.length; i++) {
      data[i] = {
        key: JSON.stringify(dataInit[i]),
        index: i + 1,
        id: dataInit[i].id,
        state: dataInit[i].status,
        caption: dataInit[i].noticeTitle,
      };
    }

    const columns = [{
      title: '',
      dataIndex: 'index',
      key: 'index',
    }, {
      title: L.columns_ID,
      dataIndex: 'id',
      key: 'id',
      styles: {
        color: '#0070d2',
      }
    }, {
      title: L.columns_STATE,
      dataIndex: 'state',
      key: 'state',
    }, {
      title: L.columns_CAPTION,
      dataIndex: 'caption',
      key: 'caption',
    },];
    return (
      <div className={styles.announcementContainer}>
        <DetailsTable
          columns={columns}
          data={data}
          tid={'QueryEventTable'}
          limit={'15'}
          handleDoubleClick={this.handleDoubleClick}
        />
        <LocaleProvider locale={(getCookie('language') !== 'english') ? {} : enUS}>
          <Pagination
            defaultCurrent={1}
            total={this.props.totalProperty}
            className={styles.pagination}
            showQuickJumper
            onChange={this.onChange}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} ${L.showTotal}`}
            defaultPageSize={15}
          />
        </LocaleProvider>
      </div>
    );
  }
}

export default AnnouncementTable;
