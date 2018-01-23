import React from 'react';
import styles from './NewEventForm.css';
import {Link} from 'dva/router';
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Upload,
  Icon,
  message,
  Cascader,
  notification,
  LocaleProvider
} from 'antd';
import RecordTable from './RecordTable';
import {toOptions} from '../utils/toOptions';
import api from '../utils/api';
import DomainPort from '../utils/DomainPort';
import language from '../utils/Languages/index';
import enUS from 'antd/lib/locale-provider/en_US';
import zhTW from 'antd/lib/locale-provider/zh_TW';
import {getCookie} from '../utils/cookie';

const L = language.NewEvent.NewEventForm;
const FormItem = Form.Item;
const {TextArea} = Input;
const Option = Select.Option;

class NewEventForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.normFile = this.normFile.bind(this);
    this.uploadData = this.uploadData.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.handleChangeUpload = this.handleChangeUpload.bind(this);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelNewEvent/loadUserMessage',
      payload: null,
    });
    this.props.dispatch({
      type: 'modelNewEvent/loadDepartmentName',
      payload: null,
    });
    this.props.dispatch({
      type: 'modelNewEvent/loadBelongProject',
      payload: null,
    });
    this.props.dispatch({
      type: 'modelNewEvent/loadEventProperty',
      payload: null,
    });
    this.props.dispatch({
      type: 'modelNewEvent/loadClassification',
      payload: null,
    });
    this.props.dispatch({
      type: 'modelNewEvent/loadEnterprise',
      payload: null,
    });
  }

  componentWillUnmount() {
    for (let i = 0; i < this.state.data.length; i++) {
      // this.removeFile(this.state.data[i])
    }
    this.setState({
      data: [],
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        values.enterprise = this.props.enterprise[0].id;
        if (values.departmentName === this.props.departmentName[0].text) {
          values.departmentName = this.props.departmentName[0].id;
        }
        this.props.dispatch({
          type: 'modelNewEvent/submitWorkOrder',
          payload: values,
        });
      }
    });
  }

  handleChangeUpload(info) {
    if (info.fileList) {
      let isArray = true;
      for (let i = 0; i < info.fileList.length; i++) {
        if (!Array.isArray(info.fileList[i].response)) {
          isArray = false;
          break;
        }
      }
      if (isArray) {
        this.setState({
          data: info.fileList,
        });
      }
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} ${L.done}`);
    } else if (info.file.status === 'error') {
      const notificationConfig = function (msg, type, des) {
        notification[type]({
          message: msg,
          placement: 'topLeft',
          description: des
        });
      };
      let msg = info.file.response.message;
      if (msg.indexOf('size of') !== -1 && msg.indexOf('bytes') !== -1) {
        let numberString = msg.slice(msg.indexOf('size of') + 8, msg.indexOf('bytes') - 1);
        let number = parseFloat(numberString) / 1024 / 1024;
        msg = `${info.file.name} ${L.msg}!`;
        notificationConfig(msg, 'error', `${L.msg_error} ${number.toFixed(2)} MB`);
      } else {
        notificationConfig(`${info.file.name} ${L.msg}!`, 'error', msg);
      }
    }
  }

  removeFile(file) {
    if (Array.isArray(file.response)) {
      this.props.dispatch({
        type: 'modelNewEvent/removeFile',
        payload: file.response[0].id,
      });
    }
  }

  uploadData(file) {
    return {
      size: file.size,
      lastModifiedDate: file.lastModifiedDate,
      type: file.type,
      name: file.name,
      id: file.uid,
      // objType: 20,
    };
  }

  normFile(e) {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 2 : 3},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 20 : 18},
      },
      colon: false,
      style: {
        marginBottom: 10,
      }
    };
    const formItemLayoutChildren = {
      labelCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 4 : 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 20 : 18},
      },
      colon: false,
      style: {
        marginBottom: 10,
      }
    };
    const formItemLayoutChildrenTwo = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 10},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
      colon: false,
      style: {
        marginBottom: 10,
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    const columns = [{
      title: L.columns_FILRNAME,
      dataIndex: 'fileName',
      key: 'fileName',
    }, {
      title: L.columns_SIZE,
      dataIndex: 'size',
      key: 'size',
    }, {
      title: L.columns_UPLOADMAN,
      dataIndex: 'uploadMan',
      key: 'uploadMan',
    }, {
      title: L.columns_UPLOADTIME,
      dataIndex: 'uploadTime',
      key: 'uploadTime',
    }, {
      title: L.columns_ATTACHMENTTYPE,
      dataIndex: 'attachmentType',
      key: 'attachmentType',
    },
      //   {
      //   title: L.columns_OPERATION,
      //   dataIndex: 'operation',
      //   key: 'operation',
      // }
    ];

    const data = this.state.data.map(x => {
      return {
        key: x.response[0].id,
        fileName: x.name,
        size: (x.size / 1024 / 1024).toFixed(2) + ' MB',
        uploadMan: x.response[0].createUserName,
        uploadTime: x.response[0].createdate,
        attachmentType: x.type,
        operation: <Link activeStyle={{textDecoration: 'none'}} onClick={() => this.removeFile(x)}
        ><Icon type="close"/></Link>,
      }
    });

    const departmentNameOptions = (this.props.departmentName.length === 0) ? null : this.props.departmentName.map(x =>
      <Option key={x.id} value={x.id.toString()}>{x.text}</Option>
    );
    const belongProjectOptions = (this.props.belongProject.length === 0) ? null : this.props.belongProject.map(x =>
      <Option key={x.id} value={x.id.toString()}>{x.text}</Option>
    );
    const eventPropertyOptions = (this.props.eventProperty.length === 0) ? null : this.props.eventProperty.map(x =>
      <Option key={x.id} value={x.value.toString()}>{x.text}</Option>
    );
    let viewJson = function (array) {
      if (!array) {
        return;
      }
      let arrayN = [];
      for (let i = 0; i < array.length; i++) {
        if (!array[i].pid) {
          // console.log(array[i].pid);
          arrayN.push({
            value: array[i].value,
            label: array[i].label,
            children: [],
          });
        }
      }
      for (let i = 0; i < arrayN.length; i++) {
        for (let j = 0; j < array.length; j++) {
          if (arrayN[i].value === array[j].pid) {
            arrayN[i].children.push({
              value: array[j].value,
              label: array[j].label,
              children: [],
            });
          }
        }

      }
      for (let i = 0; i < arrayN.length; i++) {
        for (let j = 0; j < arrayN[i].children.length; j++) {
          for (let m = 0; m < array.length; m++) {
            if (array[m].pid === arrayN[i].children[j].value) {
              arrayN[i].children[j].children.push({
                value: array[m].value,
                label: array[m].label,
                children: [],
              });
            }
          }
        }

      }
      return arrayN;
    }
    let classificationOptions = viewJson(this.props.classification);
    toOptions(this.props.classification);

    return (
      <div className={styles.newEventFormContainer}>
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            label={<span className={styles.label}>{L.title_label}</span>}
            hasFeedback
            {...formItemLayout}
          >
            {getFieldDecorator('title', {
              rules: [{required: true, message: L.title_message, whitespace: true}],
              initialValue: L.title_initialValue1
              + ((this.props.userMsg.data.reqName) ? this.props.userMsg.data.reqName : '')
              + L.title_initialValue2,
            })(
              <Input/>
            )}
          </FormItem><FormItem
          label={<span className={styles.label}>{L.detail_label}</span>}
          hasFeedback
          {...formItemLayout}
        >
          {getFieldDecorator('detail', {
            rules: [{required: true, message: L.detail_message}],
          })(
            <TextArea autosize={{minRows: 2, maxRows: 6}}/>
          )}
        </FormItem>
          <div className={styles.formItemLayoutChildContainer}>
            <div className={styles.formItemLayoutChildren} style={{display: 'none'}}>
              <FormItem
                label={<span className={styles.label}>企业名称</span>}
                hasFeedback
                {...formItemLayoutChildren}
              >
                {getFieldDecorator('enterprise', {
                  rules: [{required: true, message: '请输入企业名称,不能为空'}],
                  initialValue: (this.props.enterprise.length === 0) ? null : this.props.enterprise[0].text,
                })(
                  <Input disabled={true}/>
                )}
              </FormItem><FormItem
              label={<span className={styles.label}>事情来源</span>}
              hasFeedback
              {...formItemLayoutChildren}
            >
              {getFieldDecorator('whatSource', {
                rules: [{required: true, message: '请输入事情来源,不能为空'}],
                initialValue: 'WEB',
              })(
                <Input disabled={true}/>
              )}
            </FormItem>
            </div>
            <div
              className={styles.formItemLayoutChildren}
              style={{
                width: (document.body.clientWidth <= 768) ? '' : (
                  (getCookie('language') !== 'english') ? '45.9%' : '47%')
              }}
            >
              <FormItem
                label={<span className={styles.label}>{L.classification_label}</span>}
                hasFeedback
                {...formItemLayoutChildren}
              >
                {getFieldDecorator('classification', {
                  rules: [{type: 'array', required: true, message: L.classification_message}],
                })(
                  <Cascader options={classificationOptions}
                            expandTrigger="hover"
                            changeOnSelect
                            showSearch
                            placeholder={L.classification_placeholder}
                            notFoundContent={L.classification_notFoundContent}
                  />
                )}
              </FormItem>
              <LocaleProvider locale={(getCookie('language') !== 'english') ? {} : enUS}>
                <FormItem
                  hasFeedback
                  {...formItemLayoutChildren}
                  label={<span className={styles.label}>{L.occurrenceTime_label}</span>}
                >
                  {getFieldDecorator('occurrenceTime', {
                    rules: [{type: 'object'}],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"
                                style={{width: '100%'}}
                                placeholder={L.occurrenceTime_placeholder}
                    />
                  )}
                </FormItem>
              </LocaleProvider>
              <FormItem
                label={<span className={styles.label}>{L.eventProperty_label}</span>}
                hasFeedback
                {...formItemLayoutChildren}
              >
                {getFieldDecorator('eventProperty', {
                  rules: [{}],
                })(
                  <Select
                    placeholder={L.eventProperty_placeholder}
                    notFoundContent={L.eventProperty_notFoundContent}
                  >
                    {eventPropertyOptions}
                  </Select>
                )}
              </FormItem>
            </div>
            <div
              className={styles.newEventTableContainer}
              style={{
                marginLeft: (document.body.clientWidth <= 768) ? '' : (
                  (getCookie('language') !== 'english') ? 0 : 41)
              }}
            >
              <FormItem
                style={{marginLeft: (document.body.clientWidth <= 768) ? 0 : 73.6, marginBottom: 0, marginTop: -1}}>
                {getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload action={DomainPort + api + "/systemFileInfoAction/upload"}
                          listType="text"
                          multiple={true}
                          data={this.uploadData}
                          onRemove={this.removeFile}
                          onChange={this.handleChangeUpload}
                    // showUploadList={{showPreviewIcon: true, showRemoveIcon: false}}
                  >
                    <Button style={{width: '100%', height: 32}}>
                      <Icon type="upload"/>&nbsp;&nbsp;{L.upload}
                    </Button>
                  </Upload>
                )}
              </FormItem>
              <div style={{
                overflow: (document.body.clientWidth <= 768) ? 'scroll' : '',
                width: (document.body.clientWidth <= 768) ? document.body.clientWidth - 20 : '100%',
              }}>
                <div className={styles.newEventTable}
                     style={{
                       width: (document.body.clientWidth <= 768) ? 480 : '100%',
                       marginLeft: (document.body.clientWidth <= 768) ? -20 : 20,
                       paddingLeft: (document.body.clientWidth <= 768) ? 0 : 40,
                     }}>
                  <RecordTable columns={columns} data={data} tid={'newEventTable'}/>
                </div>
              </div>
            </div>
            <div className={styles.formItemLayoutChildren} style={{display: 'none'}}>
              <FormItem
                label={<span className={styles.label}>紧急度</span>}
                hasFeedback
                {...formItemLayoutChildren}
              >
                {getFieldDecorator('emergencyDegree', {
                  rules: [{}],
                  initialValue: '中',
                })(
                  <Input disabled={true}/>
                )}
              </FormItem><FormItem
              label={<span className={styles.label}>影响度</span>}
              hasFeedback
              {...formItemLayoutChildren}
            >
              {getFieldDecorator('influenceDegree', {
                rules: [{}],
                initialValue: '低（单个）',
              })(
                <Input disabled={true}/>
              )}
            </FormItem><FormItem
              label={<span className={styles.label}>优先级</span>}
              hasFeedback
              {...formItemLayoutChildren}
            >
              {getFieldDecorator('priorityLevel', {
                rules: [{}],
                initialValue: '20',
              })(
                <Input disabled={true}/>
              )}
            </FormItem>
            </div>
          </div>
          <div className={styles.requestInformation} style={{display: 'none'}}>请求人信息</div>
          <div className={styles.formItemLayoutChildContainerTwo} style={{display: 'none'}}>
            <div className={styles.formItemLayoutChildrenTwo}>
              <FormItem
                label={<span className={styles.label}>用户编号</span>}
                hasFeedback
                {...formItemLayoutChildrenTwo}
              >
                {getFieldDecorator('userId', {
                  rules: [{}],
                  initialValue: this.props.userMsg.data.reqNo,
                })(
                  <Input disabled={true}/>
                )}
              </FormItem><FormItem
              label={<span className={styles.label}>用户名</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('username', {
                rules: [{}],
                initialValue: this.props.userMsg.data.reqUsername,
              })(
                <Input disabled={true}/>
              )}
            </FormItem><FormItem
              label={<span className={styles.label}>请求人姓名</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('requestName', {
                rules: [{}],
                initialValue: this.props.userMsg.data.reqName,
              })(
                <Input disabled={true}/>
              )}
            </FormItem><FormItem
              label={<span className={styles.label}>移动电话</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('telephone', {
                rules: [{}],
                initialValue: this.props.userMsg.data.reqMobile,
              })(
                <Input/>
              )}
            </FormItem>
            </div>
            <div className={styles.formItemLayoutChildrenTwo}>
              <FormItem
                label={<span className={styles.label}>部门名称</span>}
                hasFeedback
                {...formItemLayoutChildrenTwo}
              >
                {getFieldDecorator('departmentName', {
                  rules: [{}],
                  initialValue: (this.props.departmentName.length === 0) ? null : this.props.departmentName[0].text,
                })(
                  <Select>
                    {departmentNameOptions}
                  </Select>
                )}
              </FormItem><FormItem
              label={<span className={styles.label}>办公电话</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('officePhone', {
                rules: [{}],
              })(
                <Input/>
              )}
            </FormItem><FormItem
              label={<span className={styles.label}>邮件</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('email', {
                rules: [{}],
                initialValue: this.props.userMsg.data.reqEmail,
              })(
                <Input/>
              )}
            </FormItem><FormItem
              label={<span className={styles.label}>其他联系方式</span>}
              hasFeedback
              {...formItemLayoutChildrenTwo}
            >
              {getFieldDecorator('otherContact', {
                rules: [{}],
              })(
                <Input/>
              )}
            </FormItem>
            </div>
          </div>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className={styles.button}
                    loading={this.props.loading}>{L.button}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}


const WrappedNewEventForm = Form.create()(NewEventForm);

export default WrappedNewEventForm;
