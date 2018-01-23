import React from 'react';
import styles from './IndexPageContent.css';
import Total from '../components/Total'
import RequestHistogram from '../components/RequestHistogram';
import EventHistogram from '../components/EventHistogram';
import {Link} from 'dva/router';
import RequestRecordTable from '../components/RequestRecordTable';
import EventRecordTable from '../components/EventRecordTable';
import Announcement from '../components/Announcement';
import ContactUs from '../components/ContactUs';
import SystemInforms from '../components/SystemInforms';
import {connect} from 'dva';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.IndexPageContent;

class IndexPageContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const modelState = this.props.modelIndexPageContent;
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>

        <div className={styles.contentContainer}>
          <div className={styles.mainContainer}>
            <div className={styles.indexMsg}>
              <div className={styles.borderContainer}>
                {/*我的请求加我的事件总览*/}
                <div className={styles.headerWords}>{L.headerWords_OVERVIEW}</div>
                <Total requestHistogramData={modelState.requestHistogramData}
                       eventHistogramData={modelState.eventHistogramData}/>
              </div>
            </div>
            <div className={styles.noIndexMsg}>
              <div className={styles.firstContainer}>
                <div className={styles.secondContainer}>
                  {/*我的请求*/}
                  <div className={styles.borderContainer}>
                    <div className={styles.headerWords}>{L.headerWords_MY_REQUEST}</div>
                    <RequestHistogram
                      dispatch={this.props.dispatch}
                      data={modelState.requestHistogramData}
                    />
                  </div>
                </div>
                <div className={styles.secondContainerTwo}>
                  <div className={styles.borderContainer}>
                    {/*请求记录*/}
                    <div className={styles.headerWords}>{L.headerWords_REQUEST_RECORDS}
                      <Link to="/QueryRequest" activeStyle={{textDecoration: 'none'}}>
                        <div className={styles.showAll}>{L.showAll}</div>
                      </Link>
                    </div>
                    <div style={{
                      overflow: (document.body.clientWidth <= 768) ? 'scroll' : '',
                      width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
                    }}>
                      <RequestRecordTable dispatch={this.props.dispatch}
                                          requestRecordData={modelState.requestRecordData}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.firstContainer}>
                <div className={styles.secondContainer}>
                  <div className={styles.borderContainer}>
                    {/*我的事件*/}
                    <div className={styles.headerWords}>{L.headerWords_MY_INCIDENT}</div>
                    <EventHistogram dispatch={this.props.dispatch}
                                    data={modelState.eventHistogramData}/>
                  </div>
                </div>
                <div className={styles.secondContainerTwo}>
                  <div className={styles.borderContainer}>
                    {/*事件记录*/}
                    <div className={styles.headerWords}>{L.headerWords_INCIDENT_RECORDS}
                      <Link to="/QueryEvent" activeStyle={{textDecoration: 'none'}}>
                        <div className={styles.showAll}>{L.showAll}</div>
                      </Link>
                    </div>
                    <div style={{
                      overflow: (document.body.clientWidth <= 768) ? 'scroll' : '',
                      width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
                    }}>
                      <EventRecordTable dispatch={this.props.dispatch}
                                        eventRecordData={modelState.eventRecordData}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.inIndexMsg}>
              <div className={styles.borderContainer}>
                {/*公告*/}
                <Announcement
                  dispatch={this.props.dispatch}
                  data={modelState.announcementData}
                  totalProperty={modelState.totalProperty}
                  loading={this.props.loading}
                  announcementDetailsData={modelState.announcementDetailsData}
                />
              </div>
            </div>
            <div className={styles.enIndexMsg}>
              <div className={styles.borderContainer}>
                {/*系统通知+邮件+短信*/}
                <SystemInforms dispatch={this.props.dispatch}
                               data={modelState.systemInformsData}/>
              </div>
            </div>
            <div className={styles.enIndexMsgTwo}>
              <div className={styles.borderContainer}>
                {/*联系我们*/}
                <div className={styles.headerWords}>{L.headerWords_CONTACT_US}</div>
                <ContactUs/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(
  ({modelIndexPageContent, loading}) =>
    ({modelIndexPageContent, loading}))
(IndexPageContent);
