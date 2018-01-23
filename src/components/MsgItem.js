import React from 'react';
import styles from './MsgItem.css';
import {Link, hashHistory} from 'dva/router';
import {getCookie} from '../utils/cookie';
import LoginModal from './LoginModal';

class MsgItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoverColor: 'white',
      hoverBkgColor: 'inherit',
      visible: false,
    };
    this.changeHoverColor = this.changeHoverColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  showModal(e) {
    if (e.button === 0) {
      this.setState({
        visible: true,
      });
    }
  };

  displayModal() {
    this.setState({
      visible: false,
    });
  }

  handleClick(e) {
    if (getCookie('success') !== '') {
      hashHistory.push('/' + this.props.route);
    } else {
      this.showModal(e);
      this.changeHoverColor();
      this.props.dispatch({
        type: 'modelIndexPage/afterLoginRoute',
        payload: this.props.route,
      });
    }
  }

  changeHoverColor() {
    if (this.state.hoverColor === '#41b5ef') {
      this.setState({
        hoverColor: 'white',
        hoverBkgColor: 'inherit',
      })
    } else {
      this.setState({
        hoverColor: '#41b5ef',
        hoverBkgColor: '#41b5ef',
      })
    }
  }

  render() {
    return (
      <div className={styles.msgItem} onMouseOver={this.changeHoverColor} onMouseOut={this.changeHoverColor}>
        <Link activeStyle={{textDecoration: 'none'}} onMouseDown={this.handleClick}>
          <div className={styles.msgItemContent} style={{color: this.state.hoverColor}}>
            {this.props.msg}
          </div>
          <div className={styles.msgItemFooter} style={{
            backgroundColor: this.state.hoverBkgColor,
            width: (getCookie('language') === 'chinese') ? 78 : 100,
          }}/>
        </Link>
        <LoginModal visible={this.state.visible} dispatch={this.props.dispatch} displayModal={this.displayModal}
                    loading={this.props.loading}/>
      </div>
    )
  }
}

export default MsgItem;
