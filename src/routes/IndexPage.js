import React from 'react';
import {connect} from 'dva';
import styles from './IndexPage.css';
import IndexPageHeader from '../components/IndexPageHeader';
import LoadingModal from '../components/LoadingModal';
import {hashHistory} from 'dva/router';
import {setCookie, getCookie, parseCookieToJson} from '../utils/cookie';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage() {
    setCookie('language', (getCookie('language') === 'chinese') ? 'english' : 'chinese', 1);
  }

  componentWillMount() {
    if (getCookie('language') === '') {
      setCookie('language', 'chinese', 1);
    }

    if (this.props.modelIndexPage.success) {
      setCookie('success', this.props.modelIndexPage.success, 1);
    }

    if (getCookie('success') === '') {
      hashHistory.replace('/loginContent');
    }

    window.addEventListener('hashchange', () => {
      let route = window.location.hash.substr(1);
      const index = route.indexOf('?');
      route = route.substr(0, index);
      const cookieJson = parseCookieToJson(document.cookie);
      if (getCookie('success') !== '' && JSON.parse(cookieJson).success) {
        if (route === '/loginContent') {
          hashHistory.replace('/');
        }
      } else {
        if (route !== '/loginContent' && !this.props.modelIndexPage.success) {
          hashHistory.replace('/loginContent');
        }
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange');
  }


  render() {
    return (
      <div className={styles.bodyBack}>
        <IndexPageHeader
          dispatch={this.props.dispatch}
          loading={this.props.loading.global}
          userMsg={this.props.modelIndexPage.userMsg}
          changeLanguage={this.changeLanguage}
        />
        {this.props.children}
        <LoadingModal loading={this.props.loading.global}/>
      </div>
    );
  }
}

export default connect(({modelIndexPage, loading}) => ({modelIndexPage, loading}))(IndexPage);
