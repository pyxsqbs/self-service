import React from 'react';
import {connect} from 'dva';
import styles from './NewRequest.css';
import NewRequestForm from '../components/NewRequestForm';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.NewRequest;
class NewRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>

        <div className={styles.newRequestContainer}>
          <div className={styles.newRequestContent}>
            <div className={styles.title}>{L.title}</div>
            <NewRequestForm
              dispatch={this.props.dispatch}
              userMsg={this.props.modelNewRequest.userMsg}
              departmentName={this.props.modelNewRequest.departmentName}
              classification={this.props.modelNewRequest.classification}
              loading={this.props.loading.global}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({modelNewRequest, loading}) => ({modelNewRequest, loading}))(NewRequest);
