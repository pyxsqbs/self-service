import React from 'react';
import {connect} from 'dva';
import styles from './NewEvent.css';
import NewEventForm from '../components/NewEventForm';
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.NewEvent;
class NewEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(preProps){
    // console.log(preProps.loading,this.props.loading)
  }

  render() {
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>
        <div className={styles.newEventContainer}>
          <div className={styles.newEventContent}>
            <div className={styles.title}>{L.title}</div>
            <NewEventForm
              dispatch={this.props.dispatch}
              userMsg={this.props.modelNewEvent.userMsg}
              departmentName={this.props.modelNewEvent.departmentName}
              belongProject={this.props.modelNewEvent.belongProject}
              eventProperty={this.props.modelNewEvent.eventProperty}
              classification={this.props.modelNewEvent.classification}
              enterprise={this.props.modelNewEvent.enterprise}
              loading={this.props.loading.global}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({modelNewEvent, loading}) => ({modelNewEvent, loading}))(NewEvent);
