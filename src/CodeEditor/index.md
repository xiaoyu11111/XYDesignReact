---
nav:
  title: Components
  path: /components
---

## CodeEditor

### javascript xq-dark 模式

```tsx
import React, { useState } from 'react';
import { CodeEditor } from 'xy-design-react';

export default () => {
  const [value, setValue] = useState(`(() => {
return XYDesignReact
})()`);

  return (
    <CodeEditor
      value={value}
      onChange={val => {
        setValue(val);
      }}
    />
  );
};
```

### javascript default 模式

```tsx
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
