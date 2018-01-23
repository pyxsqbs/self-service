import React from 'react';
import styles from './SystemInforms.css';
import {Link} from 'dva/router';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.SystemInforms;
const data = [
  // '自助服务台20170731更新公告',
  // '8月2日-8月5日网络变更通告',
  // '8月7日邮箱域名新增入口IP通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日-8月5日网络变更通告',
  // '8月7日邮箱域名新增入口IP通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
  // '8月2日SLB、云数据库服务升级通知',
];

class SystemInforms extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      display: 'none',
      moreDisplay: 'flex',
    }
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/') {
      this.props.dispatch({
        type: 'modelIndexPageContent/getSystemInformsData',
        payload: null,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    // const data = nextProps.data.slice(0, 8).map(x => x);
    this.setState({
      data: [...data],
    });
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
      <div key={index} className={styles.contentItem}>{x}</div>);

    return (
      <div className={styles.systemInformsContainer}>
        <div className={styles.systemInformsHeader}>{L.systemInformsHeader}
          <Link to="/" activeStyle={{textDecoration: 'none'}}>
            <div className={styles.more} style={{display: this.state.moreDisplay}}>{L.more}</div>
          </Link>
        </div>
        <div className={styles.systemInformsContent}>
          {contentItems}
          <div className={styles.systemInformsNoData} style={{display: this.state.display}}>
            <div className={styles.systemInformsNoDataMsg}>{L.systemInformsNoDataMsg}</div>
            <div className={styles.showMoreContainer}>
              <div className={styles.showMoreContainerTwo}>
                <Link to="/" activeStyle={{textDecoration: 'none'}}>
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

export default SystemInforms;
