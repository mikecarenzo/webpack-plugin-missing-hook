# webpack-plugin-missing-hook
Demonstrates a missing hook in the webpack compilation process

### Setup & Run

1. Clone or Download: `git clone https://github.com/mikecarenzo/webpack-plugin-missing-hook.git`
2. `cd webpack-plugin-missing-hook`
3. `npm install`
4. `npm run build`

### Expected Output

```
Notice: no .d.ts files at processAssets hook:
---------------------------------------------
[
  {
    name: 'Person.js',
    source: CachedSource {
      _source: [ConcatSource],
      _cachedSourceType: undefined,
      _cachedSource: undefined,
      _cachedBuffer: undefined,
      _cachedSize: undefined,
      _cachedMaps: Map {},
      _cachedHashUpdate: undefined
    },
    info: { javascriptModule: false }
  }
]

Notice: .d.ts files at record hook:
------------------------------------
[
  {
    name: 'Person.js',
    source: RawSource {
      _valueIsBuffer: false,
      _value: 'var Person;(()=>{"use strict";var e={};(()=>{var n=e;n.__esModule=!0,n.Person=void 0;var r=function(){function e(e,n){this.name=e}return e.prototype.getGreeting=function(){return"Hello, my name is "+name+"."},e}();n.Person=r})(),Person=e})();',
      _valueAsBuffer: undefined
    },
    info: { javascriptModule: false, minimized: true }
  },
  {
    name: 'Person.d.ts',
    source: { source: [Function: source], size: [Function: size] },
    info: {}
  }
]
asset Person.d.ts 334 bytes [emitted]
asset Person.js 242 bytes [emitted] [minimized] (name: main)
./src/Person.ts 503 bytes [built] [code generated]
webpack 5.24.4 compiled successfully in 3084 ms
```
