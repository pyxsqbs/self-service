import React from 'react';
import styles from './QuizRobot.css';
import {Link, hashHistory} from 'dva/router';
import {getCookie} from '../utils/cookie';

class QuizRobot extends React.Component {
  constructor(props) {
    super(props);
    let route = window.location.hash.substr(1);
    let index = route.indexOf('?');
    route = route.substr(0, index);
    this.state = {
      route: route,
      changeTop: '68%',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (getCookie('success') !== '') {
      hashHistory.push('/');
    }
  }

  componentWillMount() {
    if (this.state.route.substr(1) === 'loginContent'
      || this.state.route.substr(1) === 'knowledgeSearch') {
      this.setState({
        changeTop: '58%',
      })
    } else {
      this.setState({
        changeTop: '68%',
      })
    }
  }

  componentDidMount(preState) {
    window.addEventListener('hashchange', () => {
      let route = window.location.hash.substr(1);
      let index = route.indexOf('?');
      route = route.substr(0, index);
      if (preState !== this.state) {
        this.setState({
          route: route,
        });
        if (this.state.route.substr(1) === 'loginContent'
          || this.state.route.substr(1) === 'knowledgeSearch') {
          this.setState({
            changeTop: '58%',
          })
        } else {
          this.setState({
            changeTop: '68%',
          })
        }
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange');
  }

  render() {
    const {changeTop} = this.state;
    return (
      <Link onClick={this.handleClick} activeStyle={{textDecoration: 'none'}}>
        <div className={styles.quizRobotContainer} style={{top: changeTop}}/>
      </Link>
    );
  }
}

export default QuizRobot;
