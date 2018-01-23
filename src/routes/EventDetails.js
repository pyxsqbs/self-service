import React from 'react';
import {connect} from 'dva';
import {Link, hashHistory} from 'dva/router'
import styles from './EventDetails.css';
import {Menu, Tabs, Select, Icon} from 'antd';
import SolutionAttachmentTable from '../components/SolutionAttachmentTable';
import EventAttachmentTable from '../components/EventAttachmentTable';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.EventDetails;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleTabsChange = this.handleTabsChange.bind(this);
    this.handleAssociatedOrderChange = this.handleAssociatedOrderChange.bind(this);
  }

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
      type: 'modelEventDetails/getContentHeaderMsgData',
      payload: this.props.params.id,
    });
    this.props.dispatch({
      type: 'modelEventDetails/getSolutionData',
      payload: this.props.params.id,
    });
    // this.props.dispatch({
    //   type: 'modelEventDetails/getAssociatedOrderData',
    //   payload: null,
    // })
  }

  render() {
    const modelState = this.props.modelEventDetails;
    // console.log(modelState);
    const buttonStyle = {
      margin: '3px',
    };
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">打印预览</Menu.Item>
        <Menu.Item key="2">导出处理过程</Menu.Item>
        <Menu.Item key="3">流程信息</Menu.Item>
        <Menu.Item key="4">处理日志</Menu.Item>
        <Menu.Item key="5">存为模板</Menu.Item>
        <Menu.Item key="6">生成知识</Menu.Item>
      </Menu>
    );
    const data = modelState.contentHeaderData.data;
    const data2 = modelState.solutionData.data;
    const data3 = modelState.associatedOrderData;
    const data4 = modelState.solutionAttachmentData;
    const data5 = modelState.eventAttachmentData;
    const titleButtonStyle = {
      padding: '0 7px',
      margin: '4px 7px',
      marginRight: 0,
    };
    const contentHeaderMsg = [{
      label: L.contentHeaderMsg_WORK_ORDER_NUMBER,
      value: (data) ? data.incNo : '',
    }, {
      label: L.contentHeaderMsg_REQUESTER,
      value: (data) ? data.requesterName : '',
    }, {
      label: L.contentHeaderMsg_CREATE_TIME,
      value: (data) ? data.date : '',
    }, {
      label: L.contentHeaderMsg_CURRENT_PROCESSOR,
      value: (data) ? data.flowMangerUserrealname : '',
    }, {
      label: L.contentHeaderMsg_STATE,
      value: (data) ? data.status : '',
    },];

    const tabPane = [{
      title: L.tabPane_title_DETAILED_INFORMATION,
      content: [{
        label: L.tabPane_content_CAPTION,
        value: (data) ? data.incTopic : '',
        width: '100%',
      }, {
        label: L.tabPane_content_DETAILS,
        value: (data) ? data.incContent : '',
        width: '100%',
      }, {
        label: L.tabPane_content_ENTERPRISE_NAME,
        value: (data) ? data.geogName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_WAIT_CODE,
        value: (data) ? data.pendingCode : '',
        width: '50%',
      }, {
        label: L.tabPane_content_CLASSIFICATION,
        value: (data) ? data.suentry : '',
        width: '50%',
      }, {
        label: L.tabPane_content_EVENT_SOURCE,
        value: (data) ? data.incOriginName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_EVENT_PROPERTY,
        value: (data) ? data.incTypeName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_PRIORITY_LEVEL,
        value: (data) ? data.incPriLevelName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_EMERGENCY_DEGREE,
        value: (data) ? data.effectDegreeName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_INFLUENCE_DEGREE,
        value: (data) ? data.effectRangeName : '',
        width: '50%',
      }, {
        label: L.tabPane_content_WHETHER_TO_VIOLATE_THE_SLA,
        value: (data) ? data.incIsbreaksla : '',
        width: '50%',
      }, {
        label: L.tabPane_content_ACCEPT_GROUP,
        value: (data) ? data.dealGroupName_details : '',
        width: '50%',
      }, {
        label: L.tabPane_content_TARGET_TIME,
        value: (data) ? data.targetsolvetime : '',
        width: '50%',
      }, {
        label: L.tabPane_content_CLOSE_CODE,
        value: (data) ? data.incCloseCode : '',
        width: '50%',
      }, {
        label: L.tabPane_content_SATISFACTION_DEGREE,
        value: (data) ? ((data.incSatisfaction === '') ? L.tabPane_content_NO_EVALUATION : data.incSatisfaction ) : '',
        width: '50%',
      }, {
        label: L.tabPane_content_PROJECT,
        value: (data) ? ((data.projectName) ? data.projectName : '') : '',
        width: '50%',
      },],
    }, {
      title: L.tabPane_title_SOLUTIONS,
      titleButton: [
        // <Button type="default" style={titleButtonStyle} key="1" disabled>
        //  <Icon type="edit" style={{fontSize: 18}}/>
        //</Button>,
      ],
      content: [{
        label: L.tabPane_content_CAPTION,
        value: (data2) ? data2.solutiontitle : '',
        width: '100%',
      }, {
        label: L.tabPane_content_DESCRIPTION,
        value: (data2) ? data2.solution : '',
        width: '100%',
      }, {
        label: L.tabPane_content_CAUSE_CODE,
        value: (data2) ? data2.incCauseName : '',
        width: '100%',
      },],
      table: [
        <SolutionAttachmentTable
          key="1"
          id={this.props.params.id}
          dispatch={this.props.dispatch}
          data={data4}
        />,
      ]
    }, {
      title: L.tabPane_title_ATTACHMENT,
      table: [
        <EventAttachmentTable
          key="1"
          id={this.props.params.id}
          dispatch={this.props.dispatch}
          data={data5}
        />,
      ]
    },];
    // }, {
    //   title: '请求人信息',
    //   disabled: true,
    //   content: [{
    //     label: '用户名',
    //     value: (data) ? data.reqUsername : '',
    //     width: '50%',
    //   }, {
    //     label: '用户编号',
    //     value: (data) ? data.reqNo : '',
    //     width: '50%',
    //   }, {
    //     label: '姓名（中）',
    //     value: (data) ? data.req_Username : '',
    //     width: '50%',
    //   }, {
    //     label: '性别',
    //     value: (data) ? data.reqSex : '',
    //     width: '50%',
    //   }, {
    //     label: '移动电话',
    //     value: (data) ? data.reqMobile : '',
    //     width: '50%',
    //   }, {
    //     label: '办公电话',
    //     value: (data) ? data.reqPhone : '',
    //     width: '50%',
    //   }, {
    //     label: '邮件',
    //     value: (data) ? data.reqEmail : '',
    //     width: '50%',
    //   }, {
    //     label: '部门名称',
    //     value: (data) ? data.reqDeptName : '',
    //     width: '50%',
    //   }, {
    //     label: '其他联系方式',
    //     value: (data) ? data.reqOtherConn : '',
    //     width: '50%',
    //   },],
    // }, {
    //   title: '关联CI',
    //   disabled: true,
    //   titleButton: [
    //     <Button type="default" style={titleButtonStyle} key="1">
    //       <Icon type="search" style={{fontSize: 18}}/>
    //     </Button>,
    //     <Button type="default" style={titleButtonStyle} key="2">
    //       <Icon type="reload" style={{fontSize: 18}}/>
    //     </Button>,
    //   ],
    //   table: [],
    // }, {
    //   title: '关联任务',
    //   disabled: true,
    //   titleButton: [
    //     <Button type="default" style={titleButtonStyle} key="1">
    //       <Icon type="plus" style={{fontSize: 18}}/>
    //     </Button>,
    //     <Button type="default" style={titleButtonStyle} key="2">
    //       <Icon type="reload" style={{fontSize: 18}}/>
    //     </Button>,
    //   ],
    //   content: [],
    // }, {
    //   title: '重复事件',
    //   disabled: true,
    //   titleButton: [
    //     <Button type="default" style={titleButtonStyle} key="1">
    //       <Icon type="link" style={{fontSize: 18}}/>
    //     </Button>,
    //     <Button type="default" style={titleButtonStyle} key="2">
    //       <Icon type="reload" style={{fontSize: 18}}/>
    //     </Button>,
    //   ],
    //   content: [],
    // }, {
    //   title: '关联工单',
    //   disabled: true,
    //   titleButton: [
    //     <Select placeholder="请选择" style={{...titleButtonStyle, width: 120}} key="1"
    //             onChange={this.handleAssociatedOrderChange}>
    //       {(data3.length === 0) ? null : data3.map(x =>
    //         <Option key={x.value} value={x.value.toString()}>{x.text}</Option>
    //       )}
    //     </Select>,
    //     <Button type="default" style={titleButtonStyle} key="2">
    //       <Icon type="search" style={{fontSize: 18}}/>
    //     </Button>,
    //     <Button type="default" style={titleButtonStyle} key="3">
    //       <Icon type="plus" style={{fontSize: 18}}/>
    //     </Button>,
    //     <Button type="default" style={titleButtonStyle} key="4">
    //       <Icon type="reload" style={{fontSize: 18}}/>
    //     </Button>,
    //   ],
    //   content: [],
    // }, {
    //   title: '附件',
    //   disabled: true,
    //   titleButton: [
    //     <Button type="default" style={titleButtonStyle} key="1">
    //       <Icon type="download" style={{fontSize: 18}}/>
    //     </Button>,
    //   ],
    //   content: [],
    // },];
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>
        <div className={styles.eventDetailsContainer}>
          <div className={styles.eventDetailsHeader}>
            <div className={styles.headerOptionsContainer}>
              <div className={styles.title}>
                {(modelState.contentHeaderData.data) ? modelState.contentHeaderData.data.incTopic : ''}
                <Link onClick={()=>(history.back())} activeStyle={{textDecoration: 'none'}} className={styles.titleGoBack}>
                  <Icon type="arrow-left" style={{fontSize: 22}}/>{L.titleGoBack}
                </Link>
              </div>
              {/*<div className={styles.headerOptions}*/}
              {/*style={{*/}
              {/*width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',*/}
              {/*marginLeft: (document.body.clientWidth <= 768) ? -20 : 0,*/}
              {/*padding: (document.body.clientWidth <= 768) ? '10px 15px' : 0,*/}
              {/*}}*/}
              {/*>*/}
              {/*<div className={styles.headerLeft}>*/}
              {/*<Tooltip placement="bottom" title="电话录音" arrowPointAtCenter>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*<Icon type="phone" style={{fontSize: 18}}/>*/}
              {/*</Button>*/}
              {/*</Tooltip>*/}
              {/*<Tooltip placement="bottom" title="工单内容修改" arrowPointAtCenter>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*修改<Icon type="edit"/>*/}
              {/*</Button>*/}
              {/*</Tooltip>*/}
              {/*<Dropdown overlay={menu} trigger={['click']}>*/}
              {/*<Button style={buttonStyle} disabled>*/}
              {/*动作 <Icon type="down"/>*/}
              {/*</Button>*/}
              {/*</Dropdown>*/}
              {/*</div>*/}
              {/*<div className={styles.headerRight}>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*转派*/}
              {/*</Button>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*受理工单*/}
              {/*</Button>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*申请重派*/}
              {/*</Button>*/}
              {/*<Button type="default" style={buttonStyle} disabled>*/}
              {/*撤销*/}
              {/*</Button>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
          <div className={styles.eventDetailsContentContainer}
               style={{
                 width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
               }}
          >
            <div className={styles.eventDetailsContent}>
              <div className={styles.contentHeaderMsg}>
                {contentHeaderMsg.map(x => <div className={styles.contentHeaderMsgItem} key={x.label}>
                  {<span>{x.label}：<span className={styles.contentHeaderMsgItemValue}>{x.value}</span></span>}
                </div>)}
              </div>
              <div className={styles.contentTabs}>
                <Tabs defaultActiveKey={tabPane[0].title}
                      onChange={this.handleTabsChange}
                      tabPosition={(document.body.clientWidth <= 768) ? "top" : "left"}
                      style={{height: (document.body.clientWidth <= 768) ? "auto" : 480, width: '100%'}}
                      tabBarStyle={{padding: '25px 0', fontWeight: 'bold'}}
                >
                  {tabPane.map(x =>
                    <TabPane tab={x.title} key={x.title}
                             style={{
                               height: (document.body.clientWidth <= 768) ? "auto" : 480,
                               fontSize: 12,
                               fontWeight: 'bold',
                             }}
                             disabled={(x.disabled) ? x.disabled : false}
                    >
                      <div className={styles.tabItemTitle}>{x.title}
                        {(x.titleButton) ? x.titleButton.map(xs => xs) : ''}
                      </div>
                      <div className={styles.tabItemContent}>
                        {(x.content && Array.isArray(x.content)) ? x.content.map(xs => <div
                            className={styles.tabItemContentItem}
                            style={{width: xs.width}}
                            key={xs.label}
                          >
                            <label htmlFor="value" className={styles.tabItemContentItemLabel}>{xs.label}： </label>
                            <span name="value" className={styles.tabItemContentItemValue}>{xs.value}</span>
                          </div>
                        ) : ''}
                        {(x.table && Array.isArray(x.table)) ? x.table.map(xs => xs) : ''}
                      </div>
                    </TabPane>
                  )}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({modelEventDetails, loading}) => ({modelEventDetails, loading}))(EventDetails);
