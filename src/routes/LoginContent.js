import React from 'react';
import styles from './LoginContent.css';
import {Input} from 'antd';
import {Link} from 'dva/router';
import LoginModal from '../components/LoginModal';
import {connect} from 'dva';
import language from '../utils/Languages/index';
import {getCookie} from '../utils/cookie';
import LoadingModal from '../components/LoadingModal';

const L = language.LoginContent;

class LoginContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      visible: false,
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.handleRetrievalMsgClick = this.handleRetrievalMsgClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.displayModal = this.displayModal.bind(this);
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/loginContent') {
      this.props.dispatch({
        type: 'modelLoginContent/searchPopular',
        payload: null,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.modelLoginContent.data;
    this.setState({
      data: [...data],
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmitButtonClick(e) {
    this.showModal(e);
    this.props.dispatch({
      type: 'modelIndexPage/afterLoginRoute',
      payload: 'QueryKnowledge/' + JSON.stringify({
        value: (this.state.value !== '') ? this.state.value : '',
        sort: '',
      }),
    });
  }

  handleRetrievalMsgClick(e, x) {
    this.showModal(e);
    this.props.dispatch({
      type: 'modelIndexPage/afterLoginRoute',
      payload: 'KnowledgeDetails/' + x.id,
    });
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

  render() {
    const data = this.state.data.map(x => {
      return {
        title: x.solutionTitle,
        id: x.id,
      }
    });
    const retrievalMsg = data.slice(0, 6).map(x => <div key={x.id} className={styles.retrievalMsg}>
      <Link activeStyle={{textDecoration: 'none'}}
            onMouseDown={(e) => this.handleRetrievalMsgClick(e, x)}>{x.title}</Link>
    </div>);

    return (
      <div className={styles.loginContentContainer}>
        <LoadingModal loading={this.props.loading.global}/>

        <LoginModal visible={this.state.visible} dispatch={this.props.dispatch} displayModal={this.displayModal}
                    loading={this.props.loading.global}/>
        <div className={styles.slogenContainer}>
          <div
            className={styles.slogenMsg}
            style={{
              backgroundImage: 'url("'
              + ((getCookie('language') !== 'english')
                ? require('../assets/slogen@2x.png')
                : require('../assets/slogen-eng @2x.png'))
              + '")',
            }}
          />
          <div className={styles.slogenContent}>
            <div className={styles.inputContainer}>
              <Input id={'myInput'} placeholder={L.input}
                     className={styles.input} onChange={this.handleChange}/>
              <Link activeStyle={{textDecoration: 'none'}} onMouseDown={this.handleSubmitButtonClick}
                    className={styles.submitButton}>{L.submitButton}</Link>
            </div>
            <div className={styles.popularRetrieval}>
              <div className={styles.retrievalLabel}>{L.retrievalLabel}</div>
              <div className={styles.retrievalMsgContainer}>{retrievalMsg}</div>
            </div>
          </div>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerContentItem}>
              <div className={styles.itemLogo}>
                <img src={require('../assets/ic_hotline40.png')}/>
              </div>
              <div className={styles.itemMsg}>
                <div className={styles.itemMsgLabel}>{L.itemMsgLabel_IT_SERVICE_HOTLINE}</div>
                <div className={styles.itemMsgMain}>400-872-8999</div>
              </div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.footerContentItem}>
              <div className={styles.itemLogo}>
                <img src={require('../assets/ic_email40.png')}/>
              </div>
              <div className={styles.itemMsg}>
                <div className={styles.itemMsgLabel}>{L.itemMsgLabel_EMAIL_ADDRESS}</div>
                <div className={styles.itemMsgMain}>support@help.dcits.com</div>
              </div>
            </div>
            <div className={styles.divider}/>
            <div className={styles.footerContentItem}>
              <div className={styles.itemLogo}>
                <img src={require('../assets/ic_complaint40.png')}/>
              </div>
              <div className={styles.itemMsg}>
                <div className={styles.itemMsgLabel}>{L.itemMsgLabel_COMPLAINT_HOTLINE}</div>
                <div className={styles.itemMsgMain}>010-82707724</div>
              </div>
            </div>
          </div>
          <div className={styles.footerEnd}>{'© 2017 Copyright by DCITS All rights reserved'}</div>
        </div>
      </div>
    )
  }
}

export default connect(({modelLoginContent, loading}) => ({modelLoginContent, loading}))(LoginContent);

