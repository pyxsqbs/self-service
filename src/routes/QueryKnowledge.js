import React from 'react';
import {connect} from 'dva';
import styles from './QueryKnowledge.css';
import {Menu, Button, Icon, Tooltip, Input} from 'antd';
import {hashHistory} from 'dva/router';
import QueryKnowledgeTable from '../components/QueryKnowledgeTable'
import language from '../utils/Languages/index';
import LoadingModal from '../components/LoadingModal';

const L = language.QueryKnowledge;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class QueryKnowledge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      value: '',
      count: 0,
      sort: '',
      pageNumber: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.changePageNumber = this.changePageNumber.bind(this);
  }

  changeCount() {
    if (this.state.count === 0) {
      this.setState({
        count: 1,
      })
    } else {
      this.setState({
        count: 0,
      })
    }
  }

  changePageNumber(pageNumber) {
    this.setState({
      pageNumber: pageNumber,
    })
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (e) => {
    hashHistory.push('/QueryKnowledge/' + JSON.stringify({
      value: (this.state.value !== '') ? this.state.value : '',
      sort: (e.key !== '') ? ((e.key !== 'all') ? e.key : '' ) : '',
    }));
    this.setState({
      sort: (e.key !== '') ? ((e.key !== 'all') ? e.key : '' ) : '',
    });
    this.changeCount();
  };

  handleSubmitClick() {
    hashHistory.push('/QueryKnowledge/' + JSON.stringify({
      value: (this.state.value !== '') ? this.state.value : '',
      sort: this.state.sort,
    }));
    this.changeCount();
    this.changePageNumber(1);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  componentWillMount() {
    const hash = location.hash;
    let hashJson = {};
    if (hash.indexOf('{') > -1) {
      hashJson = JSON.parse(hash.slice(hash.indexOf('{'), hash.indexOf('}') + 1));
    }
    this.setState({value: (hashJson.value) ? hashJson.value : ''});
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'modelQueryKnowledge/loadClassification',
      payload: null,
    });
  }

  render() {
    const hash = location.hash;
    let hashJson = {};
    if (hash.indexOf('{') > -1) {
      hashJson = JSON.parse(hash.slice(hash.indexOf('{'), hash.indexOf('}') + 1));
    }
    const modelState = this.props.modelQueryKnowledge;
    return (
      <div className={styles.bodyContainer}>
        <LoadingModal loading={this.props.loading.global}/>
        <div className={styles.queryKnowledgeContainer}>
          <div
            className={styles.menuContainer}
            style={{
              width: (document.body.clientWidth <= 768) ? '100%' : ((this.state.collapsed) ? 67 : 240),
              border: (document.body.clientWidth <= 768) ? 'solid 0' : '',
            }}
          >
            <div
              className={styles.titleContainer}
              style={{
                height: (this.state.collapsed) ? 'auto' : 68,
                flexDirection: (document.body.clientWidth <= 768)
                  ? 'row' : ((this.state.collapsed) ? 'column' : 'row'),
              }}
            >
              <div className={styles.title} style={{fontSize: (this.state.collapsed) ? '8pt' : '12pt'}}>{L.title}</div>
              <Button
                type="default"
                onClick={this.toggleCollapsed}
                style={{
                  margin: '10px 0',
                  border: 'none',
                  fontSize: 14,
                }}
              >
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}/>
              </Button>
            </div>
            <Menu
              onClick={this.handleClick}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              inlineCollapsed={this.state.collapsed}
              style={{
                display: (document.body.clientWidth <= 768) ? (this.state.collapsed ? 'none' : '') : '',
                color: '#54698d',
                border: 'none',
              }}
            >
              <Menu.Item key={'all'}>
                <span>
                  <Icon type="tags"/>
                  <span>{L.Tooltip_title}</span>
                </span>
              </Menu.Item>
              {modelState.classification.map(x =>
                <SubMenu
                  key={x.id}
                  title={
                    <span>
                      <Tooltip title={x.text} key={x.id}>
                        <Icon type="tags"/>
                      </Tooltip>
                      <span>{x.text}</span>
                    </span>
                  }
                >
                  {x.children.map(xs =>
                    <SubMenu key={xs.id} title={xs.text}>
                      {xs.children.map(xsw =>
                        <Menu.Item key={xsw.id}>
                          {xsw.text}
                        </Menu.Item>
                      )}
                    </SubMenu>
                  )}
                </SubMenu>
              )}
            </Menu>
          </div>
          <div
            className={styles.contentContainer}
            style={{
              width: (document.body.clientWidth <= 768) ? '100%' : ((this.state.collapsed)
                ? (document.body.clientWidth - 67)
                : (document.body.clientWidth - 240)),
              margin: (document.body.clientWidth <= 768) ? 0 : '20px 0',
              padding: (document.body.clientWidth <= 768) ? 0 : '0 5px',
            }}
          >
            <div
              className={styles.contentHeaderContainr}
              style={{
                padding: (document.body.clientWidth <= 768) ? 0 : '',
              }}
            >
              <div
                className={styles.contentHeader}
                style={{
                  padding: (document.body.clientWidth <= 768) ? 20 : '',
                  height: (document.body.clientWidth <= 768) ? 'auto' : '',
                }}
              >
                <span className={styles.label}>{L.label}</span>
                <Input id={'myInput'} placeholder={L.myInput_placeholder}
                       className={styles.input} onChange={this.handleChange}
                       defaultValue={(hashJson.value) ? hashJson.value : ''}
                />
                <Button type="primary" onClick={this.handleSubmitClick}
                        className={styles.submitButton}>{L.submitButton}</Button>
              </div>
            </div>
            <div className={styles.tableContainer}>
              <QueryKnowledgeTable
                dispatch={this.props.dispatch}
                geogId={modelState.geogId}
                changeCount={this.changeCount}
                count={this.state.count}
                queryKnowledgeTableData={modelState.queryKnowledgeTableData}
                totalProperty={modelState.totalProperty}
                params={this.props.params}
                pageNumber={this.state.pageNumber}
                changePageNumber={this.changePageNumber}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default connect(({modelQueryKnowledge, loading}) => ({modelQueryKnowledge, loading}))(QueryKnowledge);
