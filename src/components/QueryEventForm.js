import React from 'react';
import styles from './QueryEventForm.css';
import {Form, Button, Input, Icon} from 'antd';
import language from '../utils/Languages/index';
import {getCookie, setCookie} from '../utils/cookie';

const L = language.QueryEvent.QueryEventForm;
const FormItem = Form.Item;

class QueryEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'modelQueryEvent/submitTimes',
          payload: values,
        });
        this.props.changeCount();
        setCookie('QEFKey', values.luceneKey);
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 11},
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
          span: 24,
          offset: 0,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <div
          className={styles.queryEventFormContainer}
          style={{
            width: (document.body.clientWidth <= 768) ? document.body.clientWidth : '100%',
            marginLeft: (document.body.clientWidth <= 768) ? -20 : 0,
            padding:(document.body.clientWidth <= 768) ? '10px 20px' : '0',
          }}
        >
          <FormItem
            hasFeedback
            {...formItemLayout}
            label={<span className={styles.label}>{L.luceneKey_label}</span>}
            className={styles.formItems}
          >
            {getFieldDecorator('luceneKey', {
              rules: [{whitespace: true}],
              initialValue: (getCookie('QEFKey')) ? getCookie('QEFKey') : '',
            })(
              <Input placeholder={L.luceneKey_placeholder}/>
            )}
          </FormItem>
          <div
            className={styles.buttonContainer}
          >
            <FormItem {...tailFormItemLayout} className={styles.formItemButton} style={{marginRight: 10}}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
                onClick={() => (this.props.changePageNumber(1))}
              >
                {L.button}<Icon type="search" style={{fontSize: 13, marginRight: -5}}/>
              </Button>
            </FormItem>
          </div>
        </div>
      </Form>
    );
  }
}

const WrappedNewEventForm = Form.create()(QueryEventForm);

export default WrappedNewEventForm;
