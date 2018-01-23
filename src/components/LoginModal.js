import React from 'react';
import styles from './LoginModal.css';
import {Link} from 'dva/router';
import LoginForm from './LoginForm';
import {Icon} from 'antd'

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      changeBackground: 'rgba(0,0,0,0)',
      fields: {
        username: {
          value: '',
        },
      },
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: nextProps.visible,
    });
    if (document.body.clientWidth <= 768) {
      this.changeBackgroundColor();
    }
  }

  handleFormChange(changedFields) {
    this.setState({
      fields: {...this.state.fields, ...changedFields},
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
      changeBackground: 'rgba(0,0,0,0)',
    });
    this.props.displayModal();
  };

  changeBackgroundColor() {
    this.setState({
      changeBackground: 'rgba(0,0,0,0.7)',
    });
  }

  render() {
    return (
      <div>
        {!this.state.visible || <div
          className={styles.modalContainer}
          style={{backgroundColor: this.state.changeBackground}}
          onMouseOver={this.changeBackgroundColor}>
          <div className={styles.loginFormContainer}>
            <div className={styles.iconContainer}>
              <Link activeStyle={{textDecoration: 'none'}}
                    onClick={this.handleCancel}>
                <Icon type="close" className={styles.closeIcon}/>
              </Link>
            </div>
            <div className={styles.loginFormContent}>
              <LoginForm
                dispatch={this.props.dispatch}
                handleCancel={this.handleCancel}
                loading={this.props.loading}
                onChange={this.handleFormChange}
                {...this.state.fields}
              />
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default LoginModal;
