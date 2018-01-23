import React from 'react';
import styles from './AnnouncementDetails.css';
import {Icon} from 'antd'
import {Link} from 'dva/router';
import api from '../utils/api';
import DomainPort from '../utils/DomainPort';
import language from '../utils/Languages/index';

const L = language.IndexPageContent.Announcement.AnnouncementDetails;
class AnnouncementDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
    this.props.displayModal();
  };

  render() {
    const {file, noticeContent, noticeTitle, publishTime, viewTimes} = this.props.announcementDetailsData;
    return (
      <div>
        {!this.state.visible || <div
          className={styles.announcementDetailsModalContainer}
          style={{backgroundColor: this.state.visible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'}}
        >
          <div className={styles.announcementFormContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.title}>{L.title}——{noticeTitle}</div>
              <Link activeStyle={{textDecoration: 'none'}}
                    onClick={this.handleCancel}>
                <Icon type="close" className={styles.closeIcon}/>
              </Link>
            </div>
            <div className={styles.announcementFormContent}>
              <div className={styles.announcementDetailsContent}>
                <div className={styles.value}>{noticeContent}</div>
                <div className={styles.files}>
                  {(file.length !== 0) ? `${L.files}：` : ''}
                  {(file) ? file.map(x =>
                    <Link
                      key={x.id}
                      name="value"
                      className={styles.tabItemContentItemValue}
                      href={DomainPort + api + "/systemFileInfoAction/download?id=" + x.id}
                      download={x.originalName}
                    >
                      {x.originalName}
                    </Link>
                  ) : ''}
                </div>
              </div>
              <div className={styles.announcementDetailsFooter}>
                <div className={styles.label}>{L.label_VIEW_TIMES}：<span className={styles.value}>{viewTimes}</span></div>
                <div className={styles.label}>{L.label_PUBLISH_TIME}：<span className={styles.value}>{publishTime}</span></div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default AnnouncementDetails;
