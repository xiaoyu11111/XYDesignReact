# XY Design React

## Getting Started

Install,

```bash
$ npm i xy-design-react
```

Example,

```bash
import React, { useState } from 'react';
import { CodeEditor } from 'xy-design-react';

export default () => {
  const [value, setValue] = useState(`(() => {
return XYDesignReact
})()`);

  return (
    <CodeEditor
      theme="default"
      value={value}
      onChange={val => {
        setValue(val);
      }}
    />
  );
};
```

##组件链接

[XYDesignReact](https://zengxiaotian.gitee.io/XYDesignReact)

欢迎大家提交 pr，壮大组件库

## 组件开发

Install,

```bash
$ git clone https://github.com/xiaoyu11111/XYDesignReact.git
$ npm i
$ npm run start
```
