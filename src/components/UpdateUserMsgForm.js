import React from 'react';
import styles from './UpdateUserMsgForm.css';
import {Form, Input, Button} from 'antd';
import language from '../utils/Languages/index';
import {getCookie} from '../utils/cookie';

const L = language.IndexPageHeader.UpdateUserMsgModal.UpdateUserMsgForm;
const FormItem = Form.Item;

class UpdateUserMsgForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initRequest = this.initRequest.bind(this);
    this.handleUpdatePwdClick = this.handleUpdatePwdClick.bind(this);
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelIndexPage/loadUserMessage',
      payload: null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.initRequest(values);
      }
    });
  };

  handleUpdatePwdClick = () => {
    this.props.displayModal();
    this.props.handleUpdateUserPwd();
  };

  initRequest(values) {
    this.props.dispatch({
      type: 'modelIndexPage/submitUpdateUserMsgData',
      payload: {...values, id: this.props.userMsg.data.id},
    })
  }

  render() {
    const data = this.props.userMsg.data;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 4 : 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 20 : 18},
      },
      colon: false,
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 20,
          offset: 2,
        },
        sm: {
          span: 20,
          offset: 2,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit} style={{width: '100%', height: '100%'}}>
        <FormItem
          label={<span className={styles.label}>{L.username_label}</span>}
          hasFeedback
          {...formItemLayout}
          className={styles.formItem}
        >
          {getFieldDecorator('username', {
            rules: [{required: true, message: L.username_message, whitespace: true}],
            initialValue: data.realName,
          })(
            <Input/>
          )}
        </FormItem><FormItem
        label={<span className={styles.label}>{L.sex_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('sex', {
          rules: [{whitespace: true}],
          initialValue: (data.sex === 0) ? L.sex_man : (data.sex === 1 ? L.sex_woman : ''),
        })(
          <Input/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.officePhone_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('officePhone', {
          rules: [{whitespace: true}],
          initialValue: data.officePhone,
        })(
          <Input/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.telephone_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('telephone', {
          rules: [{required: true, message: L.telephone_message, whitespace: true}],
          initialValue: data.mobilePhone,
        })(
          <Input/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.email_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('email', {
          rules: [{required: true, message: L.email_message, whitespace: true}],
          initialValue: data.email,
        })(
          <Input/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.departmentName_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('departmentName', {
          rules: [{whitespace: true}],
          initialValue: data.orgName,
        })(
          <Input/>
        )}
      </FormItem>
        <div className={styles.buttonContainer}>
          <FormItem
            {...tailFormItemLayout}
            className={styles.formItemTwo}
          >
            <Button type="primary" htmlType="submit" className={styles.button}>{L.button}</Button>
          </FormItem><FormItem
          {...tailFormItemLayout}
          className={styles.formItemTwo}
        >
          <Button type="default" className={styles.button2} onClick={this.handleUpdatePwdClick}>{L.button2}</Button>
        </FormItem>
        </div>
      </Form>
    );
  }
}

const WrappedUpdateUserMsgForm = Form.create()(UpdateUserMsgForm);

export default WrappedUpdateUserMsgForm;
