---
nav:
  title: Components
  path: /components
---

## EditorForEcharts

### 编辑器与 echarts 图关联

```tsx
import React, { useState, useEffect } from 'react';
import { ReactEcharts, CodeEditor } from 'xy-design-react';
import _ from 'lodash';

export default () => {
  let defaultOption = {
    tooltip: { show: true },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };
  const [value, setValue] = useState(`(() => {
return {
  tooltip:{show:true},
  xAxis: {
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}
})()`);

  let [option, setOption] = useState(defaultOption);
  return (
    <React.Fragment>
      <CodeEditor
        value={value}
        onChange={val => {
          setValue(val);
        }}
      />
      <button
        onClick={() => {
          try {
            let overWriter = eval(value);
            if (_.isEmpty(overWriter)) {
              setOption({});
            } else {
              setOption(overWriter);
            }
          } catch (error) {}
        }}
      >
        确定
      </button>
      <br />
      {_.isEmpty(option) ? null : (
        <ReactEcharts theme="light" option={option} />
      )}
    </React.Fragment>
  );
};
```
