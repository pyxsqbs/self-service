import React from 'react';
import styles from './AnnouncementModal.css';
import {Icon} from 'antd'
import {Link} from 'dva/router';
import AnnouncementTable from "./AnnouncementTable";
import language from '../utils/Languages/index';

const L = language.IndexPageContent.Announcement.AnnouncementModal;
class AnnouncementModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.changeCount = this.changeCount.bind(this);
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

  changeCount() {
    if (this.state.count === 0) {
      this.setState({
        count: 1,
      })
    } else {
      this.setState({
        count: 0,
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.visible || <div
          className={styles.announcementModalContainer}
          style={{backgroundColor: this.state.visible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'}}
        >
          <div className={styles.announcementFormContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.title}>{L.title}</div>
              <Link activeStyle={{textDecoration: 'none'}}
                    onClick={this.handleCancel}>
                <Icon type="close" className={styles.closeIcon}/>
              </Link>
            </div>
            <div className={styles.announcementFormContent}>
              <AnnouncementTable
                dispatch={this.props.dispatch}
                handleCancel={this.handleCancel}
                loading={this.props.loading}
                totalProperty={this.props.totalProperty}
                data={this.props.data}
                displayModal={this.props.displayModal}
                changeCount={this.changeCount}
                handleDoubleClick={this.props.handleDoubleClick}
              />
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default AnnouncementModal;
