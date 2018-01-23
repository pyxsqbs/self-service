import React from 'react';
import styles from './LoginStart.css';
import {Link} from 'dva/router';
import LoginModal from './LoginModal';
import language from '../utils/Languages/index';
const L = language.IndexPageHeader;

class LoginStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  showModal(e) {
    if (e.button === 0) {
      this.setState({
        visible: true,
      });
    }
    this.props.dispatch({
      type: 'modelIndexPage/afterLoginRoute',
      payload: '',
    });
  };

  displayModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div className={styles.loginStartContainer}>
        <Link activeStyle={{textDecoration: 'none'}} className={styles.login}
              onMouseDown={this.showModal}>{L.LOGIN}</Link>;
        <LoginModal visible={this.state.visible} dispatch={this.props.dispatch} loading={this.props.loading}
                    displayModal={this.displayModal}/>
      </div>
    )
  }
}

export default LoginStart;
