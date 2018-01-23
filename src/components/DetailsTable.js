import React from 'react';
import styles from './DetailsTable.css';
import {Tooltip} from 'antd';
import language from '../utils/Languages/index';

const L = language.common.RecordTable;
class DetailsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      data: [],
      columnsWidth: [],
      display: 'none',
      borderBottom: 'white 1px solid',
      paddingBottom: '4px',
    };
    this.todoAlignment = this.todoAlignment.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDoubleClick(key) {
    if (this.props.handleDoubleClick) {
      this.props.handleDoubleClick(key);
    }
  }

  handleClick(key) {
    if (this.props.handleDoubleClick && document.body.clientWidth <= 768) {
      this.props.handleDoubleClick(key);
    }
  }

  componentWillMount() {
    this.setState({
      columns: [...this.props.columns],
      data: [...this.props.data.slice(0, (this.props.limit) ? this.props.limit : 5)],
    });
  }

  componentDidMount() {
    if (this.state.data.length === 0) {
      this.setState({
        display: 'flex',
        borderBottom: '#eeeeee 1px solid',
        paddingBottom: '10px',
      })
    } else {
      this.setState({
        display: 'none',
        borderBottom: 'white 1px solid',
        paddingBottom: '4px',
      })
    }
    if (document.getElementById(this.props.tid + 'thead').firstChild
      && document.getElementById(this.props.tid + 'tbody').firstChild) {
      this.todoAlignment();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      columns: [...nextProps.columns],
      data: [...nextProps.data.slice(0, (this.props.limit) ? this.props.limit : 5)],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data || prevProps !== this.props) {
      if (this.state.data.length === 0) {
        this.setState({
          display: 'flex',
          borderBottom: '#eeeeee 1px solid',
          paddingBottom: '10px',
        })
      } else {
        this.setState({
          display: 'none',
          borderBottom: 'white 1px solid',
          paddingBottom: '4px',
        })
      }
      if (document.getElementById(this.props.tid + 'thead').firstChild
        && document.getElementById(this.props.tid + 'tbody').firstChild) {
        this.todoAlignment();
      }
    }
  }

  todoAlignment() {
    const columnsLength = this.state.columns.length;
    const dataLength = this.state.data.length;
    let maxItemLength = [];
    let tran;

    for (let i = 0; i < columnsLength; i++) {
      maxItemLength[i] = document
        .getElementById(this.props.tid + 'thead')
        .firstChild.childNodes[i].clientWidth;
    }

    for (let i = 0; i < dataLength; i++) {
      for (let j = 0; j < columnsLength; j++) {
        tran = Math.min(200, document
          .getElementById(this.props.tid + 'tbody')
          .childNodes[i].firstChild.childNodes[j].clientWidth);
        tran = Math.max(tran, maxItemLength[j]);
        maxItemLength[j] = tran;
      }
    }

    this.setState({
      columnsWidth: [...maxItemLength],
    });
  }

  render() {
    const theadItems = this.state.columns.map((x, index) =>
      <div className={styles.theadTh} key={x.key}
           style={{width: this.state.columnsWidth[index]}}>{x.title}</div>
    );

    const tbodyItems = this.state.data.map(x =>
      <div className={styles.tbodyTrContainer} key={x.key}>
        <div
          className={styles.tbodyTr}
          onDoubleClick={() => (this.handleDoubleClick(x.key))}
          onClick={() => (this.handleClick(x.key))}
        >
          {this.state.columns.map((y, index) =>
            <Tooltip title={x[y.dataIndex]} key={x.key + '-' + y.dataIndex}>
              <div className={styles.tbodyTh}
                   style={{
                     width: (this.state.columnsWidth[index]) ? this.state.columnsWidth[index] + 1 : undefined,
                     color: (y.styles) ? y.styles.color : '',
                   }}
              >
                {x[y.dataIndex]}
              </div>
            </Tooltip>
          )}
        </div>
      </div>
    );

    return (
      <div className={styles.detailsTableContainer}>
        <div className={styles.tableCanvas}>
          <div className={styles.theadStyle} style={{borderBottom: this.state.borderBottom}}
               id={this.props.tid + 'thead'}>
            <div className={styles.theadTr} style={{paddingBottom: this.state.paddingBottom}}>
              {theadItems}
            </div>
          </div>
          <div className={styles.tbodyStyle} id={this.props.tid + 'tbody'}>{tbodyItems}</div>
          <div
            style={{
              display: this.state.display,
              paddingTop: (this.props.paddingTop) ? this.props.paddingTop : '15.5%',
            }}
            className={styles.tableNodata}
          >
            <div className={styles.icInfo}/>
            {L.icInfo}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsTable;
