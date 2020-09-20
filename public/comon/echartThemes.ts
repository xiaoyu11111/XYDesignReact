import _ from 'lodash';

const colorLight20: any = [
  '#2e5bff',
  '#8c54ff',
  '#00c1d4',
  '#33ac2e',
  '#fad052',
  '#e84a50',
  '#ed44a1',
  '#fb6633',
  '#fb982e',
  '#64ca31',
  '#5781ff',
  '#9071ff',
  '#24d7e0',
  '#56b84f',
  '#ffe27a',
  '#f57676',
  '#fa70b7',
  '#ff8a5c',
  '#ffb357',
  '#85d656',
];
export const chartLightTheme: any = {
  color: colorLight20,
  backgroundColor: 'rgba(0, 0, 0, 0)',
  grid: {
    containLabel: true,
    left: 'auto',
    right: 'auto',
    top: '20',
    bottom: '0',
  },
  textStyle: {
    decoration: 'none',
    fontFamily:
      '微软雅黑, Microsoft YaHei, PingFangSC-Regular, Arial, Verdana, sans-serif',
    fontFamily2: '微软雅黑', // IE8- 字体模糊并且不支持不同字体混排，额外指定一份
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 12,
  },
  title: {
    textStyle: {
      color: '#363c42',
    },
    subtextStyle: {
      color: '#aaaaaa',
    },
  },
  line: {
    itemStyle: {
      normal: {
        borderWidth: 1,
      },
    },
    lineStyle: {
      normal: {
        width: 2,
      },
    },
    symbolSize: 4,
    symbol: 'emptyCircle',
    smooth: false,
  },
  radar: {
    name: {
      textStyle: {
        color: '#363c42cc',
        fontSize: 14,
      },
    },
    itemStyle: {
      borderWidth: 1,
    },
    lineStyle: {
      width: 2,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#8097b14D',
      },
    },
    splitArea: {
      areaStyle: {
        color: [
          'transparent',
          '#8097B126',
          'transparent',
          '#8097B126',
          'transparent',
        ],
      },
      symbolSize: 4,
      symbol: 'emptyCircle',
      smooth: false,
    },
  },
  bar: {
    itemStyle: {
      normal: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
      emphasis: {
        barBorderWidth: 0,
        barBorderColor: '#ccc',
      },
    },
  },
  pie: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  scatter: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  boxplot: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  parallel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  sankey: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  funnel: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
      emphasis: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
  },
  gauge: {
    // TODO 修改字体
    color: [colorLight20[0], '#d1e1ff'],
    title: {
      textStyle: {
        color: '#363c42',
      },
      subtextStyle: {
        color: '#5F6167cc',
        fontSize: 16,
      },
    },
    textStyle: {
      fontFamily: 'OPPOSans B,Microsoft YaHei, PingFangSC-Regular',
    },
  },
  candlestick: {
    itemStyle: {
      normal: {
        color: '#c23531',
        color0: '#314656',
        borderColor: '#c23531',
        borderColor0: '#314656',
        borderWidth: 1,
      },
    },
  },
  graph: {
    itemStyle: {
      normal: {
        borderWidth: 0,
        borderColor: '#ccc',
      },
    },
    lineStyle: {
      normal: {
        width: 1,
        color: '#aaa',
      },
    },
    symbolSize: 4,
    // "symbol": "emptyCircle", // symbol 和 smooth 一起可能会触发颜色丢失的问题
    // "smooth": false,
    color: [
      '#2e5bff',
      '#8c54ff',
      '#00c1d4',
      '#33ac2e',
      '#fad052',
      '#e84a50',
      '#ed44a1',
      '#fb6633',
      '#fb982e',
      '#64ca31',
      '#5781ff',
      '#9071ff',
      '#24d7e0',
      '#56b84f',
      '#ffe27a',
      '#f57676',
      '#fa70b7',
      '#ff8a5c',
      '#ffb357',
      '#85d656',
    ],
    label: {
      normal: {
        textStyle: {
          color: '#eeeeee',
        },
      },
    },
  },
  map: {
    itemStyle: {
      normal: {
        areaColor: '#d1e1ff',
        borderColor: '#444',
        borderWidth: 0.5,
        label: {
          textStyle: {
            color: 'rgba(255,255,255,1)',
          },
        },
      },
      emphasis: {
        areaColor: '#2e5bff',
        borderColor: '#444',
        borderWidth: 1,
        label: {
          textStyle: {
            color: 'rgba(255,255,255,1)',
          },
        },
      },
    },
    label: {
      normal: {
        textStyle: {
          color: 'rgba(255,255,255,1)',
        },
      },
      emphasis: {
        textStyle: {
          color: 'rgba(255,255,255,1)',
        },
      },
    },
    // emphasis: {
    //     label: {
    //         textStyle: {
    //             color: 'rgba(255,255,255,1)'
    //         }
    //     }
    // },
  },
  geo: {
    itemStyle: {
      normal: {
        areaColor: '#d1e1ff',
        borderColor: '#444',
        borderWidth: 0.5,
      },
      emphasis: {
        areaColor: '#2e5bff',
        borderColor: '#444',
        borderWidth: 1,
      },
    },
    label: {
      normal: {
        textStyle: {
          color: '#000000',
        },
      },
      emphasis: {
        textStyle: {
          color: '#ffffff',
        },
      },
    },
  },
  categoryAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
        width: 1,
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
        width: '0.5',
      },
      length: 4,
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(54,60,66,0.5)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#E0E7FF'],
        width: 0.5,
        type: 'dashed',
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  valueAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(54,60,66,0.5)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#E0E7FF'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  logAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(54,60,66,0.5)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#E0E7FF'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  timeAxis: {
    axisLine: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#E0E7FF',
      },
    },
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(54,60,66,0.5)',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: ['#E0E7FF'],
      },
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)'],
      },
    },
  },
  toolbox: {
    iconStyle: {
      normal: {
        borderColor: '#999999',
      },
      emphasis: {
        borderColor: '#666',
      },
    },
  },
  legend: {
    itemHeight: 12,
    pageTextStyle: {
      color: 'rgba(54,60,66,0.7)',
    },
    textStyle: {
      color: 'rgba(54,60,66,0.7)',
      fontSize: 12,
    },
  },
  tooltip: {
    axisPointer: {
      lineStyle: {
        color: '#ccc',
        width: 1,
      },
      crossStyle: {
        color: '#ccc',
        width: 1,
      },
    },
    backgroundColor: 'rgb(255, 255, 255,0.95)',
    padding: [6, 12, 6, 12],
    extraCssText: 'box-shadow:0px 0px 10px #aeaeae',
    textStyle: {
      color: '#595959',
      fontSize: 12,
      fontFamily:
        '微软雅黑, Microsoft YaHei, PingFangSC-Regular,"Microsoft YaHei","PingFangSC-Regular","-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n  "Noto Color Emoji"',
    },
    domStyles: {
      zIndex: 8,
      transition:
        'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      backgroundColor: 'rgb(255, 255, 255)',
      opacity: 0.95,
      boxShadow: '0px 0px 10px #aeaeae',
      borderRadius: '3px',
      color: '#595959',
      fontSize: '12px',
      fontFamily:
        '微软雅黑, Microsoft YaHei, PingFangSC-Regular,"Microsoft YaHei","PingFangSC-Regular","-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n  "Noto Color Emoji"',
      lineHeight: '24px',
      padding: '6px 12px',
    },
  },
  timeline: {
    lineStyle: {
      color: '#293c55',
      width: 1,
    },
    itemStyle: {
      normal: {
        color: '#293c55',
        borderWidth: 1,
      },
      emphasis: {
        color: '#a9334c',
      },
    },
    controlStyle: {
      normal: {
        color: '#293c55',
        borderColor: '#293c55',
        borderWidth: 0.5,
      },
      emphasis: {
        color: '#293c55',
        borderColor: '#293c55',
        borderWidth: 0.5,
      },
    },
    checkpointStyle: {
      color: '#e43c59',
      borderColor: 'rgba(194,53,49, 0.5)',
    },
    label: {
      normal: {
        textStyle: {
          color: '#293c55',
        },
      },
      emphasis: {
        textStyle: {
          color: '#293c55',
        },
      },
    },
  },
  visualMap: {
    textStyle: {
      color: 'rgba(54,60,66,0.5)',
    },
    inRange: {
      color: ['#d1e1ff', '#2e5bff'],
    },
    color: ['#d1e1ff', '#2e5bff'],
  },
  // visualMap:{
  //     textStyle:{
  //         color:'rgba(54,60,66,0.5)'
  //     },
  //     inRange:{
  //         color:['#d1e1ff','#2e5bff']
  //     }
  // },
  dataZoom: {
    backgroundColor: 'rgba(47,69,84,0)',
    dataBackgroundColor: 'rgba(47,69,84,0.3)',
    fillerColor: 'rgba(167,183,204,0.4)',
    handleColor: '#a7b7cc',
    handleSize: '100%',
    textStyle: {
      color: '#333',
    },
  },
  markPoint: {
    label: {
      normal: {
        textStyle: {
          color: '#eeeeee',
        },
      },
      emphasis: {
        textStyle: {
          color: '#eeeeee',
        },
      },
    },
  },
  // custom
  liquidFill: {
    // TODO 修改字体
    title: {
      textStyle: {
        fontFamily:
          'OPPOSans B,微软雅黑, Microsoft YaHei, PingFangSC-Regular,"Microsoft YaHei","PingFangSC-Regular","-apple-system", "Segoe UI", Roboto, "Helvetica Neue", Arial,\n  "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n  "Noto Color Emoji"',
        color: '#363c42',
      },
    },
    outline: {
      borderDistance: 0,
      itemStyle: {
        borderColor: colorLight20[0],
        borderWidth: 2,
        shadowColor: 'transparent',
        shadowBlur: 0,
      },
    },
    itemStyle: {
      shadowColor: 'transparent',
      shadowBlur: 0,
    },
    label: {
      color: '#363c42',
      titleColor: '#5F6167cc',
      insideColor: '#e9ecf2',
      nameFontSize: 16,
      valueFontSize: 42,
      fontFamily: '微软雅黑, Microsoft YaHei, PingFangSC-Regular',
    },
    textStyle: {
      fontFamily: 'OPPOSans B,微软雅黑, Microsoft YaHei, PingFangSC-Regular',
    },
  },
  tree: {
    lineStyle: {
      color: '#ccc',
    },
    label: {
      color: '#363c42cc',
    },
  },
  bigNumber: {
    color: '#5f6167cc',
    fontSize: '16px',
  },
};

let chartDarkThemeOption: any = {
  color: [
    '#1c3fd9',
    '#6c3dd9',
    '#0099ad',
    '#1d851d',
    '#d4a839',
    '#c2343e',
    '#ca348c',
    '#d94c26',
    '#d4751c',
    '#47a31',
  ],
  color20: [
    '#1c3fd9',
    '#6c3dd9',
    '#0099ad',
    '#1d851d',
    '#d4a839',
    '#c2343e',
    '#ca348c',
    '#d94c26',
    '#d4751c',
    '#47a31',
    '#0e27b3',
    '#4e29b3',
    '#007387',
    '#105e13',
    '#ad8326',
    '#9c222e',
    '#a11f6f',
    '#ad2e11',
    '#ad560e',
    '#2e7d11',
  ],
  backgroundColor: '#1f1f1f',
  legend: {
    textStyle: {
      color: 'rgba(233,236,242,0.45)', // 图例文字颜色
    },
    pageTextStyle: {
      color: 'rgba(233,236,242,0.45)', //  legend.type 为 'scroll' 时有效。 图例页信息的文字样式。
    },
    pageIconColor: '#E0E0E0', //翻页下一页的三角按钮颜色
    pageIconInactiveColor: '#838A9A', //翻页（即翻页到头时）
  },
  axisLabel: {
    textStyle: {
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      color: 'rgba(233,236,242,0.3)',
    },
    color: 'rgba(233,236,242,0.3)',
  },
  tooltip: {
    backgroundColor: '#1f1f1f',
    textStyle: {
      color: '#A6A6A6',
      fontSize: 12,
    },
    extraCssText: '',
    domStyles: {
      backgroundColor: '#1f1f1f',
      color: '#A6A6A6',
      boxShadow: 'none',
    },
  },
  categoryAxis: {
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(233,236,242,0.3)',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#8097B1C2'],
      },
    },
  },
  logAxis: {
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(233,236,242,0.3)',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#8097B1C2'],
      },
    },
  },
  timeAxis: {
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(233,236,242,0.3)',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#8097B1C2'],
      },
    },
  },
  splitLine: {
    splitLine: {
      lineStyle: {
        color: ['#8097B1C2'],
      },
    },
  },
  // 数值型坐标轴默认参数
  //  valueAxis: {
  //     axisLabel: {
  //         textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
  //             color: 'rgba(233,236,242,0.3)'
  //         },
  //         color:'rgba(233,236,242,0.3)'
  //     },
  //     splitLine: {           // 分隔线
  //         show: true,        // 默认显示，属性show控制显示与否
  //         lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
  //             color: ['rgba(233,236,242,0.3)'],
  //         }
  //     },
  // },
  valueAxis: {
    axisLabel: {
      show: true,
      textStyle: {
        color: 'rgba(233,236,242,0.3)',
      },
    },
    splitLine: {
      lineStyle: {
        color: ['#8097B1C2'],
      },
    },
  },
  map: {
    itemStyle: {
      normal: {
        label: {
          show: false,
          textStyle: {
            color: 'rgba(255,255,255,1)',
          },
        },
      },
      emphasis: {
        label: {
          textStyle: {
            color: 'rgba(255,255,255,1)',
          },
        },
      },
    },
  },
  visualMap: {
    textStyle: {
      color: 'rgba(233,236,242,0.3)',
    },
  },
  // custom
  // TODO 修改字体
  liquidFill: {
    label: {
      insideColor: '#363c42',
      color: '#e9ecf2b3',
      titleColor: '#e9ecf2b3',
    },
  },
  gauge: {
    // TODO 修改字体
    color: [colorLight20[0], '#d1e1ff'],
    title: {
      textStyle: {
        color: '#e9ecf2',
      },
      subtextStyle: {
        color: '#e9ecf2b3',
      },
    },
  },
  // 雷达图默认参数
  radar: {
    name: {
      textStyle: {
        color: '#e9ecf2b2',
      },
    },
  },
  tree: {
    lineStyle: {
      color: '#E9ECF24d',
    },
    label: {
      color: '#E9ECF2',
    },
  },
  bigNumber: {
    color: '#e9ecf2b3',
  },
};

export const chartDarkTHeme: any = _.defaultsDeep(
  chartDarkThemeOption,
  chartLightTheme,
);
