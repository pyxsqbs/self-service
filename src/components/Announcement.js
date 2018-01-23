import React from 'react';
import styles from './Announcement.css';
import {Link} from 'dva/router';
import AnnouncementModal from "./AnnouncementModal";
import AnnouncementDetails from "./AnnouncementDetails";
import language from '../utils/Languages/index';

const L = language.IndexPageContent.Announcement;
// const data = [
//   '自助服务台20170731更新公告',
//   '8月2日-8月5日网络变更通告',
//   '8月7日邮箱域名新增入口IP通知',
//   '8月2日SLB、云数据库服务升级通知',
//   '8月2日-8月5日网络变更通告',
//   '8月7日邮箱域名新增入口IP通知',
//   '8月2日SLB、云数据库服务升级通知',
// ];

class Announcement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: 'none',
      moreDisplay: 'flex',
      visible: false,
      detailsVisible: false,
      keyValue: {},
    };
    this.displayModal = this.displayModal.bind(this);
    this.displayDetailsModal = this.displayDetailsModal.bind(this);
    this.handleMoreClick = this.handleMoreClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleDoubleClick2 = this.handleDoubleClick2.bind(this);
  }

  displayModal() {
    this.setState({
      visible: false,
    });
  }

  displayDetailsModal() {
    this.setState({
      detailsVisible: false,
    });
  }

  handleMoreClick() {
    this.setState({
      visible: true,
    });
  }

  handleDoubleClick(key) {
    this.setState({
      detailsVisible: true,
    });
    this.setState({
      keyValue: JSON.parse(key),
    });
  }

  handleDoubleClick2(key) {
    this.setState({
      detailsVisible: true,
    });
    this.setState({
      keyValue: key,
    });
    this.props.dispatch({
      type: 'modelIndexPageContent/getAnnouncementDetailsData',
      payload: key.id,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: this.props.data,
    });
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/') {
      this.props.dispatch({
        type: 'modelIndexPageContent/getAnnouncementData',
        payload: null,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data || prevProps !== this.props) {
      if (this.state.data.length === 0) {
        this.setState({
          display: 'flex',
          moreDisplay: 'none',
        });
      } else {
        this.setState({
          display: 'none',
          moreDisplay: 'flex',
        });
      }
    }
  }


  render() {
    const contentItems = this.state.data.map((x, index) =>
      <div key={index} className={styles.contentItem} onClick={() => this.handleDoubleClick2(x)}>{x.noticeTitle}</div>);

    return (
      <div className={styles.announcementContainer}>
        <AnnouncementModal
          dispatch={this.props.dispatch}
          loading={this.props.loading}
          totalProperty={this.props.totalProperty}
          visible={this.state.visible}
          displayModal={this.displayModal}
          data={this.state.data}
          handleDoubleClick={this.handleDoubleClick}
        />
        <AnnouncementDetails
          dispatch={this.props.dispatch}
          loading={this.props.loading}
          announcementDetailsData={this.props.announcementDetailsData}
          visible={this.state.detailsVisible}
          displayModal={this.displayDetailsModal}
          data={this.state.data}
          keyValue={this.state.keyValue}
        />
        <div className={styles.announcementHeader}>{L.announcementHeader}
          <Link onClick={this.handleMoreClick} activeStyle={{textDecoration: 'none'}}>
            <div className={styles.more} style={{display: this.state.moreDisplay}}>{L.more}</div>
          </Link>
        </div>
        <div className={styles.announcementContent}>
          {contentItems}
          <div className={styles.announcementNoData} style={{display: this.state.display}}>
            <div className={styles.announcementNoDataMsg}>{L.announcementNoDataMsg}</div>
            <div className={styles.showMoreContainer}>
              <div className={styles.showMoreContainerTwo}>
                <Link onClick={this.handleMoreClick} activeStyle={{textDecoration: 'none'}}>
                  <div className={styles.showMore}>{L.showMore}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement;
