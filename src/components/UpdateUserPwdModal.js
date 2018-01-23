import React from 'react';
import styles from './UpdateUserPwdModal.css';
import {Icon} from 'antd'
import {Link} from 'dva/router';
import UpdateUserPwdForm from './UpdateUserPwdForm';
import language from '../utils/Languages/index';

const L = language.IndexPageHeader.UpdateUserPwdModal;
class UpdateUserPwdModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.updateUserPwdVisible,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
    this.props.displayModal();
  };

  render() {
    return (
      <div>
        {!this.state.visible || <div
          className={styles.updateUserPwdModalContainer}
          style={{backgroundColor: this.state.visible ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0)'}}
        >
          <div className={styles.updateUserPwdFormContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.title}>{L.title}</div>
              <Link activeStyle={{textDecoration: 'none'}}
                    onClick={this.handleCancel}>
                <Icon type="close" className={styles.closeIcon}/>
              </Link>
            </div>
            <div className={styles.updateUserPwdFormContent}>
              <UpdateUserPwdForm
                dispatch={this.props.dispatch}
                handleCancel={this.handleCancel}
                loading={this.props.loading}
                userMsg={this.props.userMsg}
              />
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default UpdateUserPwdModal;
