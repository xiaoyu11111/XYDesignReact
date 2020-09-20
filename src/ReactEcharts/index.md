---
nav:
  title: Components
  path: /components
---

## ReactEcharts

### 原始风格

```tsx
import React from 'react';
import { ReactEcharts } from 'xy-design-react';

export default () => (
  <ReactEcharts
    option={{
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
    }}
  />
);
```

### 明亮风格

```tsx
import React from 'react';
import { ReactEcharts } from 'xy-design-react';

export default () => (
  <ReactEcharts
    theme="light"
    option={{
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
    }}
  />
);
```

### 暗黑风格

```tsx
import React from 'react';
import { ReactEcharts } from 'xy-design-react';

export default () => (
  <ReactEcharts
    theme="dark"
    option={{
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
    }}
  />
);
```
