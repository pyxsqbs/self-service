import React from 'react';
import {connect} from 'dva';
import styles from './KnowledgeDetails.css';
import {Tabs, Radio, Icon} from 'antd';
import {Link} from 'dva/router';
import api from '../utils/api';
import DomainPort from '../utils/DomainPort';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.KnowledgeDetails;
const TabPane = Tabs.TabPane;
const RadioGroup = Radio.Group;

class KnowledgeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleTabsChange = this.handleTabsChange.bind(this);
    this.handleAssociatedOrderChange = this.handleAssociatedOrderChange.bind(this);
    this.state = {
      value: 1,
    }
  }

  // onChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  handleMenuClick(e) {
    // message.info('Click on menu item.');
    // console.log('click', e);
  }

  handleTabsChange(key) {
    // console.log(key);
  }

  handleAssociatedOrderChange(value) {
    // console.log(`selected ${value}`)
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelKnowledgeDetails/getKnowledgeDetailsData',
      payload: this.props.params.id,
    });
  }

  render() {
    const modelState = this.props.modelKnowledgeDetails;
    const buttonStyle = {
      margin: '3px',
    };
    const data = modelState.knowledgeDetailsData;
    const contentHeaderMsg = [{
      label: L.contentHeaderMsg_SUBMIT_TIME,
      value: (data) ? data.createDate : '',
    }, {
      label: L.contentHeaderMsg_SUBMITTER,
      value: (data) ? data.authorRealName : '',
    }, {
      label: L.contentHeaderMsg_BROWSE_THROUGH,
      value: (data.TblItsmRepositoryInfo) ? data.TblItsmRepositoryInfo.browseCount : '',
    }, {
      label: L.contentHeaderMsg_CITE,
      value: (data.TblItsmRepositoryInfo) ? data.TblItsmRepositoryInfo.citeCount : '',
    },];

    const titleChildren = [{
      label: L.titleChildren_KNOWLEDGE_PROPERTY,
      value: (data) ? data.typeName : '',
      width: '50%',
    }, {
      label: L.titleChildren_KNOWLEDGE_CLASSIFICATION,
      value: (data) ? data.sort : '',
      width: '50%',
    }, {
      label: L.titleChildren_RELATED_ENVIRONMENT,
      value: (data) ? data.osTypeName : '',
      width: '50%',
    }, {
      label: L.titleChildren_KEY_WORDS,
      value: (data.TblItsmRepositoryInfo) ? data.TblItsmRepositoryInfo.keyWord : '',
      width: '50%',
    }];

    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>

        <div className={styles.knowledgeDetailsContainer}>
          <div className={styles.knowledgeDetailsHeader}>
            <div className={styles.headerOptionsContainer}>
              <div className={styles.title}>
                {(data.TblItsmRepositoryInfo) ? data.TblItsmRepositoryInfo.solutionTitle : ''}
                <Link onClick={() => history.back()} activeStyle={{textDecoration: 'none'}}
                      className={styles.titleGoBack}>
                  <Icon type="arrow-left" style={{fontSize: 22}}/>{L.titleGoBack}
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.knowledgeDetailsContentContainer}
               style={{
                 width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
               }}
          >
            <div className={styles.knowledgeDetailsContent}>
              <div className={styles.contentHeaderMsg}>
                {contentHeaderMsg.map(x => <div className={styles.contentHeaderMsgItem} key={x.label}>
                  {<span>{x.label}：<span className={styles.contentHeaderMsgItemValue}>{x.value}</span></span>}
                </div>)}
              </div>
              <div className={styles.contentTabs}>
                <Tabs defaultActiveKey={L.tabPane}
                      onChange={this.handleTabsChange}
                      tabPosition={(document.body.clientWidth <= 768) ? "top" : "left"}
                      style={{height: "auto", width: '100%', minHeight: 480}}
                      tabBarStyle={{padding: '25px 0'}}
                >
                  <TabPane tab={L.tabPane} key={L.tabPane}
                           style={{
                             height: (document.body.clientWidth <= 768) ? "auto" : 480,
                             fontSize: 12,
                             fontWeight: 'bold',
                           }}
                  >
                    <div className={styles.tabItemTitle}>{L.tabItemTitle}
                      {(data.TblItsmRepositoryInfo) ? data.TblItsmRepositoryInfo.solutionTitle : ''}
                    </div>
                    <div className={styles.tabItemContent}>
                      {titleChildren.map(xs =>
                        <div
                          className={styles.tabItemContentItem}
                          style={{width: xs.width}}
                          key={xs.label}
                        >
                          <label htmlFor="value" className={styles.tabItemContentItemLabel}>{xs.label}： </label>
                          <span name="value" className={styles.tabItemContentItemValue}>{xs.value}</span>
                        </div>
                      )}
                      <div className={styles.divider}/>
                      <div className={styles.tabItemContentItem} style={{width: '100%'}}>
                        <label htmlFor="value"
                               className={styles.tabItemContentItemLabel}>{L.tabItemContentItemLabel_SOLUTIONS}</label>
                        <span name="value" className={styles.tabItemContentItemValue}>
                          {(data) ? data.solution : ''}
                          </span>
                      </div>
                      <div className={styles.tabItemContentItem} style={{width: '100%'}}>
                        <label htmlFor="value"
                               className={styles.tabItemContentItemLabel}>{L.tabItemContentItemLabel_ATTACHMENT}</label>
                        {(data.file) ? data.file.map(x =>
                          <Link
                            name="value"
                            className={styles.tabItemContentItemValue}
                            href={DomainPort + api + "/systemFileInfoAction/download?id=" + x.id}
                            download={x.originalName}
                            key={x.id}
                          >
                            {x.originalName}
                          </Link>
                        ) : ''}
                      </div>
                      <div className={styles.divider}/>
                      <div className={styles.tabItemContentItem} style={{width: '100%'}}>
                        <label htmlFor="value"
                               className={styles.tabItemContentItemLabel}>{L.tabItemContentItemLabel_KNOWLEDGE_EVALUATION}</label>
                        <span name="value" className={styles.tabItemContentItemValue}>
                          {(data.rlist) ? data.rlist.map((x, index) =>
                            <div className={styles.knowledgeEvaluate} key={index}>
                              {`${index + 1}、
                             ${L.knowledgeEvaluate_USER}：${x.appraisalUser}，
                             ${L.knowledgeEvaluate_TIME}：${x.appraisaldate}，
                             ${L.knowledgeEvaluate_SCORE}：${x.appraisalrate}，
                             ${L.knowledgeEvaluate_CONTENT}：${(x.appraisalinfo) ? x.appraisalinfo : ''}`}
                            </div>
                          ) : ''}
                        </span>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(({modelKnowledgeDetails, loading}) => ({modelKnowledgeDetails, loading}))(KnowledgeDetails);
