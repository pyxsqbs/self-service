import React from 'react';
import styles from './LoginForm.css';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import {Link} from 'dva/router';
import {getCookie, setCookie, delCookie} from '../utils/cookie';
import language from '../utils/Languages/index';

const L = language.IndexPageHeader.LoginForm;
const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initRequest = this.initRequest.bind(this);
    this.rememberPwd = this.rememberPwd.bind(this);
    this.getPwdRem = this.getPwdRem.bind(this);
    this.initPwdRem = this.initPwdRem.bind(this);
    this.state = {
      currentUser: (getCookie('currentUser')) ? getCookie('currentUser') : '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.initRequest(values);
        this.rememberPwd(values);
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    if (getCookie('success')) {
      this.props.handleCancel();
    }
    if (nextProps.username !== this.props.username) {
      const value = nextProps.username.value;
      this.getPwdRem(value);
    }
  }

  getPwdRem(value) {
    if (getCookie('remember') !== '') {
      let rememberObj = JSON.parse(getCookie('remember'));
      let rememberVal = (value) ? (
        (rememberObj[value]) ? rememberObj[value] : ''
      ) : '';
      if (rememberVal) {
        let password = rememberVal;
        this.props.form.setFieldsValue({
          password: (password) ? password : '',
          remember: (rememberVal !== ''),
        });
      }
    }
  }

  initPwdRem(value) {
    if (getCookie('remember') !== '') {
      let rememberObj = JSON.parse(getCookie('remember'));
      let rememberVal = (value) ? (
        (rememberObj[value]) ? rememberObj[value] : ''
      ) : '';
      if (rememberVal) {
        let password = rememberVal;
        return {
          password: (password) ? password : '',
          remember: (rememberVal !== ''),
        }
      } else {
        return {
          password: '',
          remember: false,
        };
      }
    }
    return {
      password: '',
      remember: false,
    };
  }

  rememberPwd(values) {
    const {username, password, remember} = values;
    let rememberVal = (getCookie('remember')) ? JSON.parse(getCookie('remember')) : {};
    let rememberObj = {};
    rememberObj[username] = password;
    if (remember) {
      Object.assign(rememberVal, rememberObj);
      setCookie('remember', JSON.stringify(rememberVal), 7);
    } else {
      delete rememberVal[username];
      setCookie('remember', JSON.stringify(rememberVal), 7);
    }
  }

  initRequest(values) {
    this.props.dispatch({
      type: 'modelIndexPage/submitLoginData',
      payload: values,
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width: '100%', height: '100%'}}>
        <FormItem>
          <div className={styles.formHeader}>{L.formHeader}</div>
          <div className={styles.formDivider}/>
        </FormItem>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{required: true, message: L.username_message}],
            initialValue: this.state.currentUser,
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder={L.username_placeholder}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: L.password_message}],
            initialValue: this.initPwdRem(this.state.currentUser).password,
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                   placeholder={L.password_placeholder}/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: this.initPwdRem(this.state.currentUser).remember,
          })(
            <Checkbox>{L.remember}</Checkbox>
          )}
          {/*<Link to="/loginContent" activeStyle={{textDecoration: 'none'}} className="login-form-forgot">{L.login_form_forgot}</Link>*/}
          {/*<label className={styles.goToRegistration}>{L.goToRegistration}*/}
          {/*/!*<Link to="/loginContent" activeStyle={{textDecoration: 'none'}}>{L.goToRegistration_Link}</Link>*!/*/}
          {/*</label><br/>*/}
          <Button type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{width: '100%', marginTop: '10px'}}
                  loading={this.props.loading}
          >{L.login_form_button}</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
})(LoginForm);

export default WrappedLoginForm;
