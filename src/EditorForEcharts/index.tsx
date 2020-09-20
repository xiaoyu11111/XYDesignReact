import React from 'react';

import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import {
  chartLightTheme,
  chartDarkTHeme,
} from '../../public/comon/echartThemes.js';

echarts.registerTheme('chartLightTheme', chartLightTheme);
echarts.registerTheme('chartDarkTHeme', chartDarkTHeme);

export default ({ option, theme }: { option: object; theme: string }) => {
  let themeType =
    theme === 'dark'
      ? chartDarkTHeme
      : theme === 'light'
      ? chartLightTheme
      : {};
  return <ReactEcharts theme={themeType} option={option} />;
};
