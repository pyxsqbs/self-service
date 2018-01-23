import React from 'react';
import styles from './Histogram.css';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';

class Histogram extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      labelItems: [],
      mainItems: [],
      mainColors: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      labelItems: [...nextProps.labelItems],
      mainItems: [...nextProps.mainItems],
      mainColors: [...nextProps.mainColors],
    });
  }

  render() {
    const labelItems = this.state.labelItems;
    const labelData = [];
    for (let i = 0; i < labelItems.length; i++) {
      labelData.push({
        value: labelItems[i],
        textStyle: {
          color: '#939cae',
          fontFamily: 'Microsoft YaHei',
        },
      })
    }

    const mainItems = this.state.mainItems;
    const mainColors = this.state.mainColors;
    const mainData = [];
    for (let i = 0; i < mainItems.length; i++) {
      mainData.push({
        name: labelItems[i],
        value: mainItems[i],
        itemStyle: {
          normal: {
            color: mainColors[i],
          },
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [0, -1],
            textStyle: {
              color: '#939cae',
              fontFamily: 'Microsoft YaHei',
              fontSize: 11,
            },
          },
        },
      })
    }

    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '0%',
        right: '4%',
        bottom: '1%',
        top: '13%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        show: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: ['#eeeeee'],
            width: 1,
            type: 'solid',
          },
        },
        splitNumber: 9,
      },
      yAxis: {
        type: 'category',
        data: labelData,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      series: [{
        name: 'number',
        type: 'bar',
        data: mainData,
        barWidth: '16px',
        barMinHeight: 1,
      }]
    };

    return (
      <div className={styles.histogramContainer}>
        <ReactEchartsCore echarts={echarts} option={option} style={{height: '100%'}}/>
      </div>
    )
  }
}

export default Histogram;
