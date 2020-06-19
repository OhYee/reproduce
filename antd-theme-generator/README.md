# Reproduce

1. Use `yarn` to install the dependencies.
2. Run `yarn build`
3. Search `ant-tag-`, and find some background is `color(~colorPalette(xxx, x));`

This problem can be triggered randomly and may require multiple executions to see the result of the reproduce.

## Output

```
> yarn build
yarn run v1.22.4
$ node index.js
[
  '@theme',      '@blue-1',    '@blue-2',    '@blue-3',    '@blue-4',
  '@blue-5',     '@blue-6',    '@blue-7',    '@blue-8',    '@blue-9',
  '@blue-10',    '@purple-1',  '@purple-2',  '@purple-3',  '@purple-4',
  '@purple-5',   '@purple-6',  '@purple-7',  '@purple-8',  '@purple-9',
  '@purple-10',  '@cyan-1',    '@cyan-2',    '@cyan-3',    '@cyan-4',
  '@cyan-5',     '@cyan-6',    '@cyan-7',    '@cyan-8',    '@cyan-9',
  '@cyan-10',    '@green-1',   '@green-2',   '@green-3',   '@green-4',
  '@green-5',    '@green-6',   '@green-7',   '@green-8',   '@green-9',
  '@green-10',   '@magenta-1', '@magenta-2', '@magenta-3', '@magenta-4',
  '@magenta-5',  '@magenta-6', '@magenta-7', '@magenta-8', '@magenta-9',
  '@magenta-10', '@pink-1',    '@pink-2',    '@pink-3',    '@pink-4',
  '@pink-5',     '@pink-6',    '@pink-7',    '@pink-8',    '@pink-9',
  '@pink-10',    '@red-1',     '@red-2',     '@red-3',     '@red-4',
  '@red-5',      '@red-6',     '@red-7',     '@red-8',     '@red-9',
  '@red-10',     '@orange-1',  '@orange-2',  '@orange-3',  '@orange-4',
  '@orange-5',   '@orange-6',  '@orange-7',  '@orange-8',  '@orange-9',
  '@orange-10',  '@yellow-1',  '@yellow-2',  '@yellow-3',  '@yellow-4',
  '@yellow-5',   '@yellow-6',  '@yellow-7',  '@yellow-8',  '@yellow-9',
  '@yellow-10',  '@volcano-1', '@volcano-2', '@volcano-3', '@volcano-4',
  '@volcano-5',  '@volcano-6', '@volcano-7', '@volcano-8', '@volcano-9',
  ... 177 more items
]
🌈 Theme generated successfully. OutputFile: /home/ohyee/projects/reproduce/antd-theme-generator/color.less


👇These backgrond color are unexcepted
.ant-tag-red {color: #f5222d;background: color(~`colorPalette("@{drawer-bg}", 1)`);border-color: #ffa39e;}
.ant-tag-geekblue {color: #2f54eb;background: color(~`colorPalette("@{dropdown-menu-submenu-disabled-bg}", 1)`);border-color: #adc6ff;}
.ant-tag-purple {color: #722ed1;background: color(~`colorPalette("@{table-expand-icon-bg}", 1)`);border-color: #d3adf7;}
.ant-tag-error {color: #f5222d;background: color(~`colorPalette("@{drawer-bg}", 1)`);border-color: #ffa39e;}
Done in 13.49s.
```