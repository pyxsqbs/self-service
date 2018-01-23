import React from 'react';
import styles from './UpdateUserPwdForm.css';
import {Form, Input, Button} from 'antd';
import language from '../utils/Languages/index';
import {getCookie} from '../utils/cookie';

const L = language.IndexPageHeader.UpdateUserPwdModal.UpdateUserPwdForm;
const FormItem = Form.Item;

class UpdateUserPwdForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initRequest = this.initRequest.bind(this);
    this.resetFields = this.resetFields.bind(this);
    this.state={
      confirmDirty: false,
    };
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('newPwd')) {
      callback(L.checkPassword);
    } else {
      callback();
    }
  };
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPwd'], { force: true });
    }
    callback();
  };

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

  initRequest(values) {
    this.props.dispatch({
      type: 'modelIndexPage/submitUpdateUserPwdData',
      payload: {...values},
    })
  }

  resetFields = () => {
    this.props.form.resetFields();
  };

  render() {
    const data = this.props.userMsg.data;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 6 : 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: (getCookie('language') !== 'english') ? 18 : 16},
      },
      colon: false,
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 18,
          offset: 3,
        },
        sm: {
          span: 18,
          offset: 3,
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
            initialValue: data.userName,
          })(
            <Input/>
          )}
        </FormItem><FormItem
        label={<span className={styles.label}>{L.originPwd_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('originPwd', {
          rules: [{required: true, message: L.originPwd_message, whitespace: true}],
        })(
          <Input type="password"/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.newPwd_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('newPwd', {
          rules: [
            {
              required: true,
              message: L.newPwd_message,
              whitespace: true,
            }, {
              validator: this.checkConfirm,
            }
          ],
        })(
          <Input type="password"/>
        )}
      </FormItem><FormItem
        label={<span className={styles.label}>{L.confirmPwd_label}</span>}
        hasFeedback
        {...formItemLayout}
        className={styles.formItem}
      >
        {getFieldDecorator('confirmPwd', {
          rules: [{
            required: true,
            message: L.confirmPwd_message,
            whitespace: true
          }, {
            validator: this.checkPassword,
          },],
        })(
          <Input type="password"/>
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
          <Button type="default" className={styles.button2} onClick={this.resetFields}>{L.button2}</Button>
        </FormItem>
        </div>
      </Form>
    );
  }
}

const WrappedUpdateUserPwdForm = Form.create()(UpdateUserPwdForm);

export default WrappedUpdateUserPwdForm;
