import React from 'react';
import styles from './KnowledgeSearch.css';
import {Input} from 'antd';
import {Link, hashHistory} from 'dva/router';
import {connect} from 'dva';
import language from '../utils/Languages/index';
import {getCookie} from '../utils/cookie';
import LoadingModal from '../components/LoadingModal';

const L = language.LoginContent;

class KnowledgeSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleClick() {
    hashHistory.push('/QueryKnowledge/' + JSON.stringify({
      value: (this.state.value !== '') ? this.state.value : '',
      sort: '',
    }));
  }

  componentDidMount() {
    let route = window.location.hash.substr(1);
    const index = route.indexOf('?');
    route = route.substr(0, index);
    if (route === '/knowledgeSearch') {
      this.props.dispatch({
        type: 'modelKnowledgeSearch/searchPopular',
        payload: null,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    const data = nextProps.modelKnowledgeSearch.data;
    this.setState({
      data: [...data],
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
      <Link to={"/KnowledgeDetails/" + x.id} activeStyle={{textDecoration: 'none'}}>{x.title}</Link>
    </div>);

    return (
      <div className={styles.loginContentContainer}>
        <LoadingModal loading={this.props.loading.global}/>

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
                     className={styles.input} onChange={this.handleChange} defaultValue={''}/>
              <Link activeStyle={{textDecoration: 'none'}} onClick={this.handleClick}
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

export default connect(({modelKnowledgeSearch, loading}) => ({modelKnowledgeSearch, loading}))(KnowledgeSearch);

