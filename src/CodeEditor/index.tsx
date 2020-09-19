import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/lib/codemirror.css');
require('codemirror/theme/xq-dark.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/markdown/markdown');
// 添加高亮
require('codemirror/addon/selection/active-line');
require('codemirror/addon/fold/foldcode');
require('codemirror/addon/fold/foldgutter');

export default ({
  value,
  onChange,
  className,
  ...rest
}: {
  value: string;
  onChange: () => {};
  className: string;
}) => {
  return (
    <React.Fragment>
      <CodeMirror
        value={value}
        options={{
          mode: 'javascript',
          theme: 'xq-dark',
          tabSize: 2,
          lineNumbers: true,
          line: true,
          foldGutter: true,
          lineWrapping: true,
          gutters: [
            'CodeMirror-linenumbers',
            'CodeMirror-foldgutter',
            'CodeMirror-line-markers',
          ],
        }}
        className={`${className}`}
        onBeforeChange={(editor, data, nextVal) => {
          onChange(nextVal);
        }}
        {...rest}
      />
    </React.Fragment>
  );
};
