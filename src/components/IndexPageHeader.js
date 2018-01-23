import React from 'react';
import styles from './IndexPageHeader.css';
import {Avatar, Icon, Menu, Dropdown, Popconfirm, Tooltip} from 'antd';
import {Link, hashHistory} from 'dva/router';
import MsgItem from './MsgItem';
import LoginStart from './LoginStart';
import {getCookie, delAllCookie, setCookie} from '../utils/cookie';
import LoginModal from './LoginModal';
import UpdateUserMsgModal from './UpdateUserMsgModal';
import UpdateUserPwdModal from './UpdateUserPwdModal';
import language from '../utils/Languages/index';
import api from '../utils/api';

const L = language.IndexPageHeader;

class IndexPageHeader extends React.Component {
  constructor(props) {
    super(props);
    let route = window.location.hash.substr(1);
    let index = route.indexOf('?');
    route = route.substr(0, index);
    this.state = {
      route: route,
      changeBackground: '#2d3134',
      scrollY: window.scrollY,
      visible: false,
      updateUserMsgVisible: false,
      updateUserPwdVisible: false,
    };

    this.handleAvatarClick = this.handleAvatarClick.bind(this);
    this.handleAvatarMenuClick = this.handleAvatarMenuClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    this.handleMenuItemMouseDown = this.handleMenuItemMouseDown.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
    this.updateUserMsgDisplayModal = this.updateUserMsgDisplayModal.bind(this);
    this.updateUserPwdDisplayModal = this.updateUserPwdDisplayModal.bind(this);
    this.handleUpdateUserPwd = this.handleUpdateUserPwd.bind(this);
  }

  handleAvatarClick() {
    this.props.dispatch({
      type: 'modelIndexPage/postLogout',
      payload: null,
    });
  }

  handleAvatarMenuClick({key}) {
    switch (key) {
      case 'updateUserMsg':
        if (!this.state.updateUserMsgVisible) {
          this.setState({
            updateUserMsgVisible: true,
          });
        }
        break;
      case 'updateUserPwd':
        if (!this.state.updateUserPwdVisible) {
          this.setState({
            updateUserPwdVisible: true,
          });
        }
        break;
      default:
    }
  }

  handleUpdateUserPwd() {
    this.setState({
      updateUserPwdVisible: true,
    });
  }

  handleHomeClick() {
    if (getCookie('success') !== '') {
      hashHistory.push('/');
    } else {
      //todo:hahahaahh
      setCookie('success', 'true');
    }
  }

  handleRegistrationClick = () => {
    this.props.changeLanguage();
    window.location.reload();
  };

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

  updateUserMsgDisplayModal() {
    this.setState({
      updateUserMsgVisible: false,
    });
  }

  updateUserPwdDisplayModal() {
    this.setState({
      updateUserPwdVisible: false,
    });
  }

  handleMenuItemMouseDown(e, xs) {
    if (getCookie('success') === '') {
      this.showModal(e);
    }
    this.props.dispatch({
      type: 'modelIndexPage/afterLoginRoute',
      payload: xs.route,
    });
  }

  handleMenuItemClick(xs) {
    if (getCookie('success') !== '') {
      hashHistory.push('/' + xs.route);
    }
  }

  componentWillMount() {
    if (this.state.route.substr(1) === 'loginContent'
      || this.state.route.substr(1) === 'knowledgeSearch') {
      this.setState({
        changeBackground: 'rgba(0,0,0,0)',
      })
    } else {
      this.setState({
        changeBackground: '#2d3134',
      })
    }
  }

  componentDidMount(preState) {
    window.addEventListener('hashchange', () => {
      let route = window.location.hash.substr(1);
      let index = route.indexOf('?');
      route = route.substr(0, index);
      if (preState !== this.state) {
        this.setState({
          route: route,
        });
        if (this.state.route.substr(1) === 'loginContent'
          || this.state.route.substr(1) === 'knowledgeSearch') {
          this.setState({
            changeBackground: 'rgba(0,0,0,0)',
          })
        } else {
          this.setState({
            changeBackground: '#2d3134',
          })
        }
      }
    });

    //手机端导航栏滚动变色
    window.onscroll = () => {
      if ((this.state.route.substr(1) === 'loginContent'
          || this.state.route.substr(1) === 'knowledgeSearch')
        && (document.body.clientWidth <= 768)) {
        this.setState({
          scrollY: window.scrollY,
        });
        if (this.state.scrollY > 60) {
          this.setState({
            changeBackground: 'rgba(0,0,0,0.7)',
          });
        } else {
          this.setState({
            changeBackground: 'rgba(0,0,0,0)',
          });
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange');
  }

  render() {
    const msg = [{
      title: L.CREATE_EVENT,
      route: 'NewEvent',
    }, {
      title: L.CREATE_REQUEST,
      route: 'NewRequest',
    }, {
      title: L.QUERY_EVENTS,
      route: 'QueryEvent',
    }, {
      title: L.QUERY_REQUEST,
      route: 'QueryRequest',
    }];

    const msgItem = msg.map(x => <MsgItem msg={x.title} key={x.title} dispatch={this.props.dispatch}
                                          route={x.route} loading={this.props.loading}/>);

    const msgMenuItem = msg.map(xs => (
      <Menu.Item className={styles.menuItem} key={xs.title}>
        <div onMouseDown={(e) => this.handleMenuItemMouseDown(e, xs)} onClick={() => this.handleMenuItemClick(xs)}
             className={styles.menuItemMsgContainer}>{xs.title}</div>
      </Menu.Item>
    ));

    const msgMenu = <Menu style={{borderRadius: 5}}>{msgMenuItem}</Menu>;

    let userImg = require('../assets/ic_admin.png');

    if (getCookie('photoId')) {
      userImg = api + '/systemFileInfoAction/view?id=' + getCookie('photoId');
    }

    const search = <Tooltip title={L.RETRIEVE_KNOWLEDGE} placement="bottom">
      <Link className={styles.searchImg}
            onClick={() => ((this.state.route !== '/knowledgeSearch')
              ? hashHistory.push('/knowledgeSearch') : (''))}/>
    </Tooltip>;

    const avatarMenu = (
      <Menu onClick={this.handleAvatarMenuClick}>
        <Menu.Item key="logout">
          <Popconfirm title={L.CONFIRM_LOG_OUT}
                      onConfirm={this.handleAvatarClick}
                      okText={L.EXIT}
                      cancelText={L.CANCEL}
                      placement="leftTop"
          >
            <span style={{width: '100%', height: '100%'}}>{L.LOGOUT}</span>
          </Popconfirm>
        </Menu.Item>
        <Menu.Item key="updateUserMsg">
          <span>{L.MODIFY_PERSONAL_INFORMATION}</span>
        </Menu.Item>
        <Menu.Item key="updateUserPwd">
          <span>{L.CHANGE_PASSWORD}</span>
        </Menu.Item>
      </Menu>
    );

    const avatar = <Dropdown overlay={avatarMenu}>
      <Avatar size="large" src={userImg} className={styles.avatarStyle}
      />
    </Dropdown>;

    const none = (this.state.route.substr(1) === 'loginContent');

    const registration = <Tooltip title={L.registration_TOOLTIPS} placement="bottom"><Link
      onClick={this.handleRegistrationClick}
      activeStyle={{textDecoration: 'none'}}
    >
      <div className={styles.registration}>{L.registration}</div>
    </Link></Tooltip>;

    const login = <LoginStart dispatch={this.props.dispatch} loading={this.props.loading}/>;

    return (
      <div
        className={styles.header}
        style={{
          backgroundColor: this.state.changeBackground,
          transition: ((document.body.clientWidth <= 768)
            && (this.state.route.substr(1) === 'loginContent'
              || this.state.route.substr(1) === 'knowledgeSearch'))
            ? 'background-color .3s ease' : '',
          WebkitTransition: ((document.body.clientWidth <= 768)
            && (this.state.route.substr(1) === 'loginContent'
              || this.state.route.substr(1) === 'knowledgeSearch'))
            ? 'background-color .3s ease' : '', /*Safari*/
        }}
      >
        <div className={styles.userContainer}>
          {none || avatar}
          {!none || login}
        </div>
        <div className={styles.logoContainer}>
          <Link
            className={styles.logoImg}
            onClick={this.handleHomeClick}
            style={{
              width: (getCookie('language') === 'chinese') ? 108 : 100,
              backgroundSize: ((getCookie('language') === 'chinese') ? '108' : '100') + 'px 25px',
              backgroundImage: 'url('
              + ((getCookie('language') !== 'english') ? require('../assets/logo_2x.png') : require('../assets/logo-eng @2x.png'))
              + ')',
            }}
          />
        </div>
        <ul className={styles.msgContainer}>
          {msgItem}
        </ul>
        <div className={styles.utilContainer}>
          {none || search}
          {none || avatar}
          {!none || registration}
          {!none || login}
        </div>
        <UpdateUserMsgModal
          dispatch={this.props.dispatch}
          loading={this.props.loading}
          updateUserMsgVisible={this.state.updateUserMsgVisible}
          displayModal={this.updateUserMsgDisplayModal}
          userMsg={this.props.userMsg}
          handleUpdateUserPwd={this.handleUpdateUserPwd}
        />
        <UpdateUserPwdModal
          dispatch={this.props.dispatch}
          loading={this.props.loading}
          updateUserPwdVisible={this.state.updateUserPwdVisible}
          displayModal={this.updateUserPwdDisplayModal}
          userMsg={this.props.userMsg}
        />
        <div className={styles.dropMenuContainer}>
          {none || search}
          {!none || registration}
          <Dropdown overlay={msgMenu} trigger={['click']}>
            <a className="ant-dropdown-link" href="#"
               style={{
                 height: 100 + '%',
                 display: 'flex',
                 alignItems: 'center',
                 margin: '0 5px',
                 textDecoration: 'none'
               }}>
              <Icon type="menu-fold" style={{fontSize: 22 + 'px', color: 'white'}}/>
            </a>
          </Dropdown>
          <LoginModal visible={this.state.visible} dispatch={this.props.dispatch} displayModal={this.displayModal}
                      loading={this.props.loading}/>
        </div>
      </div>
    )
  }
}

export default IndexPageHeader;
