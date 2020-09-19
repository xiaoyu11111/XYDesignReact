---
nav:
  title: Components
  path: /components
---

## CodeEditor

Demo:

```tsx
import React, { useState } from 'react';
import { CodeEditor } from 'xy-design-react';

export default () => {
  const [value, setValue] = useState(`(() => {
return XYDesignReact
})`);

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
